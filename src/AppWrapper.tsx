import React from 'react';
import App from "./App";

interface IProps {

}

export const AppARwpper = React.memo<IProps>(props => {
   return <App/>
});