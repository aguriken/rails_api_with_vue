module Api
  module V1
    class MessagesController < ApplicationController
      def index
        render json: MessageSerializer.new(Message.all).serialized_json,
        status: :ok
      end
    end
  end
end
