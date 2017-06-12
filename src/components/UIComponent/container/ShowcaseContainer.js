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
  }

  render() {
    return (
      <div className={s.mainContainer} >
        <div className={s.labelContainer}>
          <pre>Name : {this.props.name}</pre>
          <pre>Description : {this.props.description}</pre>
          <pre>Syntax : {this.props.syntax}</pre>
          <pre>Data : {this.props.data}</pre>
        </div>
        <div className={s.elementContainer}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default withStyles( s)(ShowcaseContainer);
