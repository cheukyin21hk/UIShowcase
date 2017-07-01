/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ComponentForm.css';
import Dropdown from '../../components/UIComponent/dropdown/Dropdown'
import InputBox from '../../components/UIComponent/inputBox/InputBox'
import TextArea from '../../components/UIComponent/textArea/TextArea'
import ShowcaseContainer from '../../components/UIComponent/container/ShowcaseContainer'
var dropdownOptions=[{
	"code": "a",
	"name": "A"
},{
	"code": "b",
	"name": "B"
},{
	"code": "c",
	"name": "C"
},{
	"code": "d",
	"name": "D"
},{
	"code": "e",
	"name": "E"
}];

/*
Todo :
2. resolve the state share within all requests(solution : multiple )
3. get the dropdown option from container component.
4. separate the presentation component.

*/

class ComponentForm extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

	constructor(props){
		super(props);
		console.log("constructor called");
		this.handleSimpleValueChange = this.handleSimpleValueChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		var formFields = new Object();
		this.state={
			name : "input",
			result : "The result value will show here.",
			value : formFields
		};

	}

	handleSubmit(event) {
		var resultValue = this.state.value;
		var currentResult = "";
		for (var key in resultValue) {
		  if (resultValue.hasOwnProperty(key)) {
				currentResult += key + " -> " + resultValue[key] + "\n";
			  console.log(key + " -> " + resultValue[key]);
		  }
		}
		this.setState({
			result : currentResult
		})
		event.preventDefault();
   }


	handleSimpleValueChange(event){
		var name = event.target.name;
		var value = event.target.value;
		console.log(name);
		this.setState((prevState)=>{
			var valueObject = prevState.value;
		 	valueObject[name] = value;
			return  {	value : valueObject};
		});
	}

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
					<h1>{this.props.title}</h1>
					<form onSubmit={this.handleSubmit}>

						<div>
							<TextArea name="submitValue" text={this.state.result} handleChange={this.handleSimpleValueChange}></TextArea>
						</div>
						<Dropdown name="dropdown" text={this.state.value["dropdown"]} options={dropdownOptions} handleChange={this.handleSimpleValueChange}></Dropdown>
						<InputBox name={this.state.name} text={this.state.value[this.state.name]} label="Demo :" handleChange={this.handleSimpleValueChange}/>
						<input type="submit" value="Submit" />
					</form>
			  </div>
      </div>
    );
  }
}

export default withStyles(s)(ComponentForm);
