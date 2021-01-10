import initialState from "./state";

const initialState = {
  gridArray: [],
  fauxgridArray: [],
  gridCell: {
    value: 0,
    idx: "row_col",
    neighbors: [
      "r-1_c-1",
      "r-1_c",
      "r-1_c+1",
      "r_c-1",
      "r_c",
      "r_c+1",
      "r+1_c-1",
      "r+1_c",
      "r+1_c+1"
    ],
    liveNeighborsCount: 0
  },
  gridSpeed: 1,
  gridSize: 10,
  generation: 0,
  isRunning: false
};

export default function gridReducer(state = initialState, action) {
  switch (action.type) {

    case GAME_START:
      return {
        ...state,
        isRunning: true
      };

    case GAME_STOP:
      return {
        ...state,
        isRunning: false
      };

    case CLEAR_GRID:
      let clearGrid = [];
      for (i = 0; i < gridSize; i++) {
        let clonedCell = { ...state.gridArray[i] };
        clearGrid.push({ ...clonedCell, value: 0 });
      }
      return {
         ...state,
         gridArray: clearGrid
         };

    case RANDOM_GRID:
      let randomGrid = [];
      for (i = 0; i < gridSize; i++) {
        let ranNum = () => Math.floor(Math.random() * 2);
        let clonedCell = { ...state.gridArray[i] };
        randomGrid.push({ ...clonedCell, value: ranNum });
      }
      return { 
        ...state,
        gridArray: randomGrid 
      };

    case INCREMENT_ONE:
      return{...state6}  

    case TOGGLE_CELL:
      return{...state}  

    case SELECT_PRESET:
      return{...state}  

    case SELECT_SPEED:
      return{...state}  

    case SELECT_SIZE:
      return{...state}  

    default:
     return { ...state }
      
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loginStart: true
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loginStart: false,
        loginSuccess: true,
        signupNew: false
      };

    case LOGIN_ERROR:
      return {
        ...state,
        loginStart: false,
        loginError: true
      };

    case SIGNUP_START:
      return {
        ...state,
        signupStart: true
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        signupStart: false,
        signupNew: true
      };

    case SIGNUP_ERROR:
      return {
        ...state,
        signupStart: false,
        signupError: true
      };

    case GET_VIDEOS_START:
      return {
        ...state,
        getVideosStart: true
      };

    case GET_VIDEOS_SUCCESS:
      let ap = action.payload;
      console.log(
        "reducer--GET_VIDEOS_SUCCESS case",
        { ap },
        "ap.videos",
        ap.videos
      );
      return {
        ...state,
        getVideosStart: false,
        getVideosError: false,
        videoList: action.payload.videos
      };

    case GET_VIDEOS_ERROR:
      return {
        ...state,
        getVideosStart: false,
        getVideosError: true
      };

    case GET_FINDVID_START:
      return {
        ...state,
        getVidSearchStart: true
      };

    case GET_FINDVID_SUCCESS:
      return {
        ...state,
        getVidSearchStart: false,
        getVidSearchError: false,
        videoSearch: action.payload.videos
      };

    case GET_FINDVID_ERROR:
      return {
        ...state,
        getVidSearchStart: false,
        getVidSearchError: true
      };

    case GET_USER_VIDEOS_START:
      return {
        ...state,
        getUserVideosStart: true
      };

    case GET_USER_VIDEOS_SUCCESS:
      return {
        ...state,
        getUserVideosStart: false,
        getUserVideosError: false,
        userVideos: action.payload
      };

    case GET_USER_VIDEOS_ERROR:
      return {
        ...state,
        getUserVideosStart: false,
        getUserVideosError: true
      };

    case GET_SINGLE_VIDEO_START:
      return {
        ...state,
        getSingleVideoStart: true
      };

    case GET_SINGLE_VIDEO_SUCCESS:
      return {
        ...state,
        getSingleVideoStart: false,
        getSingleVideoError: false,
        singleVideo: action.payload
      };

    case GET_SINGLE_VIDEO_ERROR:
      return {
        ...state,
        getSingleVideoStart: false,
        getSingleVideoError: true
      };

    case POST_VIDEO_START:
      return {
        ...state,
        postVideoStart: true
      };

    case POST_VIDEO_SUCCESS:
      console.log("action.payload in reducers", action.payload);
      return {
        // ...state,
        // videos: [...state.videos, action.payload],
        postVideoStart: false,
        singleVideo: action.payload
      };

    case POST_VIDEO_ERROR:
      return {
        ...state,
        postVideoStart: false,
        postVideoError: true
      };

    case LOGOUT:
      return {
        ...state
      };

    default:
      return state;
  }
};

export default reducer;

import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  GET_VIDEOS_START,
  GET_VIDEOS_SUCCESS,
  GET_VIDEOS_ERROR,
  GET_FINDVID_START,
  GET_FINDVID_SUCCESS,
  GET_FINDVID_ERROR,
  GET_USER_VIDEOS_START,
  GET_USER_VIDEOS_SUCCESS,
  GET_USER_VIDEOS_ERROR,
  GET_SINGLE_VIDEO_START,
  GET_SINGLE_VIDEO_SUCCESS,
  GET_SINGLE_VIDEO_ERROR,
  POST_VIDEO_START,
  POST_VIDEO_SUCCESS,
  POST_VIDEO_ERROR,
  LOGOUT
} from "../actions";
