import React, { Component } from 'react';

export default class TodaysAyah extends Component {
    render () {
        return (
        <div className="rk-card rk-card-right">
            <h5 className="rk-card-hearding">আজকের আয়াত</h5>
            <div className="rk-card-text-wrap">
                <img src="004-Quran.png" alt=""/>
                <p>{this.props.todaysAyah.ayah} <span>{this.props.todaysAyah.ref}</span></p>
            </div>
        </div>
		);
    }
}