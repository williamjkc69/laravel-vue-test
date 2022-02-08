
import HTTP from '../Axios'

class AuthService {
  login(data) {
    return HTTP.post(`/login`, data)
  }
  logout() {
    return HTTP.post(`/logout`)
  }
  getSubjects(){
    return HTTP.get('subjects')
  }
}

export default new AuthService()