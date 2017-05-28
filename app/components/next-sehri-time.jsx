import React, { Component } from 'react';

export default class NextSehriTime extends Component {
    render () {
        return (
			<div className="card sheheri-time">
				<img src="clock.svg"/>
				<h5>পরবর্তী সেহরির সময়</h5>
				<h6>{this.props.nextSheheriTime.slice(0, 5)}</h6>
			</div>
		);
    }
}