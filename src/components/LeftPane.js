import React, { Component } from 'react';
import LeftPaneTagsDiv from './LeftPaneTagsDiv';
import '../styles/LeftPane.css';

class LeftPane extends Component {
	render() {
		return (
			<div className="LeftPane">
				<LeftPaneTagsDiv changeTargetTag={this.props.changeTargetTag}/>
			</div>
		);
	}
}

export default LeftPane;