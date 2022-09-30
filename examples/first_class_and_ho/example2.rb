require 'httparty'
require 'byebug'
require 'json'

pagination_options = -> page_number { { query: { page: page_number }, format: :json } }

parse_response = -> data { JSON.parse(data, symbolize_names: true) }

api_fetch = -> url do
  -> options do
    HTTParty.get(url, options).body
  end
end

URL = 'https://swapi.dev/api/people'

start_wars_api = api_fetch.call(URL)

paginated_starwars_request = (start_wars_api << pagination_options) >> parse_response

current_page = 1
next_page_available = true

while next_page_available
  response = paginated_starwars_request.call(current_page)
  
  puts response

  next_page_available = response[:next]
  current_page += 1
end
