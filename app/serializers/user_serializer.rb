class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :image_url, :bio
  #TODO:adds association
end

