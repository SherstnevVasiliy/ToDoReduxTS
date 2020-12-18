import initialState from '../store/initialState'

const reducer = (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case 'ADD_TODO':
            const { todos } = state;
            let newTodos = todos.map(item => item)
            newTodos.push(action.payload)
            return {
                ...state,
                todos: newTodos
                };

        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
                };
              
        case 'EDIT_TODO':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                      return { ...todo,
                        done: !todo.done
                      }
                    } else {
                      return todo;
                    }
                })
            }

        default:
            return state;
        
    }
    
}

export default reducer;

