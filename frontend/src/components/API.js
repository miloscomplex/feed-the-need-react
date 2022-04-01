import { API_ROOT, HEADERS } from '../constants'

export const FETCH = (url, state) => {
    const token = localStorage.getItem('token')
    fetch(`${API_ROOT}/${url}`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    .then(resp => {
      if (resp.status >= 400) {
        throw new Error("Server rsponded with an error!")
      }
      return resp.json()
    })
    .then(data => {
      state(data)
    }, 
    err => {
      console.log('an error has occured')
    })
}