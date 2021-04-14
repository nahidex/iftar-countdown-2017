import React, { Component } from 'react';
import Moment from 'moment';

export default class IftarTimeToday extends Component {
    render () {
		
        return (
			<div className="rk-card rk-time-card">
				<img src="035-dates.png" alt=""/>
				<h6>আজকের ইফতারের সময়</h6>
				<h2>{Moment(this.props.iftarTime, 'hh:mm').format('hh:mm')}</h2>
			</div>
		);
    }
}