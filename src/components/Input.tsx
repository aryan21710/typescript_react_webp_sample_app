import React, { useContext } from 'react';
import CSS from 'csstype';
import { AppContext } from '../context/appContext';

export const Input: React.FC = () => {
    const { item, onChangeHandler, onClickHandler } = useContext(AppContext);
    return (
        <div style={mainWrapper}>
            <input value={item} style={inputWrapper} placeholder="Enter ToDo" onChange={onChangeHandler}/>
            <button disabled={item.length === 0} onClick={onClickHandler}>+</button>
        </div>
    );
};

const mainWrapper: CSS.Properties = {
    width: '50vw',
    height: '10vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    background: 'white',
    alignItems: 'center',
};


const inputWrapper : CSS.Properties = {
    textAlign: 'center',
    fontSize: '1vw',
    width: '20vw'
};
