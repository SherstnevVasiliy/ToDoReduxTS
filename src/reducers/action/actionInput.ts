let nextTodoId = 0;

export const addTodo = (taskName: any) => ({
  type: 'ADD_TODO',
  payload: {
    id: ++nextTodoId,
    taskName,
    done: false,
  },
});