import React from "react";
import Players from "./Players";
import Winner from "../containers/Winner";
import GameSettings from "./GameSettings";


export default ({ players, winner }) => (
	<div>
		<div className="row">
	    	{ winner ? <Winner winner={ winner }/> : <Players players={ players } /> }
	    </div>
		<div className="well col-6 col-md-4">
			<GameSettings  />
		</div> 	  
	</div>
);	


