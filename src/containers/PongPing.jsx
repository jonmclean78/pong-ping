import { connect } from "react-redux";
import PongPing from "../components/PongPing";

const mapStateToProps = state => ({
    players: state.get("players"),
    winner: state.get("players").filter(p => p.get("won")).first(),
});

export default connect(mapStateToProps)(PongPing);