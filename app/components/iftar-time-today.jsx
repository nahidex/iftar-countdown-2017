import React, { Component } from 'react';

export default class IftarTimeToday extends Component {
    render () {
        return (
			<div className="card iftar-time">
				<img src="clock.svg"/>
				<h5>আজকের ইফতারের সময়</h5>
				<h6>{this.props.iftarTime.slice(0, 5)}</h6>
			</div>
		);
    }
}