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

# lambda that process one page.
# api: lambda to call for making requests.
# initial_page_numer: the "current_page" number.
# callback: block that will be called for each page.
process_pages = -> api, initial_page_number = 1, &callback do
  # A specific page response.
  response = api.call(initial_page_number)

  # Process the response.
  callback.call(response)

  return unless response[:next]

  # Recursive call to process the next page.
  process_pages.call(api, initial_page_number + 1, &callback)
end

# Usage:
URL = 'https://swapi.dev/api/people'.freeze

# lambda that gets data from Star Wars API.
star_wars_api = api_fetch.call(URL)

process_pages.call(star_wars_api) do |response|
  response[:results].each do |elem|
    puts "Processed #{elem[:name]}"
  end
end
