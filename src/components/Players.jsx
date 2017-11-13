import React from "react";
import Player from "./Player";

export default ({ players }) => (
    <div>
        { players.map((player, i) => (
            <Player key={ i } id={ i } player={ player } />
        ))}
    </div>
);