import axios from 'axios'
export const listLocation = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/location`)
    return data
    // dispatch({
    //     type: "SUCCESS",
    //     payload: data,
    //   })   
     
  } catch (error) {
    dispatch({
      type: "FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }  

}