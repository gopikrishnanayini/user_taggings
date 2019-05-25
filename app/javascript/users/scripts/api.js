import data_service from 'homes/scripts/data_service'

export default {

  fetchUsers() {
    const url = '/api/users.json'
    return data_service.get(url)
  },

  createUser(data) {
    const url = '/api/users'
    return data_service.post(url, data)
  },

  updateUser(data) {
    const url = '/api/users/'+data.id
    return data_service.put(url, data)
  },

  showUser(data) {
    const url = '/api/users/'+data
    return data_service.get(url)
  },

  deleteUser(id) {
    const url = '/api/users/'+id
    return data_service.delete(url)
  },

  disableUser(data) {
    const url = '/api/update_status?id='+data.user.id
    return data_service.patch(url, data.user)
  },

  createTag(data) {
    const url = '/api/tags'
    return data_service.post(url, data)
  },

  updateTag(data) {
    const url = '/api/tags/'+data.id
    return data_service.put(url, data)
  },

  deleteTag(id) {
    const url = '/api/tags/'+id
    return data_service.delete(url)
  },
}
