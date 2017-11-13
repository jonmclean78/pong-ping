import { connect } from "react-redux";
import { endGameOn } from "../data/actions";
import EndScore from "../components/EndScore";


const mapStateToProps = state => ({
	endOn: state.getIn(["gameSettings", "endOn"]),
});

// the optional second argument to mapDispatchToProps is the props object for the component
const mapDispatchToProps = dispatch => ({
    onChange: e => dispatch(endGameOn(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EndScore);

