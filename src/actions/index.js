export const getGuitars = () => {
    return dispatch => {
        dispatch({type: 'LOADING' })
        fetch('http://localhost:3001/guitars')
        .then(response => response.json())
        .then(guitars => dispatch({ type: "SET_GUITARS", guitars }))
    }
}


  