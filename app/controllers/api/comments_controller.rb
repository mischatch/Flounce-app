class Api::CommentsController < ApplicationController

  def index
    @comments = Project.find(params[:project_id]).comments
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = curren_user.id
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment
      @comment.destroy
      reder json: @comment
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:project_id, :body)
  end

end
