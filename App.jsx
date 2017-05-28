import React from 'react';
import ramadanList from './ramadanList';


var App = React.createClass({
	// Constructor
	getInitialState: function(){
		var d = new Date();
		return {
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
	},

	componentDidMount: function() {
		this.timerId = setInterval(() => {
			this.updateTime();
		}, 1000);
	},

	componentDidUpdate: function(){
		if(this.state.countData.total < 0){
			clearInterval(this.timerId);
		}
	},

	componentWillUnmount: function(){
		clearInterval(this.timerId);
	},

	updateTime: function(){ 
		var setCountDown = this.setCountDown(this.getEndTime());
		this.total = setCountDown.total;
		this.setState({
			countData: setCountDown
		});
	},

	findOne: function(list, date) {
		return list.filter(function(x){
			return x.date === date;
		});
	},

	getEndTime: function(){
		var d = new Date();
		var singleRamadan = this.findOne(ramadanList, d.getLongMonth() + ' ' + d.getDate());
		var makeJsDateType = singleRamadan[0].date + ', ' + '2017 ' + singleRamadan[0].iftarTime;
		return new Date(makeJsDateType).getTime();
	},

	setCountDown: function(endTime){

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
	},
	
	render: function(){
		return (
			<div className="main-wrapper">
				<Sidebar />
				<div className="mains">
					<CountDownTimer countData={this.state.countData} staticInfo={this.state.staticInfo[0]}/>
					<div className="card-wrapper">
						<TodayIftarTime iftarTime={this.state.staticInfo[0].iftarTime}/>
						<NextSheheriTime nextSheheriTime={this.state.nextStaticInfo[0].sheriLastTime} />
					</div>
					
				</div>
			</div>
		);
	}
});

var Sidebar = React.createClass({
	render: function(){
		return (
			<aside>
				<h1>রমজানুল <br /> করিম </h1>
				<h3>আজকের হাদিস</h3>
				<blockquote>
					<p>আবদুল্লাহ ইবনু মাসলামা (রহঃ) ... ’আবদুল্লাহ ইবনু ‘উমর (রাঃ) থেকে বর্ণিত, রাসুলুল্লাহ সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম রমযানের কথা আলোচনা করে বললেনঃ চাঁদ না দেখে তোমরা সাওম (রোযা/রোজা/সিয়াম/ছিয়াম) পালন করবে না এবং চাঁদ না দেখে ইফতার করবে না। যদি মেঘাছন্ন থাকে তাহলে তাঁর সময় (ত্রিশ দিন) পরিমান পূর্ন করবে।</p>
					<small>- সহীহ হাদিস, ২০১২, ১২৩</small>
				</blockquote>
			</aside>
			
		);
	}
});


var CountDownTimer = React.createClass({
	render: function(){
		return (
			<div className="main-timer">
				<h3>ইফতারের সময় বাকি</h3>
				<h1>{('0' + this.props.countData.hours).slice(-2)}:{('0' + this.props.countData.minutes).slice(-2)}:{('0'+this.props.countData.seconds).slice(-2)}</h1>
				<RamadanInfo staticInfo={this.props.staticInfo}/>
			</div>
		);
	}
});

var RamadanInfo = React.createClass({
	render: function(){
		return (
			<div className="ramadan-info">
				<span>{this.props.staticInfo.ramadan} Ramadan, 1438 | {new Date().getDate()} {new Date().getLongMonth()}, {new Date().getFullYear()}</span>
			</div>
		);
	}
});

var TodayIftarTime = React.createClass({
	render: function(){
		return (
			<div className="card iftar-time">
				<img src="clock.svg"/>
				<h5>আজকের ইফতারের সময়</h5>
				<h6>{this.props.iftarTime.slice(0, 5)}</h6>
			</div>
		);
	}
});
var NextSheheriTime = React.createClass({
	render: function(){
		return (
			<div className="card sheheri-time">
				<img src="clock.svg"/>
				<h5>পরবর্তি সেহেরির সময়</h5>
				<h6>{this.props.nextSheheriTime.slice(0, 5)}</h6>
			</div>
		);
	}
})

module.exports = App;