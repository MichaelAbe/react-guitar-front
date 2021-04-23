export const getGuitars = () => {
    return dispatch => {
        dispatch({type: 'LOADING' })
        fetch('http://localhost:3001/guitars')
        .then(response => response.json())
        .then(guitars => dispatch({ type: "SET_GUITARS", guitars }))
    }
}

  
export const addGuitar = (guitar, history) => {
    return dispatch => {
      fetch('http://localhost:3001/guitars', {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ guitar })
      })
        .then(response => response.json())
        .then(guitar => {
          dispatch({ type: "ADD_GUITAR", guitar })
          history.push("/guitars")
        })
    }
  }


  