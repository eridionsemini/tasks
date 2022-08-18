import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
    remaining: 0,
    completed: 0
}

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        createTask: (state, action) => {
            state.tasks = [...state.tasks, action.payload];
            state.remaining = state.remaining + 1;
        },
        markAsDone: (state, action) => {
            const task = state.tasks.find((x) => x.id === action.payload);
            task.priority.id = 5;
            task.priority.value = 'DONE';
            state.remaining = state.remaining - 1;
            state.completed = state.completed - 1;
        },
        calculateRemainingTasks: (state) => {
            state.remaining = state.tasks.filter((x) => x.priority.id !== 5).length;
        },
        calculateCompletedTasks: (state) => {
            state.completed = state.tasks.filter((x) => x.priority.id === 5).length;
        }
    }
})

export const {createTask, markAsDone, calculateRemainingTasks, calculateCompletedTasks} = taskSlice.actions;

export default taskSlice.reducer;
