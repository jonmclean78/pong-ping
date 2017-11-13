import React from 'react';
import { Map, List } from "immutable";

export default Map({
    players: List([
        Map({
            name: "",
            score: 0,
            serving: true,
            won: false,
        }),
        Map({
            name: "",
            score: 0,
            serving: false,
            won: false,
        }),
    ]),
    gameSettings: Map({
        servesEach: 2,
        endOn: 11,
    }),
});