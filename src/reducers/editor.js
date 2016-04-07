/**
 * Created by Justin on 2016-04-07.
 */
import { EditorState } from 'draft-js';
import { Map } from 'immutable';
import { EDITOR_ON_CHANGE } from '../actions/editor';

const initialState = Map({ editorState: EditorState.createEmpty() });

export default function editorReducer(state = initialState, action) {
  switch (action.type) {
    case EDITOR_ON_CHANGE:
      return state.set('editorState', action.payload.editorState);
    default:
      return state;
  }
}
