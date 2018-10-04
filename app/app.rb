require 'sinatra/base'

class App < Sinatra::Base
  
  enable :sessions
  
  get '/' do
    @city = session[:city]
    erb :index
  end

  post '/temperature' do
    session[:city] = params['city']
    erb :index
  end

  run! if app_file == $0
end