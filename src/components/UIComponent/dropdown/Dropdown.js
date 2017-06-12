import React from 'react';

class Dropdown extends React.Component {
	constructor(props) {
		super(props);
	};

	render() {
		return (
			<div>
			<ItemList options={this.props.options} />
			</div>
			);
	};
}

class ItemList extends React.Component{

	render(){
		return(
			<select>
			{this.prepareOptionsList()}
			</select>

			);
	};

	prepareOptionsList(){
		const values = this.props.options;
		var items = values.map((value)=>
			<option value={value.code} key={value.code.toString()}>{value.name}</option>)
		return items;
	}
}

export default Dropdown;
