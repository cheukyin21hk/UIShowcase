import React from 'react';
import style from './InputBox.css'
import withStyles from 'isomorphic-style-loader/lib/withStyles';

class InputBox extends React.Component {
	constructor(props) {
		super(props);
	};

	render() {
		return (
			<div>
         <label className={style.label}>{this.props.label}</label>
			   <input type="text"/>
			</div>
			);
	};
}


export default withStyles(style)(InputBox);
