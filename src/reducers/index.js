/**
 * Created by Justin on 2016-03-18.
 */

import { combineReducers } from 'redux';
import editorReducer from './editor';

const reducers = {
  editor: editorReducer,
};

module.exports = combineReducers(reducers);
