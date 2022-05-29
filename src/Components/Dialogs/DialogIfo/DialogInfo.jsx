import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newDialogs } from "../../../redux/reducers/dialogsReducer";
import { dialogAction } from "../../../redux/actions/dialogsAction";

const DialogInfo = () => {
  const dialogsText = useSelector(newDialogs);
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  useEffect(() => {
    return setText("");
  }, [dialogsText]);

  let newDialogsText = {
    messages: text,
    id: +(dialogsText.dialogs.length + 1),
  };

  const dialogText = dialogsText.dialogs.map((item) => {
    return (
      <div key={item.id}>
        <p>{item.messages}</p>
      </div>
    );
  });

  return (
    <div className="dialogInfo">
      {dialogText}
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => dispatch(dialogAction(newDialogsText))}>Add</button>
    </div>
  );
};
export default DialogInfo;
