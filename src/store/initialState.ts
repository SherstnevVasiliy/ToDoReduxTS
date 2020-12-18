export interface ITodo {
  id: number;
  taskName: string;
  done: boolean;
}

export interface IInitial {
  todos: ITodo[];
}

const initialState: IInitial = {
  todos: [],
};

export default initialState;
