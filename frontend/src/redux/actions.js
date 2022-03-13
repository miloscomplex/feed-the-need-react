import { API_ROOT, PARSE_JSON, HEADERS } from '../constants'


export function loadItems() {
    return (dispatch) => {
      dispatch({ type: 'LOADING_ITEMS' })
      fetch(`${API_ROOT}/items`).then(PARSE_JSON)
      .then(data => dispatch({type: 'ADD_ROOMS', payload: data}))
    }
  }
  