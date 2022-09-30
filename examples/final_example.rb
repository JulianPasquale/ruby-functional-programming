require 'httparty'
require 'byebug'
require 'json'

pagination_options = -> page_number { { query: { page: page_number }, format: :json } }

parse_response = -> response { JSON.parse(response.body, symbolize_names: true) }

get_data = -> url, options { puts 'request'; HTTParty.get(url, options) }

api_fetch = -> url do
  -> page_number do
    (pagination_options >> get_data.curry[url] >> parse_response).call(page_number)
  end
end

starwars_characters_api = api_fetch.call('https://swapi.dev/api/people')

process_page = -> y, api, page_number = 1 do
  result = api.call(page_number)

  result[:results].each do |elem|
    puts "Processed #{elem[:name]}"
    y << elem
  end

  return unless result[:next]

  process_page.call(y, api, page_number + 1)
end

lazy_load_elements_from = -> api do
  Enumerator.new do |y|
    process_page.call(y, api)
  end
end

enum = lazy_load_elements_from.call(starwars_characters_api)

byebug

enum.first
enum.lazy.drop(10).map { |character| character[:name] }.first(10)
