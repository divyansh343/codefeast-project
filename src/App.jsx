import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState("")
  const [todos, setTodos] = useState([])

  const addTodo = (e) => {
    e.preventDefault()
    if (value) {
      setTodos(todos => [...todos, value])
      setValue("")
    }
  }
  const handleRemoveItem = () => {
    
  }
  return (
    <>
      <div class="h-screen w-full flex overflow-hidden">
        <nav class="flex flex-col bg-gray-200 dark:bg-gray-900 w-64 px-12 pt-4 pb-6">

          <div class="flex flex-row border-b items-center justify-between pb-2">
            <span class="text-lg font-semibold capitalize dark:text-gray-300">
              my admin
            </span>
          </div>

          <ul class="mt-2 text-gray-600">
            <li class="mt-8">
              <a href="#home" class="flex ">
                <svg
                  class="fill-current h-5 w-5 dark:text-gray-300"
                  viewBox="0 0 24 24">
                  <path
                    d="M16 20h4v-4h-4m0-2h4v-4h-4m-6-2h4V4h-4m6
							4h4V4h-4m-6 10h4v-4h-4m-6 4h4v-4H4m0 10h4v-4H4m6
							4h4v-4h-4M4 8h4V4H4v4z"></path>
                </svg>
                <span
                  class="ml-2 capitalize font-medium text-black
						dark:text-gray-300">
                  dashboard
                </span>
              </a>
            </li>

            <li class="mt-8">
              <a href="#home" class="flex">
                <svg
                  class="fill-current h-5 w-5 dark:text-gray-300"
                  viewBox="0 0 24 24">
                  <path
                    d="M12 13H7v5h5v2H5V10h2v1h5v2M8
							4v2H4V4h4m2-2H2v6h8V2m10 9v2h-4v-2h4m2-2h-8v6h8V9m-2
							9v2h-4v-2h4m2-2h-8v6h8v-6z"></path>
                </svg>
                <span
                  class="ml-2 capitalize font-medium text-black
						dark:text-gray-300">
                  Products
                </span>
              </a>
            </li>

          </ul>

        </nav>
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
                          <button onClick={() => handleRemoveItem(item) }>Delete</button>
                        </div>
                      </div>
                    </>
                  ))
                }

              </>
            }


          </div>

        </main>

      </div>
    </>
  );
}

export default App;
