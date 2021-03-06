class Api::SessionsController < ApplicationController
  def create
    # debugger
    @user = User.find_by_credentials(
      params[:user][:email_address],
      params[:user][:password]
    )

    if @user
      login(@user)
      render :show
    else
      render json: ["Invalid credentials"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["Nobody signed in"], status: 404
    end
  end
end
