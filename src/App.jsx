import './App.css';
import Todo from './pages/todo';

function App() {
  
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
        <Todo />

      </div>
    </>
  );
}

export default App;
