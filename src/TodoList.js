import React from 'react';
import {Todo} from './Todo'

export class TodoList extends React.Component {
    
    render() {
        return (
            <div>
                {this.props.todoList.map((element) => (
                    <Todo todo={element}></Todo>
                ))
                }   
            </div>
        );
    }

}