import React from 'react'
import { call } from 'file-loader';

const ToView = ({ view, classContainer, children, callback }) => {
    const handleClick = () => {
        const elmnt = document.getElementById(view);
        if (elmnt)
            elmnt.scrollIntoView({ behavior: 'smooth' });
        if (callback)
            callback()
    }

    return (
        <div className={classContainer} onClick={handleClick}>
            {children}
        </div>
    )
}

export default ToView