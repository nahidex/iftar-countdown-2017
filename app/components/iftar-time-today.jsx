import React, { Component } from 'react';
import Moment from 'moment';

export default class IftarTimeToday extends Component {
    render () {
		
        return (
			<div className="card iftar-time">
				<img src="clock.svg"/>
				<h5>আজকের ইফতারের সময়</h5>
				<h6>{Moment(this.props.iftarTime, 'hh:mm').format('hh:mm')}</h6>
			</div>
		);
    }
}