json.data do
  json.payload do
    json.array! @result do |tag|
      json.id tag.id
      json.description tag.description
      json.updated_at tag.updated_at.strftime("%m/%d/%Y")
      json.user_id tag.user_id
    end
  end
end
