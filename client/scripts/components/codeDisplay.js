import React from 'react';
import { connect } from "react-redux";

import CodeLine from './codeLine';
class _App extends React.Component {
  render () {
    console.log(this);
    const lines = this.props.code.code.split('\n').map((str, i) => {
      return (<CodeLine codeId={this.props.code.name}
        lineNum={i}
        key={i}
        code={str}
        reviews={this.props.review.reviews[i] || []}
        dispatch={this.props.dispatch}/>);
    });
    return <div>{lines}</div>;
  }
}

const App = connect((store) => store)(_App);
export default App;
