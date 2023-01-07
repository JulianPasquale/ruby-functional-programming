require 'httparty'
require 'byebug'
require 'json'

url = 'https://swapi.dev/api/people'

# Returns the query params needed to request a specific page.
pagination_options = -> page_number { { query: { page: page_number }, format: :json } }

# Parses the response body.
parse_response = -> response { JSON.parse(response.body, symbolize_names: true) }

# Receives the request options and triggers the request.
# Uses the url variable defined in the lexical environment.
get_data = -> options { HTTParty.get(url, options) }

# lambda that gets data from Star Wars API.
star_wars_api = (pagination_options >> get_data >> parse_response)

current_page = 1

loop do
  # A specific page response.
  response = star_wars_api.call(current_page)

  puts response

  # If response[:next] is nil, there are no more pages to proccess.
  break unless response[:next]

  current_page += 1
end
