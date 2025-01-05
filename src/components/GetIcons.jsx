import React from 'react'
import { icons } from '../data/data.js';

function GetIcons({ iconName }) {
    const Icon = icons[iconName].icon;
    const color = icons[iconName].color;
    return (
        Icon ?
            <Icon size={50} color={color} />
            :
            <div className='flex items-center text-xl font-semibold'>
                <p>{iconName}</p>
            </div>
    )
}

export default GetIcons