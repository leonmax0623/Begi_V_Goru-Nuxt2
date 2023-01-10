export default function({ $axios }) {
  $axios.onRequest((config) => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
  })
}
