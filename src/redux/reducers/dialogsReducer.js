import {ADD_DIALOG_TEXT} from '../actions/dialogsAction'

const initialState = {
  dialogs:[{messages:'hi',id:1}]
}

export const dialogsReducer = (state = initialState,action)=>{

  const {type,payload} = action

  switch(type) {
    case ADD_DIALOG_TEXT:{
      return {
        ...state,
        dialogs:state.dialogs.concat(payload)
      }
    }default:return state
  }
}

export const newDialogs = (state)=>{
  return state.dialogMessage;
}