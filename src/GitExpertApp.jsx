import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";



export const GitExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);


    //agregar una nueva categoria
    const onAddCategory=(newCategory)=>{
      if(categories.includes(newCategory)) return ;
      //console.log(newCategory)
    setCategories([newCategory,...categories])

    }
    

   // console.log(categories);
  return (
    <>
    {/* titulo */}
    <h1>GitExpertApp</h1>

    {/* Input*/}
   <AddCategory 
   //setCategories={setCategories}
   onNewCategory={(value)=> onAddCategory(value)}
   />

  
  {
      categories.map((category )=>(
      <GifGrid 
       key={category}
      category={category}
       />
       ))
       }
         </>   
  )
}





