require 'httparty'
require 'byebug'
require 'json'

url = 'https://swapi.dev/api/people'

pagination_options = -> page_number { { query: { page: page_number }, format: :json } }

parse_response = -> response { JSON.parse(response.body, symbolize_names: true) }

get_data = -> options { HTTParty.get(url, options) }

api_fetch = -> page_number do
  (pagination_options >> get_data >> parse_response).call(page_number)
end

puts api_fetch.call(1)
puts api_fetch.call(2)
