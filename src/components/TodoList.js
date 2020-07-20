import React from 'react';
import goody from '../images/good.png';
import stopwatch from '../images/stopwatch.png';


const Todo = ({desc, onClick}) => {
    return (
        <div className='align'>
            <img src={ desc.status ? goody : stopwatch} alt='icon' /> 
            <p style={{textDecoration: desc.status ? 'line-through' : 'none'}} onClick={onClick}>{desc.input}</p>
        </div>
    )
}

const TodoList = ({ list, onClick, filter }) => {
    return (
        (filter === null || filter === undefined) ?
            <ul>
                {list.map((item, index) => {return <Todo desc={item} key={index} onClick={() => onClick(index)}/>})}
            </ul>
        :
            <ul>
                {list.map((item, index) => {
                    return item.status === filter ?
                        <Todo desc={item} key={index} onClick={() => onClick(index)}/>
                    : null
                })}
            </ul> 
    )
}

export default TodoList;
