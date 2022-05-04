class ItemSerializer < ActiveModel::Serializer
    attributes :id, :name, :qty, :category, :user
end
  