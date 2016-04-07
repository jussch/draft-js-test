/**
 * Created by Justin on 2016-03-18.
 */

import React, { Component } from 'react';
import EditorContainer from './EditorContainer';

class Main extends Component {
  render() {
    return (
      <div>
        <EditorContainer {...this.props} />
      </div>
    );
  }
}

export default Main;
