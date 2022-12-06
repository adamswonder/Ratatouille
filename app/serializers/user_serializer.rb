class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :image_url, :bio, :reviews
  #TODO:adds association
end

