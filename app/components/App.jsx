import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';

import * as DefaultActions from 'actions/DefaultActions';

class App extends React.Component {

  _click = () => {
    this.props.defaultActions.fetchData();
  }

  _renderBoards = (boards) => {
    return boards.map((item, idx) =>
      <li key={idx}>
        {item.name}
      </li>
    );
  }

  render() {
    console.log('render!');
    return (
      <div>
        <button onClick={this._click}>Click!</button>
        <ul>
          {this._renderBoards(this.props.default.boards)}
        </ul>
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
    defaultActions: bindActionCreators(_.assign({}, DefaultActions), dispatch)
  }
};

export default connect(state => state.defaultStore, mapDispatchToProps)(App);
