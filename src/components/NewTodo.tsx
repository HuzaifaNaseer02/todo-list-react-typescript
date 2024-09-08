import React, { useRef } from 'react'
import './NewTodo.css'

type NewTodoProps = {
  onAddtodo: (text: string) => void
}

const NewTodo: React.FC<NewTodoProps> = ({ onAddtodo }) => {
  const textInputRef = useRef<HTMLInputElement>(null)

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    const enteredText = textInputRef.current!.value
    onAddtodo(enteredText)
  }

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className='form-control'>
        <input type='text' id='text' ref={textInputRef} />
        <button type='submit'>Add Todo</button>
      </div>
    </form>
  )
}

export default NewTodo
