import React from 'react';

import Input from "../containers/Input";
import Score from "../containers/Score";

export default ({ id, player }) => (
    <div className="col-sm-6">
    <Input id={ id } value={ player.get("name") } />
    <Score id={ id } score={ player.get("score") } />
    { player.get("serving") ? <p className="label label-success">Serving</p> : null }
</div>
);