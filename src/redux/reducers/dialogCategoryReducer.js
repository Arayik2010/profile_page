import {DIALOG_CAT} from '../actions/dialogCategoryAction'

const initialState = {
  navigation:[
  {
    name: "Aro",
    id: 0,
    path: "aro",
  },
  {
    name: "Karen",
    id: 1,
    path: "karen",
  },
  {
    name: "Alex",
    id: 2,
    path: "alex",
  },
  {
    name: "Saqo",
    id: 3,
    path: "saqo",
  },
]
};

export const dialogCategoryReducer =(state=initialState,action) => {

    const {type,payload}  = action;

    switch(type) {
        case DIALOG_CAT:{
            return {
              ...state,
              navigation:payload
            };
        }default:return state
    }
}

export const navigationCat=(state)=>{
    return state.navigationLink
}