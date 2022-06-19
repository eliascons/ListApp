import { useState } from 'react';


function ToDoHooks() {

    const [toDoInput, setToDoInput] = useState('');
    const [toDoList, setToDoList] = useState([]);

    const handleAddTodo = () => {
        console.log(toDoInput);
        setToDoList([...toDoList, {text: toDoInput, complete: false}]);
        setToDoInput('');

    }
    const handleRemove = (index) => {
        const newArray = [...toDoList];
        newArray.splice(index, 1);
        setToDoList(newArray);

    }

    const handleToggleToDo = (index) => {
        const newArray = [...toDoList];
        newArray[index].complete = !newArray[index].complete;
        setToDoList(newArray);

    }

    return (
        <div>

            <h1>Hooks ToDo</h1>
            <input value={toDoInput} onChange={(e) => setToDoInput(e.target.value)}></input>
            <button onClick={handleAddTodo}>Add</button>
            <ul>
                {toDoList.map((todo, index) => {
                    return (

                        <li key={index}  style={{textDecoration: todo.complete && 'line-through'}}>
                            <span onClick={() => handleToggleToDo(index)}>{todo.text}</span>
                            <button onClick={() => handleRemove(index)}>x</button>
                        </li>


                    );
                })}

            </ul>


        </div>
    )
}

export default ToDoHooks;
