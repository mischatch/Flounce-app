class Api::ProjectsController < ApplicationController


  def index
    @projects = Project.all
    render :index
  end

  def show
    @project = Project.find(params[:id])
    # render :show
  end

  def create
    @project = Project.new(project_params)
    if @project.save
      render :show
    else
      # render json: {errors: @project.errors.full_messages}, status 422
    end
  end

  private

  def project_params
    params.require(:project).permit(:user_id, :title, :description, :image_id)
  end

end
