import React, { Component } from 'react';
import Moment from 'moment';

export default class NextSehriTime extends Component {
    render () {
        return (
			<div className="rk-card rk-time-card">
				<img src="019-iftar.png" alt=""/>
				<h6>পরবর্তী সেহরির সময়</h6>
				<h2>{Moment(this.props.nextSheheriTime, 'hh:mm').format('hh:mm')}</h2>
			</div>
		);
    }
}