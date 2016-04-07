/**
 * Created by Justin on 2016-04-07.
 */

export const EDITOR_ON_CHANGE = 'EDITOR_ON_CHANGE';
export function editorOnChange({ editorState }) {
  return { type: EDITOR_ON_CHANGE, payload: { editorState } };
}
