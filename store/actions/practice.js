export const ADD_SHOT = "ADD_SHOT";
export const UNDO = "UNDO";

export const addShot = (shot) => {
  return { type: ADD_SHOT, shot: shot };
};

export const undo = () => {
  return { type: UNDO };
};
