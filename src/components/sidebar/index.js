import React from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector} from "react-redux";
import avatar from '../../assets/images/avatar.png';
import arrow_down from '../../assets/images/arrow-down.png';
import arrow_right from '../../assets/images/arrow-right.png';
import './style.css';

const Sidebar = ({checked}) => {
    const history = useHistory();
    const {remaining} = useSelector((state) => state.tasks);

    return (
        <>
            <nav className='nav-menu active'>
                <ul className='nav-menu-items'>
                    <div className='avatar-wrapper'>
                        <div className='d-flex align-items-center'>
                            <img src={avatar} alt='avatar'/>
                            <div className='user-profile'>
                                <div>Y Lee</div>
                                <div>yi.lee@gmail.com</div>
                            </div>
                        </div>
                        <img src={arrow_down} alt='arrow'/>
                    </div>
                    <li className='nav-item' onClick={() => history.push('create')}>
                        <div className='nav-text'>
                            <input
                                className='radio'
                                type="radio"
                                readOnly
                                value="insert"
                                checked={checked === 'create'}
                            />
                            Insert Task
                        </div>
                        <img src={arrow_right} alt='arrow' className='right-arrow'/>
                    </li>
                    <li className='nav-item' onClick={() => history.push('todo')}>
                        <div className='nav-text'>
                            <input
                                className='radio'
                                type="radio"
                                readOnly
                                value="todo"
                                checked={checked === 'todo'}
                            />
                            To Do
                        </div>
                        <div className='sidebar-badge'>
                            <div className='badge-text'>{remaining}</div>
                        </div>
                    </li>
                    <li className='nav-item' onClick={() => history.push('done')}>
                        <div className='nav-text'>
                            <input
                                className='radio'
                                type="radio"
                                readOnly
                                value="done"
                                checked={checked === 'done'}
                            />
                            Done
                        </div>

                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Sidebar;
