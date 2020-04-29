import {createStore} from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD"
const MINUS = "MINUS"

const countModifier = (count=0, action) => {
  switch(action.type){
    case "ADD": 
      return count +1;
    case "MINUS": 
      return count -1;
    default:
      return count;
  
    //return하는 것이 데이터가 됨
  }

};
// reducer : 유일하게 데이터를 modify하는 함수

const countStore = createStore(countModifier);

const onChange=()=>{
  number.innerText = countStore.getState();
}

countStore.subscribe(onChange);

const handleAdd = ()=>{
  countStore.dispatch({type : ADD})
};

const handleMinus = ()=>{
  countStore.dispatch({type : MINUS})
};

add.addEventListener("click",handleAdd);
minus.addEventListener("click", handleMinus);

console.log(countStore.getState());