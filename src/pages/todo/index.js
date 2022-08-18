import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {markAsDone} from "../../redux/tasks";
import Sidebar from "../../components/sidebar";
import minus from '../../assets/images/minus.png';
import plus from '../../assets/images/plus.png';
import './style.css';

const ToDo = () => {
    const [opened, setOpened] = useState(null);
    const {tasks, remaining} = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    const handleClick = (id) => {
        if (id === opened) {
            setOpened(null)
        }
        if (id !== opened) {
            setOpened(id)
        }
    }

    const handleCompleteClick = (id) => {
        dispatch(markAsDone(id));
        setOpened(null);
    }

    return (
        <div className='row'>
            <div className='col-3'>
                <Sidebar checked='todo'/>
            </div>
            <div className='col-9'>
                <div className='card'>
                    <div className='todo-title text-center'>To Do</div>
                    {remaining > 0 ? <div className="accordion" id="accordion">
                            {tasks.filter((ele) => ele.priority.id !== 5)
                                .sort(function (a, b) {
                                    if (a.priority.id > b.priority.id) return -1;
                                    if (a.priority.id < b.priority.id) return 1;

                                    /// sort same priority task by the newest task
                                    if (a.priority.id === b.priority.id) {
                                        if (a.id > b.id) return -1;
                                        if (a.id < b.id) return 1;
                                    }
                                    return 0;
                                }).map((task, key) => {
                                    return (
                                        <div className="item" key={key} onClick={() => handleClick(task.id)}>
                                            <div className='item-header'>
                                                <div className='task-name'>
                                                    {task.name}
                                                </div>
                                                <div>
                                                    <span className="task-badge">{task.priority.value}</span>
                                                    <img src={task.id === opened ? minus : plus} alt=''/>
                                                </div>
                                            </div>
                                            {task.id === opened ? <div className='task-content'>{task.content}</div> : null}
                                            {task.id === opened ?
                                                <div className='complete-button'
                                                     onClick={() => handleCompleteClick(task.id)}>Complete</div> : null}
                                        </div>
                                    )
                                })}
                        </div>
                        :
                        <div className='completed'>
                            Congratulations you have completed all your tasks!
                        </div>
                    }
                </div>
            </div>

        </div>
    )
}
export default ToDo;
