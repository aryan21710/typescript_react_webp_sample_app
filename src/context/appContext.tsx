import React from 'react';
interface IContext {
	todos: string[];
	search: string;
	item: string;
	// eslint-disable-next-line no-unused-vars
	onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onClickHandler: () => void;
	// eslint-disable-next-line no-unused-vars
	onSearchHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
	// eslint-disable-next-line no-unused-vars
	onDeleteHandler: (idx: number) => () => void;
}
// eslint-disable-next-line @typescript-eslint/no-empty-function
const emptyFuncDef = () => {};
export const AppContext = React.createContext<IContext>({
    todos: [],
    search: '',
    item: '',
    onChangeHandler: emptyFuncDef,
    onClickHandler: emptyFuncDef,
    onSearchHandler: emptyFuncDef,
    onDeleteHandler: () => emptyFuncDef,
});
