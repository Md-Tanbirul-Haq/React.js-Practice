 import task from "../Data/data.json";

export const getTasks = () => {
    return task;
}

export const add_task =async (data) => {
    data.id = task.length + 1;
    task.push(data);
    return {success: true, message: "Task added successfully"}
} 