import React, {useEffect} from "react";
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {calculateRemainingTasks} from './redux/tasks';
import Create from '../src/pages/create';
import Done from '../src/pages/done';
import ToDo from '../src/pages/todo';
import './App.css';


const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(calculateRemainingTasks());
    }, [])
    return (
        <>
            <Router>
                <Route path='/create' exact component={Create}/>
                <Route path='/todo' exact component={ToDo}/>
                <Route path='/done' exact component={Done}/>
                <Route exact path="*">
                    <Redirect to="/todo"/>
                </Route>
            </Router>
        </>
    );
}

export default App;
