

import { Component } from 'react';

class ToDoClass extends Component {


  state = {
    toDoInput: '',
    toDoList: []

  }

  handleAddToDo = () => {
    this.setState({ toDoList: [...this.state.toDoList, this.state.toDoInput] });
  }

  handleChange = (event) => {
    this.setState({ toDoInput: event.target.value });
  }


  handleRemove = (index) => {
    console.log(index);
    const newToDoList = [...this.state.toDoList];
    newToDoList.splice(index, 1);
    this.setState({ toDoList: newToDoList});

  }

  componentDidMount = () => {
    console.log("!");

  }

  render() {
    return (
      <div>
        <h1>Class Todo!</h1>
        <input value={this.state.toDoInput} onChange={this.handleChange} />
        <button onClick={this.handleAddToDo}>add</button>

        <ul>
          {this.state.toDoList.map((todo, index) => {
            return (

              <li key={index}>{todo}
                <button onClick={()=>this.handleRemove(index)}>x</button>
              </li>


            );
          })}

        </ul>

      </div>
    )
  }


}
export default ToDoClass;



//----------------------------------------
// Hooks
// function App() {
//   return (
//     <div>

//     </div>
//   );
// }

// export default App;
