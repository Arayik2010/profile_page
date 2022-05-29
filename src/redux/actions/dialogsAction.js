export const ADD_DIALOG_TEXT = "ADD_DIALOG_TEXT";

export const dialogAction = (dialogs) => {
  return {
    type: "ADD_DIALOG_TEXT",
    payload: dialogs,
  };
};
