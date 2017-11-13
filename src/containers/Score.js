import { connect } from "react-redux";
import { incrementScore } from "../data/actions";
import Score from "../components/Score";

const mapStateToProps = state => ({
	disabled: state.getIn(["players", "name"]),
});
// CONTINUE FROM HERE!

const mapDispatchToProps = (dispatch, { id }) => ({
    onClick: () => dispatch(incrementScore(id)),
});

export default connect(null, mapDispatchToProps)(Score);