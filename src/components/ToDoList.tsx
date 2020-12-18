import { useDispatch, useSelector } from 'react-redux';
import { deleteTODO } from '../reducers/action/actionList';
import { editTODO } from '../reducers/action/actionEditList';
import { IInitial } from '../store/initialState';

const ToDoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: IInitial) => state.todos);
  const handleClick = (id: string) => dispatch(deleteTODO(id));
  const handleClickEdit = (id: string) => dispatch(editTODO(id));

  if (!todos || !todos.length) {
    return <p className="todo-item no-todo-item">нет текущих задач</p>;
  }
  return (
    <ul>
      {todos.map((todo: any) => (
        <div className="todo-item-wrap" key={todo.id}>
          <li
            className={todo.done ? 'todo-item-done' : 'todo-item'}
            onClick={() => handleClickEdit(todo.id)}
          >
            {todo.taskName}
          </li>
          <span className="btn-delete" onClick={() => handleClick(todo.id)}>
            X
          </span>
        </div>
      ))}
    </ul>
  );
};

export default ToDoList;
