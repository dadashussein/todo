import './App.css';
import React,{ useState , useEffect} from 'react';
//components
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import TodosList from './components/Todoslist/TodosList';


const App=()=> {
  const initalState = JSON.parse(localStorage.getItem('todos')) || [];
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState(initalState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  return (
   <div className='container'>
    <Header />
    <Form 
    input={input}
    todos={todos}
    setTodos={setTodos}
    setInput={setInput}
    editTodo={editTodo}
    setEditTodo={setEditTodo}
    />
    <TodosList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
   </div>
  );
}

export default App;
