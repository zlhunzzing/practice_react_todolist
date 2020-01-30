import React from 'react';

const AddList = (props) => (
    <div>
        {/* {console.log(props)} */}
        <input className="AddListInput" type="text"
        onChange={(e)=>props.Menu.HandleAddListName(e)}
        ></input>
        <button 
        onClick={() => props.Menu.AddList()}
        className="AddList">AddList</button>
    </div>
)
 
export default AddList;