import {useDispatch} from 'react-redux'
import {addTodo} from '../reducers/action/actionInput'
// import ToDoList from './ToDoList';


const InputForm = () => {
    const dispatch = useDispatch();
    const formHandler = (event: { preventDefault: () => void; target: { elements: any; }; }) => {
        event.preventDefault();
        let data = event.target.elements;
        if (data.taskName.value !== '') {
        dispatch(addTodo(data.taskName.value));
        data.taskName.value = '';
    }
    }
  
    return <div>
        <form className = 'form' onSubmit={formHandler}>
            <div className = 'input-wrap'>
                <input className = 'input' type = 'text' name = 'taskName' placeholder = 'Введите новую задачу....'/>
            </div>
            <div>
                <button className = 'btn' type='submit'>ДОБАВИТЬ</button>
            </div>
        </form>
    </div>
}


export default InputForm

