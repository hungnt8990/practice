import { connect } from 'react-redux';
import { getUsersAsync} from '../actions/UserAction';
import UserComponent from '../components/UserComponent';

// Nối các states vào props (values) của View Component
const mapStateToProps = (state) => ({
  users: state.UserReducer.users,
  loading: state.UserReducer.loading,
  error: state.UserReducer.error
});

const mapDispatchToProps = (dispatch) => ({
  getUsersAsync: (email,password) => dispatch(getUsersAsync(email,password))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);

