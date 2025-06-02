import {useState} from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange=({target})=>{
       setInputValue(target.value)
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        if(inputValue.trim().length <=1) return;//condiciona la entrada de los caracteres
        //setCategories(categories=>[inputValue,...categories]);
        onNewCategory(inputValue.trim())
        setInputValue(' '); //para que se limpie el input automaticamente una vez se envia
    }

  return (
    <form onSubmit={onSubmit}>
        <input 
   type="text" 
   placeholder="Buscar gifs"
   value={inputValue}
   onChange={onInputChange}
   />
    </form>
   
    
  )
}
