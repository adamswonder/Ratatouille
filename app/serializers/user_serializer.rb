class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio, :reviews
  #TODO:adds association
end

