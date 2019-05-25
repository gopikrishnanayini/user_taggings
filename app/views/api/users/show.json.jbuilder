json.id @result.id
json.first_name @result.first_name
json.last_name @result.last_name
json.status @result.status
json.email @result.email
json.updated_at @result.updated_at.strftime("%m/%d/%Y")
json.tags @result.tags
