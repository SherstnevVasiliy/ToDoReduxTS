import { ITodo } from './../store/initialState';
import initialState, { IInitial } from '../store/initialState';

const reducer = (state: IInitial = initialState, action: { type: string; payload: ITodo }) => {
  switch (action.type) {
    case 'ADD_TODO':
      const { todos } = state;
      let newTodos = todos.map((item) => item);
      newTodos.push(action.payload);
      return {
        ...state,
        todos: newTodos,
      };

    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };

    case 'EDIT_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, done: !todo.done };
          } else {
            return todo;
          }
        }),
      };

    default:
      return state;
  }
};

export default reducer;
