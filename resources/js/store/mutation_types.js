
import axios from 'axios'

class AuthService {
  baseUrl='localhost:8000/api'

  login(data) {
    return axios.post(`${this.baseUrl}/login`, data,  { headers: {
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    } },)
  }
}

export default new AuthService()