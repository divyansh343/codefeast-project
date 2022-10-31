import React, { useState } from 'react'

const Todo = () => {
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState("")
  const [todos, setTodos] = useState([])
  const [ctext, setText] = useState("")

  //  function to add new todo
  const addTodo = (e) => {
    e.preventDefault()
    if (value) {
      setTodos(todos => [...todos, value])
      setValue("")
    }
  }
  //function to remove todo & update Todos list
  const handleRemoveItem = i => {
    const nl = todos.filter(item => item !== i)
    setTodos(nl);
  }

  //function to update todo
  const updateFieldChanged = (ctext, i) => {
    let index = todos.indexOf(i);
    todos[index] = ctext
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
              Todos
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
          todos &&
          <>
            {
              todos.map((item) => (
                <>

                  <div
                    class="mt-8 flex px-4 py-4 justify-between bg-white
          dark:bg-gray-600 shadow-xl rounded-lg cursor-pointer">
                    <p>{item}</p>
                    {/* <input type="text" name="name" value={item} onChange={updateFieldChanged(index)}  /> */}

                    <div
                      class="ml-4 flex flex-col capitalize text-gray-600
                  dark:text-gray-400">

                      <>

                        {showModal ? (
                          <>
                            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                              <div className="relative w-auto my-6 mx-auto max-w-5xl">
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                    <h3 className="text-3xl font=semibold">edit todo</h3>
                                    <button
                                      className="bg-transparent border-0 text-black float-right"
                                      onClick={() => setShowModal(false)}
                                    >
                                      X
                                    </button>
                                  </div>
                                  <div className="relative p-6 flex-auto">
                                    <form

                                      className="bg-gray-200 shadow-md rounded px-2 pt-6 pb-8 w-full">
                                      <p>{item}</p>
                                      <textarea onChange={e => setText(e.target.value)} value={ctext} className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />

                                    </form>
                                    <button
                                      className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                      type="submit"
                                      onClick={() => updateFieldChanged(ctext, item)}
                                    >
                                      Submit
                                    </button>
                                  </div>
                                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                      type="button"
                                      onClick={() => setShowModal(false)}
                                    >
                                      Close
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        ) : null}
                      </>

                      <button class="border-2 bg-emerald-500 my-2 rounded-lg px-3 py-2 text-white cursor-pointer hover:bg-green-700" type="button"
                        onClick={() => setShowModal(true)}>Edit</button>
                      <button class="border-2 bg-red-500 border-gray-800 rounded-lg px-3 py-2 text-gray-800 cursor-pointer hover:bg-gray-800 hover:text-gray-200" onClick={() => handleRemoveItem(item)}>Delete</button>
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