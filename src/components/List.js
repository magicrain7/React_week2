import React from "react";
import { useSelector,  useDispatch} from "react-redux";
import styled from "styled-components";




const List = (todos) => {

    const dispatch = useDispatch();
    const todoList = useSelector( (state) => {
        return state.todoReducer.todos
    })
    // console.log(todoList)
    const handleDelete = (id) => {
        dispatch({type:"DELETE", id: id})
        // console.log(id)
      }
    const handleComplete = (id) => {
        dispatch({type:"COMPLETE", id: id, isDone: true })
    }


    return (
        <div><h2>Working</h2>
        <StList>
        {todoList.map( (todo) => {
            return(
            <div key={todo.id}>
              <span>{todo.title}</span>
              <span>{todo.contents}</span>
              <button onClick={()=>handleDelete(todo.id)}>삭제</button>
              <button onClick={()=>handleComplete(todo.id)}>완료</button>
            </div>
          )
          })}
        </StList>
        </div>
    )

}

export default List;

const StList = styled.div`
    display: flex;  
    border: 4px solid teal;
    border-radius: 12px;
    padding: 12px 24px 24px;
    width: 270px;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
`;