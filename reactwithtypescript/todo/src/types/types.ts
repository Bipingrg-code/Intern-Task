// types.ts
export interface RootState {
    todos: Todo[];
    // Add other slices as needed
  }
  
  export interface Todo {
    id: number;
    text: string;
    completed: boolean;
    // Add other properties as needed
  }
  