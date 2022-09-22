require 'httparty'
require 'byebug'
require 'json'

pagination_options = -> page_number { { query: { page: page_number }, format: :json } }

api_handler = -> url, options { puts 'request'; HTTParty.get(url, options) }

parse_response = -> response { JSON.parse(response.body, symbolize_names: true) }

starwars_characters_api = api_handler.curry['https://swapi.dev/api/people']

paginated_request = (starwars_characters_api << pagination_options) >> parse_response

enum = Enumerator.new do |y|
  current_page = 1
  result = paginated_request.call(current_page)
  
  loop do
    result[:results].each do |elem|
      y << elem
    end

    break unless result[:next]

    current_page += 1
    result = paginated_request.call(current_page)
  end
end

byebug

enum.first