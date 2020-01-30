import React from 'react';
// Componant
import Search from './Search';
import Complet from './Complet';
import Lists from './Lists';
import AddList from './AddList';

const Menu = (props) => (
    <div className="Menu">Menu
    {/* {console.log(props)} */}
        <Search></Search>
        <Complet></Complet>
        <Lists 
        Menu={props}
        ></Lists>
        <AddList Menu={props}></AddList>
    </div>
)

export default Menu;