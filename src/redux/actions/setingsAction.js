export const ADD_TEXT = "ADD_TEXT";
export const ADD_FETCH_DATA = "ADD_FETCH_DATA";



export const inputTextAction = (data) => {
  return {
    type: "ADD_TEXT",
    payload: data,
  };
};

export const dataFetchingAction =(fetchData)=>{
  return {
    type:'ADD_FETCH_DATA',
    payload:fetchData
  }
}

export const fetchDataThunk =()=>async(dispatch)=>{
  const responce = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataFetching = await responce.json().then((res)=>dispatch(dataFetchingAction(res)))
}
