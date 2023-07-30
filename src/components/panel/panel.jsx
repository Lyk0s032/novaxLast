import React from 'react';
import MenuSuperior from './nav';
import MenuLateral from './navLeft';

export default function Panel(){
    return (
        <div>
            <MenuSuperior />
            <MenuLateral />
        </div>
    )
}