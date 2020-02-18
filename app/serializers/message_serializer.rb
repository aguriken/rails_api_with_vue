class MessageSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :content
end
