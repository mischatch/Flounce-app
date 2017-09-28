class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def index
    @users = User.all
  end

  def update
    @user = User.find(params[:user][:id])
    if @user.update(user_params)
      render :show
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :about, :userpic, :email)
  end
end
