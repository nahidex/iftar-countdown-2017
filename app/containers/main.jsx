import React, { Component } from 'react';
import ramadanList from '../../ramadanList';

import IftarTimeToday from '../components/iftar-time-today.jsx';
import NextSheheriTime from '../components/next-sehri-time.jsx';
import CountDownTimer from '../components/countdown-timer.jsx';

export default class Main extends Component {
	constructor(props) {
		super(props);
		var d = new Date();
		this.state = {
			countData: {
				total: null,
				days: null,
				hours: null,
				minutes: null,
				seconds: null
			},
			staticInfo:  this.findOne(ramadanList, d.getLongMonth() + ' ' + d.getDate()),
			nextStaticInfo:  this.findOne(ramadanList, d.getLongMonth() + ' ' + d.getDate())
		};
	}

	componentDidMount() {
		this.timerId = setInterval(() => {
			this.updateTime();
		}, 1000);
	}

	componentDidUpdate() {
		if(this.state.countData.total < 0){
			clearInterval(this.timerId);
		}
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	updateTime() { 
		var setCountDown = this.setCountDown(this.getEndTime());
		this.total = setCountDown.total;
		this.setState({
			countData: setCountDown
		});
	}

	findOne(list, date) {
		return list.filter(function(x){
			return x.date === date;
		});
	}

	getEndTime() {
		var d = new Date();
		var singleRamadan = this.findOne(ramadanList, d.getLongMonth() + ' ' + d.getDate());
		var makeJsDateType = singleRamadan[0].date + ', ' + '2017 ' + singleRamadan[0].iftarTime;
		return new Date(makeJsDateType).getTime();
	}

	setCountDown(endTime) {

		var now = new Date().getTime();
		var distance = endTime - now;

		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		
		return {
			total: distance,
			days: days,
			hours: hours,
			minutes: minutes,
			seconds: seconds
		}
	}
	
	render() {
		return (
            <div className="mains">
                <CountDownTimer countData={this.state.countData} staticInfo={this.state.staticInfo[0]}/>
                <div className="card-wrapper">
                    <IftarTimeToday iftarTime={this.state.staticInfo[0].iftarTime}/>
                    <NextSheheriTime nextSheheriTime={this.state.nextStaticInfo[0].sheriLastTime} />
                </div>
                
            </div>
		);
	}
}