import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createTask} from "../../redux/tasks";
import Sidebar from "../../components/sidebar";
import {priorities} from "../../constants";
import './style.css';

const Create = () => {
    const [name, setName] = useState('');
    const [content, setContent] = useState('')
    const [priority, setPriority] = useState(0);
    const {tasks} = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    const getPriority = () => priorities.find((x) => x.id === priority)

    const insertNewTask = () => {
        const data = {
            id: tasks.length + 1,
            name,
            content,
            priority: getPriority()
        }
        dispatch(createTask(data));
        setContent('');
        setName('');
        setPriority(0);

    }

    return (
        <div className='row'>
            <div className='col-3'>
                <Sidebar checked='create'/>
            </div>
            <div className='col-9'>
                <div className='card'>
                    <div className='create-title text-center'>Insert Task</div>
                    <input type='text'
                           className='form-control custom-input'
                           placeholder='Title'
                           value={name}
                           onChange={(event) => setName(event.target.value)}/>

                    <textarea className='form-control textarea custom-input'
                              value={content}
                              onChange={(event) => setContent(event.target.value)}
                              placeholder='Share a reply'
                              rows={5}/>
                    <div className='row'>
                        <div className='col-8'>
                            <select value={priority}
                                    className='custom-input custom-select'
                                    onChange={(event) => setPriority(Number(event.target.value))}>
                                <option value={''}>Priority</option>
                                {priorities.map((priority, key) => {
                                    return <option key={key} value={priority.id}>{priority.value}</option>
                                })}
                            </select>

                        </div>
                        <div className='col-4'>
                            <button className='create-button'
                                    onClick={insertNewTask}
                                    disabled={priority === 0 || content === '' || name === ''}>
                                Insert
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Create;
