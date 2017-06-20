import React from 'react';

class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			value: ""
		};
	};

		test(){
			console.log("test");
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
			<select value={this.props.text}>
			{this.prepareOptionsList()}
			</select>

			);
	};

}

export default Dropdown;
