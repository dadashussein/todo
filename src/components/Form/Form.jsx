import React from 'react';
import { useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';
import './form.css';
import ReactCSSTransitionGroup from 'react-transition-group';const Form = ({input,setInput,todos,setTodos, editTodo, setEditTodo}) => {


    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) =>
        todo.id === id ? {title, id, completed} : todo
        );
        setTodos(newTodo);
        setEditTodo('');
    };

    useEffect(() => {
        if(editTodo) {
            setInput(editTodo.title);
            } else {
                setInput('');
                }
    }, [setInput, editTodo]
    );
    const onInputChange = (e) => {
        setInput(e.target.value)
    };

    
    const onFormSubmit = (e) => {
      e.preventDefault()
      if(!editTodo) {

      setTodos([...todos, {id: uuidv4(), title: input, completed: false}]);
      setInput('');
      } else {
        updateTodo(input, editTodo.id, editTodo.completed);
      
  }};

  return (
    <div onSubmit={onFormSubmit} className='form'>
      <input 
      type="text" 
      placeholder='Enter a todo'
      className='task-input'
        value={input}
        required
        onChange={onInputChange}
      />
        <button className='button-add' onClick={onFormSubmit} type="submit">
            {editTodo ? 'Update' : 'Add'}
        </button>
    </div>
  )
}

export default Form
