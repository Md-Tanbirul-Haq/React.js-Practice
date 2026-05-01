import TaskCard from '@/Component/Card';
import { getTasks } from '@/lib/task';
import React from 'react';

const TaskPage = () => {
    const data = getTasks();
    console.log(data);
    return (
        <div>
            <h1>Total Data : {data.length}</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>

                { 
                
                data.map((Data,index)=><TaskCard key={index} Data={Data}></TaskCard>)
                
                }
            </div>

        </div>
    );
};

export default TaskPage;