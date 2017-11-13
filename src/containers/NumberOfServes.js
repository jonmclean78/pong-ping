import { connect } from "react-redux";
import { setNumberOfServes } from "../data/actions";
import NumberOfServes from "../components/NumberOfServes";


const mapStateToProps = state => ({
	numberOfServes: state.getIn(["gameSettings", "servesEach"]),
});

// the optional second argument to mapDispatchToProps is the props object for the component
const mapDispatchToProps = dispatch => ({
    onChange: e => dispatch(setNumberOfServes(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NumberOfServes);