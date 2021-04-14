import React, { Component } from 'react';
import Moment from 'moment';

import RamadanInfo from './ramadan-info.jsx';

export default class CountdownTimer extends Component {
    render () {
		
		var time = Moment().format(('0' + this.props.countData.hours).slice(-2) 
									+ ':' + ('0' + this.props.countData.minutes).slice(-2) 
								+ ':' + ('0'+this.props.countData.seconds).slice(-2));
        return (
			<div className="rk-main-timer">
			<h3>{this.props.type ? 'সেহরীর সময় বাকি':'ইফতারের সময় বাকি'}</h3>
				<h1>{time}</h1>
				{/* <RamadanInfo staticInfo={this.props.staticInfo}/> */}
			</div>
		);
    }
}