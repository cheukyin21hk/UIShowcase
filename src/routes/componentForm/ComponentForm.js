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

class ComponentForm extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

	constructor(props){
		super(props);
		this.handleChangeForForm = this.handleChangeForForm.bind(this);
		this.handleSimpleValueChange = this.handleSimpleValueChange.bind(this);
		this.state={
			name : "input",
			value : new Object()
		};

	}

	handleChangeForForm(event){

	}

	handleSimpleValueChange(event){
		var valueObject = this.state.value;
		valueObject[event.target.name] = event.target.value;
		this.setState={
			value : valueObject
		}
		console.log(this.state.value);
	}

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
					<div>
						<TextArea name="submitValue" text="Textarea to display submitted value." handleChange={this.handleSimpleValueChange}></TextArea>
						<TextArea name="changeValue" text="Textarea to display changed value" handleChange={this.handleSimpleValueChange}></TextArea>
					</div>
						<Dropdown name="dropdown" text="A" options={dropdownOptions} handleChange={this.handleSimpleValueChange}></Dropdown>
            <InputBox name={this.state.name} text={this.state.value[this.state.name]} label="Demo :" handleChange={this.handleSimpleValueChange}/>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ComponentForm);
