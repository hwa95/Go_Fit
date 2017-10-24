class WelcomeController < ApplicationController

  def index
    @enroll = Enroll.find(params[:id])
    @course = Course.find(params[:id])
    @student = Student.find(params[:id])
  end

end
