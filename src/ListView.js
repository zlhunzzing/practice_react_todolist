import React from 'react';
import Todos from './Todos'

const ListView = (props) => (
    <div className="ListView">
        {/* {console.log(props.Data.Lists[0].Todos)} */}
        <span className="ListName">{props.Data.Lists[0].ListName}</span>
        <button className="AddTodo">+</button>

        {props.Data.Lists[0].Todos.map(Data=> (
            <Todos
            key={Data.id}
            Todos={Data}
            ></Todos>
        ))}
    </div>
)

export default ListView;