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
// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import s from './ShowcaseContainer.css';

class ShowcaseContainer extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  constructor(){
    super();
    this.state={displayDetails:false};
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  toggleDisplay(){
    this.setState((prevState,props)=>{
      return {displayDetails : (!prevState.displayDetails)};
    });
  }

  printDescription(){
    console.log(this.props.children);
      if(this.state.displayDetails){
        return (
          <div className={s.labelContainer}>
                <button onClick={this.toggleDisplay}>Close</button>
                <pre>Name : {this.props.name}</pre>
                <pre>Description : {this.props.description}</pre>
                <pre>Syntax : {this.props.syntax}</pre>
                <pre>Data : {this.props.data}</pre>
          </div>
              );
      }else{
        return (<div className={s.labelContainer}><button onClick={this.toggleDisplay}>Open</button> {this.props.name} description</div>);
      }
  }

  render() {
    return (
      <div className={s.mainContainer} >
          {this.printDescription()}
        <div className={s.elementContainer}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default withStyles( s)(ShowcaseContainer);
