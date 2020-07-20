import React from 'react';

const TodoInput = ( { onSubmit }) => {
    let input;
    return(
        <div>
            <form className='todo-input' onSubmit={(event) => { event.preventDefault(); onSubmit(input.value); input.value='' }}>
                <input type='text' placeholder='type todo here' ref={node => (input = node)} />
                <button className='add-button'>Add Todo</button>
            </form>
        </div>
    )
}

export default TodoInput;