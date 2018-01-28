class PollsController < ApplicationController
  before_action :set_poll, only: [:show, :update, :destroy, :rmember]

  # GET /polls
  def index
    @polls = Poll.all

    render json: @polls
  end

  # GET /polls/1
  def show
    render json: @poll
  end

  # POST /polls
  def create
    @poll = Poll.new(poll_params)

    if @poll.save
      render json: @poll, status: :created, location: @poll
    else
      render json: @poll.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /polls/1
  def update
    if @poll.update({title: poll_params[:title]})
      render json: @poll
    else
      render json: @poll.errors, status: :unprocessable_entity
    end
  end

  # DELETE /polls/1
  def destroy
    @poll.destroy
  end

  # Using POST because DELETE was giving me problems with params
  # POST /polls/1/rmuser - remove user from poll
  def rmember
    @poll.users.delete(User.find(poll_params[:mid]))
  end

  # POST /polls/1/adduser - add user to poll
  def amember
    @poll.users.create(User.find(poll_params[:mid]))
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_poll
      @poll = Poll.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def poll_params
      params.require(:poll).permit(:title, :id, :mid)
    end
end
