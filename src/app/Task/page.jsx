import TaskCard from '@/Component/Card';
import { Task_Form } from '@/Component/Task_Form';
import { createPost } from '@/lib/actions';
import { getTasks } from '@/lib/task';
import React from 'react';

const TaskPage = async () => {
    const data = await getTasks();
    console.log(data);
    return (
        <div>
            <h1>Total Data : {data.length}</h1>
            <div className='py-10'>
                <Task_Form createPost={createPost} />
            </div> 
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>

                { 
                
                data.map((Data,index)=><TaskCard key={index} Data={Data}></TaskCard>)
                
                }
            </div>

        </div>
    );
};

export default TaskPage;