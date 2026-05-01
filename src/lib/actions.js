import { revalidatePath } from "next/cache";
import { add_task } from "./task";

export const createPost = async(FormData) => {
'use server'
 const name = FormData.get('name')
//  const details = FormData.get('details')
 const data = Object.fromEntries(FormData);
 const Data_ = await add_task(data);
 console.log(Data_)
 if(Data_.success){
    
    revalidatePath('/Task');
    return Data_;
 }
 
}