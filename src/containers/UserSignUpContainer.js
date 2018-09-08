import { connect } from 'react-redux';
import { createUserAsync} from '../actions/UserSignUpAction';
import UserSignUpComponent from '../components/UserSignUpComponent';

const mapStateToProps = (state) => ({
  users: state.UserReducer.users,
  loading: state.UserReducer.loading,
  error: state.UserReducer.error
});

const mapDispatchToProps = (dispatch) => ({
  createUserAsync: (email,password,fullname,phone) => dispatch(createUserAsync(email,password,fullname,phone))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSignUpComponent);

