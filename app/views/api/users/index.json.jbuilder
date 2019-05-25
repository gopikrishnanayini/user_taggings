json.data do
  json.payload do
    json.array! @result do |user|
      json.id user.id
      json.first_name user.first_name
      json.last_name user.last_name
      json.status user.status
      json.email user.email
      json.updated_at user.updated_at.strftime("%m/%d/%Y")
      if user.tags.present?
        json.tags user.tags do |tag|
          json.id tag.id
          json.tag tag.description
          json.updated_at tag.updated_at.strftime("%m/%d/%Y")
        end
      else
        json.tags []
      end
    end
  end
end
