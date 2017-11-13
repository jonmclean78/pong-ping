import { connect } from "react-redux";
import { updateName } from "../data/actions";
import Input from "../components/Input";

// the optional second argument to mapDispatchToProps is the props object for the component
const mapDispatchToProps = (dispatch, { id }) => ({
    onChange: e => dispatch(updateName(id, e.target.value)),
});

// pass in null in place of mapStateToProps
export default connect(null, mapDispatchToProps)(Input);