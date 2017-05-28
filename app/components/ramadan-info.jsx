import React, { Component } from 'react';

export default class RamadanInfo extends Component {
    render () {
        return (
			<div className="ramadan-info">
				<span>{this.props.staticInfo.ramadan} Ramadan, 1438 | {new Date().getDate()} {new Date().getLongMonth()}, {new Date().getFullYear()}</span>
			</div>
		);
    }
}