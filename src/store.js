import { createStore } from "redux";
import { createReducer, createAction,configureStore } from "@reduxjs/toolkit"

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// const reducer = (state = [], action) => {
//     switch (action.type) {
//         case addToDo.type:
//             console.log(action);
//             return [{ text: action.payload, id: Date.now() }, ...state];
//             // action에게 보내고 싶은 정보가 무엇이든지 payload와 함께 보내짐(toolkit이 제공)
//         case deleteToDo.type:
//             return state.filter(toDo => toDo.id !== action.payload);
//         default:
//             return state;

//     }
// };

//switch 필요 X
//상태 mutate가능
//새로운 상태일 때만 return 
const reducer = createReducer([], {
    [addToDo]: (state, action) => {
        state.push({ text: action.payload, id: Date.now() })
    },
    [deleteToDo]: (state, action) =>
        state.filter(toDo => toDo.id !== action.payload)
})

const store = configureStore({reducer});

export const actionCreators = {
    addToDo,
    deleteToDo
};

export default store;


