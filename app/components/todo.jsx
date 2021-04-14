import React, { Component } from 'react';

export default class Todo extends Component {
    render () {
        return (
            <div className="rk-daily-todo">
            <div className="rk-card">
                <h4>দিনের কাজ</h4>
                <div className="wrap">
                    <h1>{this.props.todo}</h1>
                    <img src="033-Quran.png" alt=""/>
                </div>	
            </div>
        </div>
		);
    }
}