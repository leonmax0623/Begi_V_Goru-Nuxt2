export default axios => ({
  register(data) {
    return axios.post('/user/register', data)
  },
  login(data) {
    return axios.post('/user/login', data)
  },
  confirmEmail() {
    return axios.get('/user/confirm-email')
  },
  recoverPassword(params) {
    return axios.post('/user/password-recover', params)
  },
  getInfo() {
    return axios.get('/user/info')
  }
})