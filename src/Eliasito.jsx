import { useState } from 'react';

function EliasComponent() {

    const [ToDoList, setToDoList] = useState([]);
    const [ToDoInput, setToDoInput] = useState('');

    const handleAdd = () => {
        console.log(ToDoInput);
        setToDoList([...ToDoList, {text: ToDoInput, complete: false}]);
        setToDoInput('');
    }

    const handleRemove = (index) => {

        const newList = [...ToDoList];
        newList.splice(index, 1)
        setToDoList(newList);

    }

    const handleComplete = (index) => {
        const newList = [...ToDoList];
        newList[index].complete = !newList[index].complete;
        setToDoList(newList);

    }

    return (
        <div>
            <h1> Elias To Do</h1>
            <input value={ToDoInput} onChange={(e) => setToDoInput(e.target.value)}></input>
            <button onClick={handleAdd}>Add</button>
            <ul>
                {ToDoList.map((item, index) => {
                    return (
                        
                        <li key={index}  style={{textDecoration: item.complete && 'line-through'}}  >
                            <span onClick={()=>handleComplete(index)}>{item.text} </span>
                            <button onClick={()=> handleRemove(index)}>X</button>
                        </li>


                    )
                })}

            </ul>


        </div>
    )



}

export default EliasComponent;
