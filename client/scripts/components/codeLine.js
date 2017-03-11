import React from 'react';
import ReactHighlight from 'react-highlight';

import ReplyBox from './replyBox';
import Review from './review';

export default class CodeLine extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      showReplyBox: false
    };
  }

  render()  {
    const toggleReplyBox = () => {
      this.setState({showReplyBox: !this.state.showReplyBox});
    }
    const reviews = this.props.reviews.map((r) => {
      return <Review review={r} dispatch={this.props.dispatch}/>
    });
    return (
      <div>
        <div onClick={toggleReplyBox}>
          <ReactHighlight className='C'>{this.props.code}</ReactHighlight>
        </div>
        <div>{reviews}</div>
        {this.state.showReplyBox
          ? <ReplyBox codeId={this.props.codeId} lineNum={this.props.lineNum} parentId={0} key={0} dispatch={this.props.dispatch}/>
          : null}
      </div>);
  }
}
