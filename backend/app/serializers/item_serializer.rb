class ItemSerializer < ActiveModel::Serializer
    attributes :name, :qty, :category, :user 
end
  