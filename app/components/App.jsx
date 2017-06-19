import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';

import * as DefaultActions from 'actions/DefaultActions';

class App extends React.Component {

  componentDidMount() {
    console.log(DefaultActions);
  }

  _click = () => {
    console.log(this.props);
    this.props.defaultActions.fetchData();
  }

  render() {
    return (
      <div>
        <button onClick={this._click}>Click!</button>
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  console.log(DefaultActions);
  return {
    dispatch: dispatch,
    defaultActions: bindActionCreators(_.assign({}, DefaultActions), dispatch)
  }
};

export default connect(state => state.defaultStore, mapDispatchToProps)(App);
