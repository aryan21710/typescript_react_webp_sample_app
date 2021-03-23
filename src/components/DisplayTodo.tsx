import React, { useContext } from 'react';
import CSS from 'csstype';
import { AppContext } from '../context/appContext';

export const DisplayTodo: React.FC = () => {
    const {  todos, onSearchHandler, search } = useContext(AppContext);
    return  (
        <div style={mainWrapper}>
            <h4>TODO LIST</h4>
            {todos.length > 0 && <input onChange={onSearchHandler} value={search} style={inputWrapper} placeholder="Search Todo"/>}
            <ul style={displayWrapper}>
                {todos.map((todo, idx)=><li key={idx}>{todo}</li>)}
            </ul>
        </div>
    );
};

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

