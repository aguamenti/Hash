class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)

    @message.author_id = current_user.id

    if(@message.messageable_type == 'Channel')
      @message.messageable_id = params[:channel_id]
    else
      @message.messageable_id = params[:direct_message_id]
    end

    if @message.save!
      render :show
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def update
    @message = current_user.messages.find(params[:id])
    if @message.update_attributes(message_params)
      render :show
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def destroy
    @message = Message.find(params[:id])
    if @message.delete
      render :show
    end
  end

  private
  def message_params
    params.require(:message).permit(:body, :messageable_type, :messageable_id)
  end
end
