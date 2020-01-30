import React from 'react';

const List = (props) => (
    <div className="List">
        {/* {console.log(props.id)} */}
        <span>{props.ListName}</span>
        {/* DeleteButton */}
        <button
        onClick={()=>props.Lists.Menu.HandleDeleteListId(props.id)}
        >Delete</button>
    </div>
)
 
export default List;