import React, {Component} from 'react';
import {connect} from 'react-redux';
import Auxiliary from '../../hoc/Auxiliary';
import {Auth} from '../../store/actions/actions';
import Fetch from 'isomorphic-fetch';

class AuthContainer extends Component {


componentDidMount() {
    this.props.onAuthCheck();
}

    render() {
        return (
            <Auxiliary>
              1
            </Auxiliary>
        );
    }
};

const mapStateToProps = state => {
  return {
    // ingredients: state.ingredients
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuthCheck: () => dispatch(Auth())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
