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
# yielder: Enumerator::Yielder instance.
# initial_page_numer: the "current_page" number.
process_pages = -> api, yielder, initial_page_number = 1 do
  # A specific page response.
  response = api.call(initial_page_number)

  # Process each element.
  response[:results].each do |elem|
    puts "Processed #{elem[:name]}"
    yielder.yield(response)
  end

  return unless response[:next]

  # Recursive call to process the next page.
  process_pages.call(api, yielder, initial_page_number + 1)
end

# Receives the api lambda to call and an Enumerator instance.
lazy_load_elements = -> api do
  Enumerator.new do |yielder|
    process_pages.call(api, yielder)
  end
end

# Usage:
URL = 'https://swapi.dev/api/people'.freeze

# lambda that gets data from Star Wars API.
star_wars_api = api_fetch.call(URL)

# Enumerator instance that can be used to process elements
enum = lazy_load_elements.call(star_wars_api)

enum.each do |character|
  puts "Processed #{character[:name]}"
end

enum.first
enum.lazy.drop(10).map { |character| character[:name] }.first(10)
