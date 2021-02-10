import React from 'react';
import {TodoList} from './TodoList'

export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO App Manager</h3>
        <TodoList todoList={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            Text:
          </label>
          <input
            id="new-todo"
            name="text"
            onChange={this.handleChange}
            value={this.state.text}
          />
          
          <br></br>
          <label>
              Priority:
          </label>
          <select className="form-control select" 
          name="priority" value={this.state.priority} 
          onChange={this.handleChange}>
              <option value="">Select priority</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
          </select>
          <br></br>
          <button>
            Activity #{this.state.items.length + 1}
          </button>
        </form> 
      </div>
    );
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
        alert("Text cannot be empty.");
    } else if (!this.state.priority.length) {
        alert("Select priority number.");
    }
    else {
        const newItem = {
        text: this.state.text,
                priority: this.state.priority,
                dueDate: new Date()
        };
                this.setState(prevState => ({
                items: prevState.items.concat(newItem),
                        text: ''
                }));
    }
  }
}