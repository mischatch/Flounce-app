class Api::ImagesController < ApplicationController

  def index
    @images = Image.all
  end

  def show
    @image = Image.find(params[:id])
  end

  def create
    @image = Image.new({image: params['image']['image'], project_id: params['project_id']})
    if @image.save
      render :show
    else
      # render json: {errors: @image.errors.full_messages}, status 422
    end
  end
end
