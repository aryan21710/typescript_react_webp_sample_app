import React, { useState, useEffect } from 'react';
import CSS from 'csstype';
import { Input } from './Input';
import { DisplayTodo } from './DisplayTodo';
import { AppContext } from '../context/appContext';

export const Parent: React.FC = () => {
    const [todos, setToDos] = useState<string[]>([]);
    const [copyTodos, setCopyOfTodos] = useState<string[]>([]);
    const [item, setItem] = useState<string>('');
    const [search, setSearch] = useState<string>('');
    const [isTodoAdd, setIsToDoAdd] = useState<boolean>(false);
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => setItem(event.target.value.trim());

    const onSearchHandler = (event:React.ChangeEvent<HTMLInputElement>)=>setSearch(event.target.value.trim());

    const searchTodo = ()=>{
        const filteredTodos = todos.filter((todo)=>todo.includes(search));
        filteredTodos.length > 0 &&  setToDos([...filteredTodos]);
    };

    const resetTodo = ()=>setToDos([...copyTodos]);

    const updateToDo = () => {
        setToDos([...todos, item]);
        setCopyOfTodos([...copyTodos, item]);
        setItem('');
        setIsToDoAdd(false);
    };


    const onClickHandler = ()=>setIsToDoAdd(true);

    useEffect(() => {
        isTodoAdd && updateToDo();
    }, [isTodoAdd]);


    useEffect(()=>{
        search.length > 0 ? searchTodo() : resetTodo();
    }, [search]);
    return (
        <div style={mainWrapper}>
            <h1>TYPESCRIPT TODO APP</h1>
            <AppContext.Provider value={{ setToDos, setItem, todos, item, onChangeHandler, onClickHandler, onSearchHandler }}>
                <Input />
                <DisplayTodo />
            </AppContext.Provider>
        </div>
    );
};

const mainWrapper: CSS.Properties = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: 'grey',
    alignItems: 'center',
    margin: 0,
    padding: 0,
};
