import React from "react";
import './todoitem.css';
import PropTypes from 'prop-types'
import clsx from 'clsx'

export const TodoActionTypes = {
	Toggle: 'TodoItem/Toggle',
	Edit: 'TodoItem/Edit',
	Delete: 'TodoItem/Delete'
}

class TodoItem extends React.Component {
    constructor(props) {
        super(props)

        this.handleTodoAction = this.handleTodoAction.bind(this)

    }

    handleTodoAction(todo, action) {
		const { onTodoAction } = this.props

		if (onTodoAction) {
			onTodoAction(todo, action)
		}
	}

    render() {
        const {todo} = this.props;
        return(
            <div className="todo-item-container">
            <span className="todo-item-toggle" onClick={this.handleTodoAction(todo, TodoActionTypes.Toggle) }>
                {todo.isCompleted && <img src="assets/complete-tick.svg" alt="complete-tick" />}
                {!todo.isCompleted && <img src="assets/active-tick.svg" alt="active-tick" />}
            </span>
            <div className={clsx('todo-item-content',{
                completed: todo.isCompleted
            })}>{todo.title}</div>
            <div className="todo-item-options">
                <span className="icon-btn" onClick={this.handleTodoAction(todo, TodoActionTypes.Edit)}>
                <img src="assets/edit.svg" alt="edit" />
                </span>
                <span className="icon-btn" onClick={this.handleTodoAction(todo, TodoActionTypes.Delete)}>
                <img src="assets/delete.svg" alt="close" />
                </span>
            </div>
        </div>
        )
    }
}


TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,

    onTodoAction: PropTypes.func
}

TodoItem.defaultProps = {
    onTodoAction: null
}
export default TodoItem