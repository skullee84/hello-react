import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import DefaultActions from 'actions/DefaultActions';

class App extends React.Component {

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
  return {
    dispatch: dispatch,
    defaultActions: bindActionCreators({DefaultActions}, dispatch)
  }
};

export default connect(state => state.defaultStore, mapDispatchToProps)(App);
