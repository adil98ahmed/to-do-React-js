import ADD_TODO, { DELETE_TODO } from './actions'
const todos = [
    {
      title: "learn node js",
      content: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "go to the sea",
      content: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "walk the dog",
      content: "Lorem ipsum dolor sit amet.",
    },
  ];
const RootReducer = (state = todos , action)=> {
    
    if(action.type == "ADD_ITEM"){
        return [...state, action.data]
    }
    else if(action.type == "DELETE_TODO"){
      state.splice(action.id,1);
      return [...state];
    }
    return state
    
}
export default RootReducer;



/**
 * 
 * 

 */