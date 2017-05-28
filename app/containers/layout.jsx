import React, { Component } from 'react';

import Sidebar from './sidebar.jsx';
import Main from './main.jsx';

export default class Layout extends Component {
	render() {
		return (
			<div className="main-wrapper">
				<Sidebar />
				<Main />
			</div>
		);
	}
}