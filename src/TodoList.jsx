import {useSelector , useDispatch} from 'react-redux';
import {DELETE_TODO} from './redux/actions'
const TodoList = () => {
  const data = useSelector(state => state);
  const dispatch = useDispatch();
  const daleteItem = (id)=>{
    dispatch(DELETE_TODO(id))
  }
  
  const todosList =
    data && data.length > 0 ? (
      data.map((todo, i) => {
        return (
          <ul key={i}>
            <li className="border d-flex">
            <div className="text">
              <p>Title : {todo.title}</p>
              <p>Content : {todo.content}</p>
              <button onClick={()=>daleteItem(i)} className="btn btn-danger">Delete</button>
            </div>
            </li>
          </ul>
        );
      })
    ) : (
      <p className="h5 mx-5 text-muted">no items on the list ..</p>
    );

  return (
    <div className="text-left">
      <h5 className="mx-5 text-muted">Todos List</h5>
      {todosList}
    </div>
  );
};

export default TodoList;
