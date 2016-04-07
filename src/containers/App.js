/**
 * Created by Justin on 2016-03-18.
 */

import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/Main';

class App extends Component {
  render() {
    return (
      <Main {...this.props}/>
    );
  }
}

App.propTypes = {};
function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  const actions = {
  };

  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
