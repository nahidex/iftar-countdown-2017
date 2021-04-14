import React, { Component } from 'react';
import Moment from 'moment';
import ramadanList from '../../ramadanList';

import IftarTimeToday from '../components/iftar-time-today.jsx';
import NextSheheriTime from '../components/next-sehri-time.jsx';
import CountDownTimer from '../components/countdown-timer.jsx';
import TodaysAyah from '../components/todays-ayah.jsx';
import TodaysHadith from '../components/todays-hadith.jsx';
import Todo from '../components/todo.jsx';

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			countData: {
				total: null,
				days: null,
				hours: null,
				minutes: null,
				seconds: null
			},
			staticInfo:  this.findOne(ramadanList, this.getDate().getLongMonth() + ' ' + this.getDate().getDate()),
			nextStaticInfo: this.findOne(ramadanList, Moment(this.getDate()).add(1, 'days')._d.getLongMonth() + ' ' + Moment(this.getDate()).add(1, 'days').date()),
			isShehri: false

		};
	}

	componentDidMount() {
		this.timerId = setInterval(() => {
			this.updateTime();
		}, 1000);
	}

	componentDidUpdate() {
		// if(this.distanceToIFtar < 0) clearInterval(this.timerId);
		// if(this.distanceToShehri < 0) clearInterval(this.timerId);
		// if(this.distanceToNextShehri < 0) clearInterval(this.timerId);
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	updateTime() {
		var setCountDownForIftar = this.setCountDown(this.getEndTime());
		var setCountDownForShehri = this.setCountDown(this.getEndTimeForShehri());
		var setCountDownForNextShehri = this.setCountDown(this.getEndTimeForNextShehri());

		if(this.getEndTimeForShehri() > this.getDate().getTime()){
			this.setState({
				countData: setCountDownForShehri,
				isShehri: true,
				nextStaticInfo: this.findOne(ramadanList, Moment(this.getDate()).add(1, 'days')._d.getLongMonth() + ' ' + Moment(this.getDate()).add(1, 'days').date()),
			});
		}

		if(this.getEndTime() > this.getDate().getTime() && this.getEndTimeForShehri() < this.getDate().getTime()){
			this.setState({
				countData: setCountDownForIftar,
				isShehri: false,
				nextStaticInfo: this.findOne(ramadanList, Moment(this.getDate()).add(1, 'days')._d.getLongMonth() + ' ' + Moment(this.getDate()).add(1, 'days').date()),
			});
		}
		if(this.getEndTimeForNextShehri() > this.getDate().getTime() && this.getEndTimeForShehri() < this.getDate().getTime() && this.getEndTime() < this.getDate().getTime()){
			this.setState({
				countData: setCountDownForNextShehri,
				isShehri: true,
				nextStaticInfo: this.findOne(ramadanList, Moment(this.getDate()).add(1, 'days')._d.getLongMonth() + ' ' + Moment(this.getDate()).add(1, 'days').date()),
			});
		}

		// if(this.distanceToIFtar < 0 && this.distanceToShehri < 0){
		// 	console.log('Next Date Shehri');
		// 	this.setState({
		// 		countData: setCountDownForNextShehri,
		// 		isShehri: true,
		// 		nextStaticInfo: this.findOne(ramadanList, Moment(this.getDate()).add(1, 'days')._d.getLongMonth() + ' ' + Moment(this.getDate()).add(1, 'days').date()),
		// 	});
		// }

		// if(	Math.abs(this.distanceToIFtar) > Math.abs(this.distanceToShehri)
		// 	&& this.distanceToNextShehri > this.distanceToShehri
		// 	&& this.distanceToShehri < 0 && this.distanceToIFtar < 0){
		// 	console.log('Todays Sheheri');
		// 	this.setState({
		// 		countData: setCountDownForShehri,
		// 		isShehri: true,
		// 		nextStaticInfo: this.findOne(ramadanList, this.getDate().getLongMonth() + ' ' + this.getDate().getDate())
		// 	});
		// }


		// if(	this.distanceToIFtar > 0
		// 	&& this.distanceToNextShehri > this.distanceToIFtar
		// 	&& this.distanceToShehri < 0){
		// 	console.log('Today Iftar');
		// 	this.setState({
		// 		countData: setCountDownForIftar,
		// 		isShehri: false
		// 	});
		// }
	}

	findOne(list, date) {
		return list.filter(function(x){
			return x.date === date;
		});
	}
	getDate() {
		return new Date();
	}
	getEndTime() {
		var singleRamadan = this.findOne(ramadanList, this.getDate().getLongMonth() + ' ' + this.getDate().getDate());
		var makeJsDateType = singleRamadan[0].date + ', ' + new Date().getFullYear().toString() + ' ' + singleRamadan[0].iftarTime;
		return new Date(makeJsDateType).getTime();
	}

	getEndTimeForShehri() {
		var singleRamadan = this.findOne(ramadanList, this.getDate().getLongMonth() + ' ' + this.getDate().getDate());
		var makeJsDateType = singleRamadan[0].date + ', ' + new Date().getFullYear().toString() + ' ' + singleRamadan[0].sheriLastTime;
		return new Date(makeJsDateType).getTime();
	}

	getEndTimeForNextShehri() {
		var singleRamadan = this.findOne(ramadanList, Moment(this.getDate()).add(1, 'days')._d.getLongMonth() + ' ' + Moment(this.getDate()).add(1, 'days').date());
		var makeJsDateType = singleRamadan[0].date + ', ' + new Date().getFullYear().toString() + ' ' + singleRamadan[0].sheriLastTime;
		return new Date(makeJsDateType).getTime();
	}

	setCountDown(endTime) {

		var now = this.getDate().getTime();

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
				<section className="rk-mid">
					<CountDownTimer type={this.state.isShehri} countData={this.state.countData} staticInfo={this.state.staticInfo[0]}/>	
					<div className="rk-next-prev-timer">
						<IftarTimeToday iftarTime={this.state.staticInfo[0].iftarTime}/>
                    	<NextSheheriTime nextSheheriTime={this.state.nextStaticInfo[0].sheriLastTime} />
					</div>
					<Todo todo={this.state.staticInfo[0].todo}/>
					
				</section>
				<section className="rk-right">
					<TodaysAyah todaysAyah={ this.state.staticInfo[0].todaysAyah }  />
					<TodaysHadith todaysHadith={this.state.staticInfo[0].todaysHadith} />
				</section>
            </div>
		);
	}
}