import {FETCH_REQUEST,FETCH_SUCCESS,FETCH_FAILURE} from './actions';

const initialState = {
    data: [],
    loading: true,
    error:''
  };

  const apiReducer = (state = initialState,action)=>{
    switch(action.type){
        case FETCH_REQUEST: return({
            ...state,
            loading:true
        })
        case FETCH_SUCCESS: return({
            ...state,
            ...state.data,data:action.payload,
            loading:false,
            error:''
        })
        case FETCH_FAILURE: return({
            ...state,
            loading:false,
            data:[],
            error:action.payload
        })
        default: return({
            state
        })
    }
  }


  export default apiReducer;