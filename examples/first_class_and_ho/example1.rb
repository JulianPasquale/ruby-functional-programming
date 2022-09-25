require 'httparty'
require 'byebug'
require 'json'

api_fetch = -> url do
  -> page_number do
    JSON.parse(
      HTTParty.get(url, { query: { page: page_number }, format: :json }).body,
      symbolize_names: true
    )
  end
end

URL = 'https://swapi.dev/api/people'

start_wars_api = api_fetch.call(URL)

puts start_wars_api.call(1)
puts start_wars_api.call(2)
