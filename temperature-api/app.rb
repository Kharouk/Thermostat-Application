require 'sinatra/base'
require 'json'

class ThermostatAPI < Sinatra::Base

  before do
    headers['Access-Control-Allow-Origin'] = "*"
    headers['Access-Control-Allow-Methods'] = ['OPTIONS', 'GET', 'POST']
    content_type :json
  end 

  get '/temperature' do
    File.read('location.json')
  end

  get '/temperature/:location' do
    location_hash = { location: params[:location] }
    File.write('location.json', location_hash.to_json) 
    File.read('location.json')
  end
end