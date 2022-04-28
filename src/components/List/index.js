import React, { Component } from "react";
import './todolist.css'
import TodoItem from "../Items";
import PropTypes from 'prop-types'

class TodoList extends Component {
    constructor(props) {
        super(props)     
    }
    render() {
        const {
            todos,
            // onTodoToggle,
            // onTodoEdit,
            // onTodoDelete
            ...restProps
        } = this.props
        console.log(todos)
        return(
            <div className="todo-list-container">
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo}
                    // onTodoToggle={onTodoToggle}
                    // onTodoEdit={onTodoEdit}
                    // onTodoDelete={onTodoDelete}
                    {...restProps}
                    />
                ))}
            </div>
        )
    }
}
TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoAction: PropTypes.func
}

TodoList.defaultProps = {
    todos: [],
    onTodoAction: null
}
export default TodoList