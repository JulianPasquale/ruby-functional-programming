require 'httparty'
require 'byebug'
require 'json'

# Receives a url and returns a lambda.
api_fetch = -> url do
  # Receives the page to request and returns a Hash with the reponse.
  -> page_number do
    # Builds the options hash and triggers the GET request.
    response = HTTParty.get(url, { query: { page: page_number }, format: :json })

    # Returns a Hash with the response body.
    JSON.parse(
      response.body,
      symbolize_names: true
    )
  end
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
