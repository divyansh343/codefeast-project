import React, { useState } from 'react'

const Todo = () => {
    const [value, setValue] = useState("")
  const [todos, setTodos] = useState([])

  const addTodo = (e) => {
    e.preventDefault()
    if (value) {
      setTodos(todos => [...todos, value])
      setValue("")
    }
  }
    const handleRemoveItem = i => {
      const nl = todos.filter(item => item!== i)
      setTodos(nl);
  }
  return (
    <main
    class="flex-1 flex flex-col bg-gray-100 dark:bg-gray-700 transition
  duration-500 ease-in-out overflow-y-auto">
    <div class="mx-10 my-2">
      <nav
        class="flex flex-row justify-between border-b
          dark:border-gray-600 dark:text-gray-400 transition duration-500
          ease-in-out">
        <div class="flex">

          <a
            href="users-dashboard/"
            class="py-2 block text-green-500 border-green-500
                  dark:text-green-200 dark:border-green-200
                  focus:outline-none border-b-2 font-medium capitalize
                  transition duration-500 ease-in-out">
            users
          </a>
          <button
            class="ml-6 py-2 block border-b-2 border-transparent
                  focus:outline-none font-medium capitalize text-center
                  focus:text-green-500 focus:border-green-500
                  dark-focus:text-green-200 dark-focus:border-green-200
                  transition duration-500 ease-in-out">
            role
          </button>
          <button
            class="ml-6 py-2 block border-b-2 border-transparent
                  focus:outline-none font-medium capitalize text-center
                  focus:text-green-500 focus:border-green-500
                  dark-focus:text-green-200 dark-focus:border-green-200
                  transition duration-500 ease-in-out">
            access rights
          </button>
        </div>

      </nav>
      <h2 class="my-4 text-4xl font-semibold dark:text-gray-400">
        Todos
      </h2>

      <div
        class="pb-2 flex items-center justify-between text-gray-600
          dark:text-gray-400 border-b dark:border-gray-600">

        <form action="" class="mx-auto mt-4 flex w-full ">
          <input value={value} onChange={e => setValue(e.target.value)} name="todo" id="todo" class="grow rounded border-2 border-gray-300 py-3 px-3 focus:border-emerald-500 focus:outline-none sm:rounded-l-md sm:rounded-r-none sm:border-r-0" placeholder="Write to add todo" />
          <button type="submit" onClick={addTodo} class="rounded bg-emerald-500 px-5 py-4 font-bold text-white sm:rounded-l-none sm:rounded-r-md hover:bg-green-700">Add Todo</button>
        </form>
      </div>
      <div
        class="mt-6 flex justify-between text-gray-600 dark:text-gray-400">

        <div class="ml-10 pl-2 flex capitalize">
          <span class="ml-8 flex items-center">
            name
            <svg
              class="ml-1 h-5 w-5 fill-current text-green-500
                      dark:text-green-200"
              viewBox="0 0 24 24">
              <path
                d="M18 21l-4-4h3V7h-3l4-4 4 4h-3v10h3M2
                          19v-2h10v2M2 13v-2h7v2M2 7V5h4v2H2z"></path>
            </svg>
          </span>
        </div>



      </div>

      {
        todos && <>
          {
            todos.reverse().map(item => (
              <>

                <div
                  class="mt-8 flex px-4 py-4 justify-between bg-white
          dark:bg-gray-600 shadow-xl rounded-lg cursor-pointer">


                  <p>{item}</p>

                  <div
                    class="ml-4 flex flex-col capitalize text-gray-600
                  dark:text-gray-400">
                    <button>Edit </button>
                    <button class="border-2 border-gray-800 rounded-lg px-3 py-2 text-gray-400 cursor-pointer hover:bg-gray-800 hover:text-gray-200" onClick={() => handleRemoveItem(item) }>Delete</button>
                  </div>
                </div>
              </>
            ))
          }

        </>
      }


    </div>

  </main>
  )
}

export default Todo