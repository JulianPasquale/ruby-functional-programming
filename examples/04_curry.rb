require 'httparty'
require 'byebug'
require 'json'

# Returns the query params needed to request a specific page.
pagination_options = -> page_number { { query: { page: page_number }, format: :json } }

# Parses the response body.
parse_response = -> response { JSON.parse(response.body, symbolize_names: true) }

# Receives the url and the options, and triggers the request.
get_data = -> url, options { HTTParty.get(url, options) }

# Receives a url and returns a lambda.
api_fetch = -> url do
  pagination_options >> get_data.curry[url] >> parse_response
end

# Usage:
URL = 'https://swapi.dev/api/people'.freeze

# lambda that gets data from Star Wars API.
star_wars_api = api_fetch.call(URL)

current_page = 1

loop do
  # A specific page response.
  response = star_wars_api.call(current_page)

  puts response

  # If response[:next] is nil, there are no more pages to proccess.
  break unless response[:next]

  current_page += 1
end
