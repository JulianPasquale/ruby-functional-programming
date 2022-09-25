require 'httparty'
require 'byebug'
require 'json'

get_data = -> options { HTTParty.get(url, options).body }

pagination_options = -> page_number { { query: { page: page_number }, format: :json } }

parse_data = -> data do
  JSON.parse(data, symbolize_names: true)
rescue JSON::ParserError
  puts 'catch the error'
end

api_fetch = -> url do
  -> page_number do
    (get_data >> parse_data).call(url)
  end
end

URL = 'https://swapi.dev/api/people'

puts api_fetch.call(URL)
