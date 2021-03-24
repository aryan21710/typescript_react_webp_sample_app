/* eslint-disable no-console */
import React, { useContext } from 'react';
import CSS from 'csstype';
import { AppContext } from '../context/appContext';

export const DisplayTodo: React.FC = React.memo(() => {
    console.count('DisplayTodo');
    const {  todos, onSearchHandler, search, onDeleteHandler } = useContext(AppContext);
    return  (
        <div style={mainWrapper}>
            <h4>TODO LIST</h4>
            {todos.length > 0 && <input onChange={onSearchHandler} value={search} style={inputWrapper} placeholder="Search Todo"/>}
            <ul style={displayWrapper}>
                {todos.map((todo, idx)=><div style={liWrapper}>
                    <li key={idx}>{todo}</li>
                    <button onClick={onDeleteHandler(idx)}>-</button>
                </div>)}
            </ul>
        </div>
    );
});

const mainWrapper: CSS.Properties = {
    width: '50vw',
    height: '30vh',
    display: 'flex',
    marginTop: '2vh',
    flexDirection: 'column',
    background: 'white',
    alignItems: 'center',
};

const displayWrapper: CSS.Properties = {
    margin: '1vh 1vw 1vh 0vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 0
};

const inputWrapper : CSS.Properties = {
    textAlign: 'center',
    fontSize: '1vw',
    width: '20vw'
};

const liWrapper : CSS.Properties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
};

