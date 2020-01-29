import React from 'react';
// Componant
import Search from './Search';
import Complet from './Complet';
import Lists from './Lists';
import AddList from './AddList';

const Menu = () => (
    <div className="Menu">Menu
        <Search></Search>
        <Complet></Complet>
        <Lists></Lists>
        <AddList></AddList>
    </div>
)

export default Menu;