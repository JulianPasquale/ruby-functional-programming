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

process_pages = -> api, callback, initial_page_number = 1 do
  result = api.call(initial_page_number)

  callback.call(result)

  return unless result[:next]

  process_pages.call(api, callback, initial_page_number + 1)
end

process_response = -> response do
  response[:results].each do |elem|
    puts "Processed #{elem[:name]}"
  end
end

process_pages.call(star_wars_api, process_response, 1)
