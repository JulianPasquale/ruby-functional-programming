require 'httparty'
require 'byebug'
require 'json'

get_data = -> url, options { HTTParty.get(url, options).body }

parse_data = -> data { JSON.parse(data, symbolize_names: true) }

pagination_options = -> page_number { { query: { page: page_number }, format: :json } }

api_fetch = -> url do
  -> page_number do
    (pagination_options >> get_data.curry[url] >> parse_data).call(page_number)
  end
end

URL = 'https://swapi.dev/api/people'

start_wars_api = api_fetch.call(URL)

puts start_wars_api.call(1)
puts start_wars_api.call(2)
