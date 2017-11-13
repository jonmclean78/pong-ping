import React from "react";

export default ({ winner, onClick }) => (
    <div>
    	<p>{ winner.get("name") } won</p>
    	<button onClick={ onClick }> Reset </button>
    </div>
);