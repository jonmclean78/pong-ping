import { connect } from "react-redux";
import { reset } from "../data/actions";
import Winner from "../components/Winner";

const mapDispatchToProps = dispatch => ({
    onClick: e => dispatch(reset()),
});

export default connect(null, mapDispatchToProps)(Winner);