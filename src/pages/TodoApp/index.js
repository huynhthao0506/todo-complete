import React, { Component } from "react";
import './TodoApp.css';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TodoForm from '../../components/Form'
import TodoFilter from '../../components/Filter'
import TodoList from '../../components/List'
import { TodoActionTypes } from "../../components/Items";

const todos = [
    {
        id: 1,
        title: 'Ăn bánh mì',
        isCompleted: true
    },
    {
        id: 2,
        title: 'Uống một tách trà nóng',
        isCompleted: false
    },
    {
        id: 3,
        title: 'Đến Academy học lập trình',
        isCompleted: true
    },
    {
        id: 4,
        title: 'Ăn trưa cùng crush',
        isCompleted: false
    },
    {
        id: 5,
        title: 'Thực hành lập trình',
        isCompleted: false
    },
]

class TodoApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos
        }

        this.handleTodoAction = this.handleTodoAction.bind(this)
    }
    componentDidMount() {
        this.setState({
            todos
        })
    }

    // handleTodoAction(todo, action) {
        
    //     switch (action) {
    //         case TodoActionTypes.Toggle: {
    //             const {todos} = this.state
    //             const newTodos = todos.map(element =>
	// 				element.id === todo.id ? { ...element, isCompleted: !element.isCompleted } : element
	// 			)
    //             this.setState({
    //                 todos: newTodos
    //             })
    //             break
    //         }
           
    //     }
    // }
    render () {
        const { todos } = this.state
        return(
            <div id="todo-app">
            <Header />
            <div className="todo-container-wrapper">
                <div className="todo-container">
                    <TodoForm />
                    <TodoFilter />
                    <TodoList todos = {todos} 
                    onTodoAction={this.handleTodoAction} />
                </div>
            </div>
            <Footer />
            </div>
        )
    }
}
export default TodoApp