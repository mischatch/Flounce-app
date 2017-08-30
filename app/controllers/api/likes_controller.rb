class Api::LikesController < ApplicationController
  def index
    @likes = Like.all
  end

  def create
    @like = Like.new(likes_params)
    @like.user.id = current_user.id

    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end


  def destroy
    debugger
    @like = current_user.likes.find_by(params[:user_id])

   if @like.destroy
     render :show
   end
  end

  private

  def likes_params
    params.require(:like).permit(:user_id, :project_id)
  end

end
