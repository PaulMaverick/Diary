import React from 'react'



function ToDoList() {
    const [todos, setTodos] = React.useState([])
    const [todo, setTodo] = React.useState("")
    const [todoEditing, setTodoEditing] = React.useState(null)
    const [editingText, setEditingText] = React.useState("")

    React.useEffect(() => {
        const json = localStorage.getItem("todos");
        const loadedTodos = JSON.parse(json);
        if (loadedTodos) {
          setTodos(loadedTodos);
        }
      }, []);
    
      React.useEffect(() => {
        const json = JSON.stringify(todos);
        localStorage.setItem("todos", json);
      }, [todos]);

    function toDoSubmit(e) {
        e.preventDefault()

        const newTodo = {
            Id: new Date().getTime(),
            text: todo,
            completed: false
        }

        setTodos([...todos].concat(newTodo))
        setTodo("")
    }

    function deleteTodo(id) {
        let updatedTodos = [...todos].filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
      }

    function toggleComplete(id) {
        const updatedTodos = [...todos].map((todo) => {
            if(todo.id === id) {
                todo.completed = !todo.completed
            }

            return todo
        })

        setTodos(updatedTodos)
    }

    function editTodo(id) {
        const updatedTodos = [...todos].map((todo) => {
            if(todo.id === id) {
                todo.text = editingText
            }
            return todo 
        })
        setTodos(updatedTodos)
        setTodoEditing(null)
        setEditingText("")
    }

    return (
        <div>
        <div className='todoHeader'>
        <h1>Todo List</h1>
        </div>
        <form onSubmit={toDoSubmit}>
          <input
            placeholder='What do you plan to do?'
            className='todoInput'
            type="text"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <button type="submit" className='todoBtn'>Add Todo</button>
        </form>
        <div className='todoEntry'>
          <h2>To Do:</h2>
        </div>
        <div>
          {todos.map((todo) => (
            <div key={todo.id} className="todo entryBody">
              <div className="todo-text">
                <input
                  className='todoCheckbox'
                  type="checkbox"
                  id="completed"
                  checked={todo.completed}
                  onChange={() => toggleComplete(todo.id)}
                />
                {todo.id === todoEditing ? (
                  <input
                    
                    type="text"
                    onChange={(e) => setEditingText(e.target.value)}
                  />
                ) : (
                  <div className='todoText'>{todo.text}</div>
                )}
              </div>
              <div className="todo-actions">
                {todo.id === todoEditing ? (
                  <button onClick={() => editTodo(todo.id)}>Submit Edits</button>
                ) : (
                  <button onClick={() => setTodoEditing(todo.id)}>Edit</button>
                )}
    
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
export default ToDoList