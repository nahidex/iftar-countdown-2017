import React, { Component } from 'react';

import RamadanInfo from './ramadan-info.jsx';

export default class CountdownTimer extends Component {
    render () {
        return (
			<div className="main-timer">
				<h3>ইফতারের সময় বাকি</h3>
				<h1>{('0' + this.props.countData.hours).slice(-2)}:{('0' + this.props.countData.minutes).slice(-2)}:{('0'+this.props.countData.seconds).slice(-2)}</h1>
				<RamadanInfo staticInfo={this.props.staticInfo}/>
			</div>
		);
    }
}