import React from 'react';
import { addReview } from '../actions/reply';
export default class ReplyBox extends React.Component {
  constructor (props) {
    super(props);
    this.state= {
      message: '',
    }
  }
  update(e) {
      e.preventDefault();
      const { codeId, lineNum, parentId } = this.props;
      const content = this.state.message;
      console.log({ codeId, lineNum, parentId, content });
      this.props.dispatch(addReview(codeId, lineNum, parentId, content));
      this.setState({message: ''});
  }

  handleChange (event) {
    this.setState({message: event.target.value});
  }

  render() {
    console.log(this);
    return (<form onSubmit={this.update.bind(this)}>
      <input value={this.state.message} onChange={this.handleChange.bind(this)} />
      </form>);
  }
}
