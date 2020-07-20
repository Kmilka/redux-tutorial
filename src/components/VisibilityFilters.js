import React from 'react';

const VisibilityFilters = ({ onFilter }) => {
    return (
        <div>
            <button className="text-btn" id="all" onClick={() => onFilter(null)}>all</button>
            <button className="text-btn" id="incomplete" onClick={() => onFilter(false)}>open</button>
            <button className="text-btn" id="complete" onClick={() => onFilter(true)}>done</button>
        </div>
    )
}

export default VisibilityFilters;