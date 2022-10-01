require 'httparty'
require 'byebug'
require 'json'

class APIService
  attr_reader :url

  def initialize(url)
    @url = url
  end

  def call(page_number)
    response = HTTParty.get(
      url, options(page_number)
    )

    parse_response(response)
  end

  private

  def options(page_number)
    { query: { page: page_number }, format: :json }
  end

  def parse_response(response)
    JSON.parse(
      response.body,
      symbolize_names: true
    )
  end
end

# Using the service:

URL = 'https://swapi.dev/api/people'.freeze

# Service instance that gets data from Star Wars API
star_wars_api = APIService.new(URL)

current_page = 1

while next_page_available
  # A specific page response
  response = star_wars_api.call(current_page)
  
  puts response

  # If response[:next] is nil, there are no more pages to proccess.
  break unless response[:next]

  current_page += 1
end
