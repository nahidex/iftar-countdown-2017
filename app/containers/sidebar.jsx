import React, { Component } from 'react';

export default class Sidebar extends Component {
    render () {
        return (
			<aside className="rk-nav">
				<div className="rk-nav-wrap">
					<a href="#">
						<img src="../icons/001-muslim.png" alt=""/>
						<span>রমাদ্বান <br/> কারীম <i>2.0</i></span>
					</a>
				</div>
			</aside>
		);
    }
}