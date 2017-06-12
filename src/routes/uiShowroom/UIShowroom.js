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
import s from './UIShowroom.css';
import Dropdown from '../../components/UIComponent/dropdown/Dropdown'
import InputBox from '../../components/UIComponent/inputBox/InputBox'
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

class UIShowroom extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <ShowcaseContainer name="Dropdown" description="A simple dropdown" syntax ="<Dropdown data={data}></Dropdown>" data={JSON.stringify(dropdownOptions,null,2)}>
            <Dropdown options={dropdownOptions}></Dropdown>
          </ShowcaseContainer>

          <ShowcaseContainer name="InputBox" description="A simple inputbox" syntax ='<InputBox label="Demo :"/>'>
            <InputBox label="Demo :"/>
          </ShowcaseContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(UIShowroom);
