import React from 'react';
import ReactHighlight from 'react-highlight';

import ReplyBox from './replyBox';

export default class Review extends React.Component {
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
    const { review } = this.props;
    const reviews = review.children.map((review) => {
      return <Review review={review}
        codeId={review.codeId}
        lineNum={review.lineNum}
        key={review.id}
        dispatch={this.props.dispatch} />
    });
    return (
      <div style={{marginLeft:"2em", border:"black solid 2px"}}>
        <div onClick={toggleReplyBox}>
          { review.comment }
        </div>
        <div>{reviews}</div>
        {this.state.showReplyBox
          ? <ReplyBox
            codeId={review.codeId}
            lineNum={review.lineNum}
            parentId={review.id}
            dispatch={this.props.dispatch}/>
          : null}
      </div>);
  }
}
