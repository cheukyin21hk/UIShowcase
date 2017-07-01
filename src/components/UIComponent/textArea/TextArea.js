import React from 'react';
import s from './TextArea.css'
import withStyles from 'isomorphic-style-loader/lib/withStyles';

class TextArea extends React.Component {
	constructor(props) {
		super(props);
    this.state ={
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
	};

  handleChange(event){
    this.setState({value : event.target.value});
  }

	test(){
		console.log("test");
	}

	render() {
		return (
          <textarea className={s.general}rows="4" cols="50" value={this.props.text}>
          </textarea>
			);
	};
}


export default withStyles(s)(TextArea);
