require 'httparty'
require 'byebug'
require 'json'

api_fetch = -> url do
  -> page_number do
    response = HTTParty.get(url, { query: { page: page_number }, format: :json })

    JSON.parse(
      response.body,
      symbolize_names: true
    )
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
