import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setingsData } from "../../redux/reducers/setingsReducer";
import { inputTextAction, fetchDataThunk } from "../../redux/actions/setingsAction";

const Setings = () => {
  const dataSeting = useSelector(setingsData);
  const dispatch = useDispatch();
 
  const [text, setText] = useState("");

  // useEffect(()=>{
  //   dispatch(fetchDataThunk());
  //   return{}
  // },[])

  useEffect(() => {
    setText("");
  }, [dataSeting]);

  const indices = [];
  function getIndex() {
    for (let i = 0; i < dataSeting.textData.length; i++) {
      if (!indices.includes(dataSeting.textData[i])) {
        indices.push(dataSeting.textData[i]);
      } else {
      }
    }
    return indices;
  }
  getIndex();

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => dispatch(inputTextAction(text))}>add Text</button>
      {indices.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  );
};
export default Setings;
