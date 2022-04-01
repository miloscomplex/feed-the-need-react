const token = localStorage.getItem('token')

export const API_ROOT = 'http://127.0.0.1:3000'
export const PARSE_JSON = res => res.json()
export const HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': `Bearer ${token}`
}

export const MAXTIME = 60

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