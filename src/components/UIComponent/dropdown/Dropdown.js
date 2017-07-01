import React from 'react';

class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			value: ""
		};
		this.handleOnChange = this.handleOnChange.bind(this);
	};


	handleOnChange(e){
		this.props.handleChange(e);
	}


	 prepareOptionsList(){
		 const values = this.props.options;
		 var items = values.map(function(value,index){
			 return <option value={value.code} key={value.code.toString()}>{value.name}</option>
		 })
		 return items;
	 }

	render(){
		return(
			<select onChange={this.handleOnChange} name={this.props.name} value={this.props.text}>
			{this.prepareOptionsList()}
			</select>

			);
	};

}

export default Dropdown;
