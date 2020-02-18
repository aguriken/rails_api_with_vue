module Api
  module V1
    class MessagesController < ApplicationController

      before_action :find_message, only: %i[show update destroy]
      
      def index
        render json: MessageSerializer.new(Message.all).serialized_json,
        status: :ok
      end

      def create
        message = Message.new(message_params)
        if message.save
          render json: MessageSerializer.new(message).serialized_json,
          status: :created
        else
          render json ErrorSerializer.new(message).serialized_json,
          status: :unprocessable_entity
        end
      end

      def show
        render json: MessageSerializer.new(@message).serialized_json,
        status: :ok
      end

      def update
        if @message.update(message_params)
          head :no_content
        else
          render json ErrorSerializer.new(@message).serialized_json,
          status: :unprocessable_entity
        end
      end

      def destroy
        if @message.destroy
          head :no_content
        else
          render json ErrorSerializer.new(@message).serialized_json,
          status: :unprocessable_entity
        end
      end

      private

      def message_params
        params.require(:message).permit(
          :title, :content
        )
      end

      def find_message
        @message = Message.find_by(id: params[:id])
        return if @message
        render status: :not_found
      end

    end
  end
end
