const ADD = "ADD"

export const addTodo = (newTodoItem) => {
    return { type: "ADD", todo: newTodoItem}
   
}

const initialState = {
    todos: [ {
        id: 1,
        title: "제목",
        contents: "내용",
        isDone: false,
    },
    {
        id: 2,
        title: "제목22",
        contents: "내용22",
        isDone: false,
    }]
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:{
            let arr = [...state.todos, action.todo]
            return {
                ...state, todos:arr
            }
        }
        case "DELETE": {
            let arr = state.todos.filter(todo => todo.id !== action.id)
            // console.log(state.todos.id)
            return {
                ...state, todos:arr
            }
        }
        case "COMPLETE": {
            let arr = state.todos.map( todo => todo.id == action.id)
            return {
                ...state, todos: arr
            }
        }

      default:
        return state;
    }
  };
  
  export default todoReducer;