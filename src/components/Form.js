import React, {useState} from "react";
import { useSelector,  useDispatch} from "react-redux";
import styled from "styled-components";
import { addTodo } from "../moduels/todo";

const Form = () => {
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const dispatch = useDispatch();
    const todoList = useSelector(state => {
      return state.todoReducer.todos
        
    })
    // console.log(todoList)
    
    const handleAdd = () => {
    if (!title && !contents) return;
      const newTodoItem = {
        id: todoList.length +1 ,
        title,
        contents,
        isDone : false,
      }
      console.log(newTodoItem);
      dispatch(addTodo(newTodoItem))
    }
    
    return (
        <StForm>
          <input type="text" placeholder="제목" value={title} onChange={(e) => {
            setTitle(e.target.value)
          }} />
          <input type="text" placeholder="내용" value={contents} onChange={(e) => {
            setContents(e.target.value)
          }}/>
          <button onClick={handleAdd}>추가하기</button>

        </StForm>
      );

}

export default Form;

const StForm = styled.div`
    align-items: center;
    background-color: #eee;
    border-radius: 12px;
    justify-content: space-between;
    margin: 0 autu;
    padding: 30px;
`;