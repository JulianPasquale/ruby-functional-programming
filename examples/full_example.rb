require 'httparty'
require 'byebug'
require 'json'

pagination_options = -> page_number { { query: { page: page_number }, format: :json } }

api_handler = -> url, options { puts 'request'; HTTParty.get(url, options) }

parse_response = -> response { JSON.parse(response.body, symbolize_names: true) }

starwars_characters_api = api_handler.curry['https://swapi.dev/api/people']

paginated_request = (starwars_characters_api << pagination_options) >> parse_response

process_page = -> y, page_number = 1 do
  result = paginated_request.call(page_number)

  result[:results].each do |elem|
    puts "Processed #{elem[:name]}"
    y << elem
  end

  return unless result[:next]

  process_page.call(y, page_number + 1)
end

enum = Enumerator.new do |y|
  current_page = 1
  result = paginated_request.call(current_page)
  
  loop do
    result[:results].each do |elem|
      puts "Processed #{elem[:name]}"
      y << elem
    end

    break unless result[:next]

    current_page += 1
    result = paginated_request.call(current_page)
  end
end

enum2 = Enumerator.new do |y|
  process_page.call(y)
end

byebug

enum.first
enum.lazy.drop(10).map { |character| character[:name] }.first(10)
