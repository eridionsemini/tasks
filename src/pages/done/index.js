import React, {useState} from "react";
import {useSelector} from "react-redux";
import Sidebar from "../../components/sidebar";
import './style.css';
import '../todo/style.css';
import minus from "../../assets/images/minus.png";
import plus from "../../assets/images/plus.png";

const Done = () => {
    const [opened, setOpened] = useState(null);
    const {tasks, completed} = useSelector((state) => state.tasks);
    console.log('completed',completed)

    const handleClick = (id) => {
        if (id === opened) {
            setOpened(null)
        }
        if (id !== opened) {
            setOpened(id)
        }
    }

    return (
        <div className='row'>
            <div className='col-3'>
                <Sidebar checked='done'/>
            </div>
            <div className='col-9'>
                <div className='card'>
                    <div className='done-title text-center'>Done</div>
                    {completed > 0 ? <div className="accordion" id="accordion">
                            {tasks.filter((ele) => ele.priority.id === 5)
                                .sort(function (a, b) {
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
                                                    <img src={task.id === opened ? minus : plus} alt=''/>
                                                </div>
                                            </div>
                                            {task.id === opened ? <div className='task-content'>{task.content}</div> : null}
                                        </div>
                                    )
                                })}
                        </div>
                        :
                        <div className='completed'>
                            No completed tasks yet!
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
export default Done;
