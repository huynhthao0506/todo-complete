import React from "react";
import './todofilter.css';

class TodoFilter extends React.Component{
    constructor() {
        super()
    }
    render() {
        return (
            <div className="todo-filter-container">
                <div className="todo-filter-count">3 items left</div>
                <div className="todo-filter-status">
                    <span className="active">All</span>
                    <span>Active</span>
                    <span>Complete</span>
                </div>
          </div>
        )
    }
}
export default TodoFilter