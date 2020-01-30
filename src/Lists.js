import React from 'react';
import List from './List'

const Lists = (props) => (
    <div className="Lists">
        
    {props.Menu.Data.Lists.map(Data => (
        <List
        key={Data.ListId}
        ListName={Data.ListName}
        Lists={props}
        id={Data.ListId+Data.ListName}
        ></List>
    ))}

    </div>
)
 
export default Lists;