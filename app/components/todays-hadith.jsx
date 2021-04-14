import React, { Component } from 'react';

export default class TodaysHadith extends Component {
    render () {
        return (
        <div className="rk-card rk-card-right">
            <h5 className="rk-card-hearding">আজকের হাদিস</h5>
            <div className="rk-card-text-wrap">
                <img src="010-Quran.png" alt=""/>
                <p>{this.props.todaysHadith.hadith} <span>{this.props.todaysHadith.ref}</span></p>
            </div>
        </div>
		);
    }
}