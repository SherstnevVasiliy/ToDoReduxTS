import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../reducers/action/actionInput';
// import ToDoList from './ToDoList';

const InputForm = () => {
  const [taskName, setTaskName] = useState('');
  const dispatch = useDispatch();

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (taskName !== '') {
      dispatch(addTodo(taskName));
      setTaskName('');
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTaskName(value);
  };

  return (
    <div>
      <div className="form">
        <div className="input-wrap">
          <input
            className="input"
            type="text"
            name="taskName"
            onChange={onChange}
            placeholder="Введите новую задачу...."
          />
        </div>
        <div>
          <button className="btn" onClick={clickHandler} type="submit">
            ДОБАВИТЬ
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
