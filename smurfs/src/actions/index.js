import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_ERROR = 'FETCH_SMURFS_ERROR';
export const POST_SMURFS_START = 'POST_SMURFS_START';
export const POST_SMURFS_SUCCESS = 'POST_SMURFS_SUCCESS';
export const POST_SMURFS_ERROR = 'POST_SMURFS_ERROR';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export function getSmurfs() {
  return function(dispatch) {
    dispatch({ type: FETCH_SMURFS_START });
    axios 
      .get("http://localhost:3333/smurfs")
      .then(response => dispatch({ type: FETCH_SMURFS_SUCCESS, payload: response.data }))
      .catch(error => dispatch({ type: FETCH_SMURFS_ERROR, payload: error }))
  };
}

export function addSmurf(newSmurf) {
  return function(dispatch) {
    dispatch({ type: POST_SMURFS_START });
    axios 
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(response => dispatch({ type: POST_SMURFS_SUCCESS, payload: response.data }))
      .catch(error => dispatch({ type: POST_SMURFS_ERROR, payload: error }))
  };
}