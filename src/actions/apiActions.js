import {FETCH_REQUEST,FETCH_SUCCESS,FETCH_FAILURE} from './actions';
import axios from 'axios';

const fetchRequest = ()=>{
    return({
        type:FETCH_REQUEST,
        loading:true
    }
    )
}

const fetchSuccess = (data)=>{
    const updatedItems = data.map((item) => ({
        ...item,
        imgSrc: `https://picsum.photos/200?random=${item.id}`,
      }));
    return({
        type:FETCH_SUCCESS,
        payload:updatedItems,
        loading:false
    })
}

const fetchFailure = (err)=>{
    return({
        type:FETCH_FAILURE,
        payload:err,
        loading:false
    })
}

export const fetchData =()=>{
    return(
        async (dispatch)=>{
            dispatch(fetchRequest());
            try{
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
                console.log(response.data);
                dispatch(fetchSuccess(response.data));
            }
            catch(error){
                dispatch(fetchFailure(error));
            }
        }

    )
} 