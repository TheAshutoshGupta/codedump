/**
 * v0 by Vercel.
 * @see https://v0.dev/t/DirXhAamJCi
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Component() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Finish project proposal", completed: false },
    { id: 2, text: "Attend team meeting", completed: false },
    { id: 3, text: "Buy groceries", completed: true },
    { id: 4, text: "Call mom", completed: false },
    { id: 5, text: "Clean the house", completed: false },
  ])
  const [newTodo, setNewTodo] = useState("")
  const [filterCompleted, setFilterCompleted] = useState(false)
  const filteredTodos = todos.filter((todo) => !filterCompleted || todo.completed)
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: todos.length + 1, text: newTodo, completed: false }])
      setNewTodo("")
    }
  }
  const toggleTodo = (id) => {
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }
  const editTodo = (id, newText) => {
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)))
  }
  return (
    <div className="flex flex-col gap-6 p-6 md:p-8 lg:p-10">
      <div className="flex items-center gap-4">
        <Input
          type="text"
          placeholder="Add a new task..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTodo()
            }
          }}
          className="flex-1"
        />
        <Checkbox id="filter-completed" checked={filterCompleted} onChange={() => setFilterCompleted((prev) => !prev)}>
          <Label htmlFor="filter-completed">Show completed</Label>
        </Checkbox>
      </div>
      <div className="grid gap-4">
        {filteredTodos.map((todo) => (
          <Card key={todo.id} className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <Checkbox id={`todo-${todo.id}`} checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
              <Label
                htmlFor={`todo-${todo.id}`}
                className={`text-base font-medium ${todo.completed ? "line-through text-gray-500" : ""}`}
              >
                {todo.text}
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={() => editTodo(todo.id, prompt("Enter new task:"))}>
                <DeleteIcon className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => deleteTodo(todo.id)}>
                <Trash2Icon className="h-5 w-5" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

function DeleteIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
      <line x1="18" x2="12" y1="9" y2="15" />
      <line x1="12" x2="18" y1="9" y2="15" />
    </svg>
  )
}


function Trash2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <line x1="10" x2="10" y1="11" y2="17" />
      <line x1="14" x2="14" y1="11" y2="17" />
    </svg>
  )
}
