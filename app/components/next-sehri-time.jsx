import React, { Component } from 'react';
import Moment from 'moment';

export default class NextSehriTime extends Component {
    render () {
        return (
			<div className="card sheheri-time">
				<img src="clock.svg"/>
				<h5>পরবর্তী সেহরির সময়</h5>
				<h6>{Moment(this.props.nextSheheriTime, 'hh:mm').format('hh:mm')}</h6>
			</div>
		);
    }
}