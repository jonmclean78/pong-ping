export const UPDATE_NAME = Symbol("UPDATE_NAME");
export const INCREMENT_SCORE = Symbol("INCREMENT_SCORE");
export const RESET = Symbol("RESET");
export const SET_NUMBER_OF_SERVES = Symbol("SET_NUMBER_OF_SERVES");
export const END_GAME_ON = Symbol("END_GAME_ON");

export const updateName = (player, name) => ({
    type: UPDATE_NAME,
    player,
    name,
});

export const incrementScore = player => ({
    type: INCREMENT_SCORE,
    player,
});

export const reset = () => ({
    type: RESET,
});

export const setNumberOfServes = (numberOfServes) => ({
	type: SET_NUMBER_OF_SERVES,
	numberOfServes,
})

export const endGameOn = (endOn) => ({
	type: END_GAME_ON,
	endOn,
})

