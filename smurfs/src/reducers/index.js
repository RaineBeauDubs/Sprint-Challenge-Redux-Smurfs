import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_ERROR,
  POST_SMURFS_START,
  POST_SMURFS_SUCCESS,
  POST_SMURFS_ERROR
} from '../actions/index';
/*
  Be sure to import in all of the action types from `../actions`
*/
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  addError: '',
  addSuccess: '',
  error: null
}

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state, 
        fetchingSmurfs: true
      }
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state, 
        smurfs: action.payload, 
        fetchingSmurfs: false
      }
    case FETCH_SMURFS_ERROR:
      return {
        ...state, 
        error: action.payload, 
        fetchingSmurfs: false
      }
    case POST_SMURFS_START:
      return {
        ...state, 
        addingSmurf: true,
        addError: '',
        addSuccess: ''
      }
    case POST_SMURFS_SUCCESS:
      return {
        ...state, 
        addingSmurf: false,
        addError: '',
        addSuccess: action.payload
      }
    case POST_SMURFS_ERROR:
      return {
        ...state, 
        addingSmurf: false,
        addError: action.payload,
        addSuccess: ''
      }
    default:
      return state;
  }
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default reducer;