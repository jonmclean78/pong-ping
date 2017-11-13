import initial from "../data/initial";

import { 
	UPDATE_NAME, 
	INCREMENT_SCORE, 
	RESET,
	SET_NUMBER_OF_SERVES,
	END_GAME_ON,
} from "../data/actions";

// update the specified player's name
const updateName = (state, { player, name }) => state.setIn(["players", player, "name"], name)



// add 1 to the specified player
const incrementScore = (state, { player }) => state.updateIn(["players", player, "score"], score => score + 1);

//index of current server
const getServer = (totalScore, servesEach) => Math.floor(totalScore / servesEach ) % 2;

//total score
const getTotal = players => players.reduce((total, player) => total + player.get("score"), 0);

const updateServer = state => {
    let total = getTotal(state.get("players"));
    let server = getServer(total, state.getIn(["gameSettings", "servesEach"]));
// broken up onto multiple lines for readability
    return state.update("players", players =>
        players.map((player, i) =>
            player.set("serving", i === server)
        )
    );
}

// broken up onto multiple lines for readability
const updateWinner = state => {
    return state.update("players", players =>
        players.map(player =>
            player.set("won", player.get("score") >= state.getIn(["gameSettings", "endOn"]))
        )
    );
}
    
const reset = () => initial;

const setNumberOfServes = (state, { numberOfServes } ) => state.setIn(["gameSettings", "servesEach"], numberOfServes);

const endGameOn = (state, { endOn } ) => state.setIn(["gameSettings", "endOn"], endOn);


export default (state = initial, action) => {
    switch (action.type) {
    	case RESET: return reset();
        case UPDATE_NAME: return updateName(state, action);
        case END_GAME_ON: return endGameOn(state, action);
        case SET_NUMBER_OF_SERVES: return setNumberOfServes(state, action);
        case INCREMENT_SCORE: return updateWinner(updateServer(incrementScore(state, action)));
        default: return state;
    }
};