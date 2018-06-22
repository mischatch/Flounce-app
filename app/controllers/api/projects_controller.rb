class Api::ProjectsController < ApplicationController


  def index
    @projects = Project.all
    render :index
  end

  def show
    @project = Project.find(params[:id])
  end

  def create
    @project = Project.new(project_params)
    @project.user_id = current_user.id
    if @project.save
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def update
    # debugger
    @project = Project.find(params[:id])
    if @project.update(project_params)
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def delete
    project = Project.find(params[:id])
    project.destroy
    render :index
  end

  private

  def project_params
    params.require(:project).permit(:user_id, :title, :description)
  end

end
