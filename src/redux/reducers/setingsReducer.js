
import { connectAdvanced } from "react-redux";
import { ADD_TEXT, ADD_FETCH_DATA } from "../actions/setingsAction";

let initialState = {
  textData:[],
  dataServer:[]
}


export const setingReducer = (state= initialState,action) =>{

  const {type,payload} = action

  switch(type){
    case ADD_TEXT:{
      return{
        ...state,
        textData:state.textData.concat(payload)
      }
    }
    case ADD_FETCH_DATA:{
      return{
        ...state,dataServer:payload
      }
    }
    default:return state
  }

}

export const setingsData =(state)=>{
  return state.setingItem;

}