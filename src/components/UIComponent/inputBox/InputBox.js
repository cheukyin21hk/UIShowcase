import React from 'react';
import style from './InputBox.css'
import withStyles from 'isomorphic-style-loader/lib/withStyles';

class InputBox extends React.Component {
	constructor(props) {
		super(props);
    this.state ={
      value: ""
    };
		this.handleOnChange = this.handleOnChange.bind(this);
	};

	test(){
		console.log("test");
	}

	handleOnChange(e){
		this.props.handleChange(e);
	}

	render() {
		return (
			<div>
         <label className={style.label}>{this.props.label}</label>
			   <input name={this.props.name} value={this.props.text} onChange={this.handleOnChange} type="text"/>
			</div>
			);
	};
}


export default withStyles(style)(InputBox);
