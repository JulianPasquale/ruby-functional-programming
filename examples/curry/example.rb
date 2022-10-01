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

star_wars_api = api_fetch.call(URL)

current_page = 1
next_page_available = true

while next_page_available
  response = star_wars_api.call(current_page)
  
  puts response

  next_page_available = response[:next]
  current_page += 1
end
