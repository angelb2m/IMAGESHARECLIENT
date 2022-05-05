//Background.js
import React from 'react';

const Background = ( { children } ) =>
{
    return (
       
        <div className="w-full h-screen inset-0 bg-white dark:bg-gray-900">
            {children}
        </div>
    )
}

export default Background;