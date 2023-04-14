/*
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
*/
export const ADD_ALBUM = "ADD_ALBUM";
/*
export const ADD_COMPANY_JOBS = "ADD_COMPANY_JOBS";

export const addToFavoriteAction = data => ({ type: ADD_TO_FAVOURITES, payload: data });
export const removeFromFavoriteAction = data => ({ type: REMOVE_FROM_FAVOURITES, payload: data });
*/

export const getAlbumsAction = query => {
  return async dispatch => {
    const baseEndpoint = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
    try {
      const response = await fetch(baseEndpoint + query);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: ADD_ALBUM, payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};


/*
 FETCHES
export const getCompanyAction = params => {
  return async dispatch => {
    const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";
    try {
      const response = await fetch(baseEndpoint + params.companyName);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: ADD_COMPANY_JOBS, payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
*/
