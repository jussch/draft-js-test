/**
 * Created by Justin on 2016-04-07.
 */

require('../styles/editor.scss');

import React, { Component } from 'react';
import { Editor } from 'draft-js';

class EditorContainer extends Component {
  constructor(props) {
    super(props);
    this.onChange = (editorState) => this.props.actions.editorOnChange({ editorState });
    this.onInsert = () => {};
  }
  render() {
    return (
      <div>
        <div className="editor">
          <Editor
            editorState={this.props.editor.get('editorState')}
            onChange={this.onChange}
          />
        </div>
        <button
          className="btn"
          onClick={this.onInsert}
        >
          Insert Variable
        </button>
      </div>
    );
  }
}

export default EditorContainer;