require 'httparty'
require 'byebug'
require 'json'

# Returns the query params needed to request a specific page.
pagination_options = -> page_number { { query: { page: page_number }, format: :json } }

# Parses the response body.
parse_response = -> response { JSON.parse(response.body, symbolize_names: true) }

# Receives a url and returns a lambda.
api_fetch = -> url do
  # Receives the options hash and triggers the request.
  -> options do
    HTTParty.get(url, options)
  end
end

# Usage:
URL = 'https://swapi.dev/api/people'.freeze

# parse_response.call(api_fetch.call(URL).call(pagination_options.call(page_number)))

# Analogous to the expression above.
star_wars_api = pagination_options >> api_fetch.call(URL) >> parse_response

current_page = 1

loop do
  # A specific page response.
  response = star_wars_api.call(current_page)
  
  puts response

  # If response[:next] is nil, there are no more pages to proccess.
  break unless response[:next]

  current_page += 1
end
