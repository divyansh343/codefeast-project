import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {

    var config = {
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/photos',
      headers: {}
    };

    axios(config)
      .then(function (response) {
        setProducts(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });

  }, [products])

  console.log(products)
  return (
    <main
      class="flex-1 flex flex-col bg-gray-100 dark:bg-gray-700 transition
  duration-500 ease-in-out overflow-y-auto">


      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12">
        <article>
          <h2 class="text-2xl font-extrabold text-gray-900">Products</h2>
          <section class="mt-6 grid md:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-8">
            {products &&
              products.map((product) => (
                <div key={product.id}>
                  <article class="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
                    <div class="relative w-full h-80 md:h-64 lg:h-44">
                      <img src={product.thumbnailUrl}
                        alt={product.title}
                        class="w-full h-full object-center object-cover" />
                    </div>
                    <div class="px-3 py-4">
                      <a href={product.url} target="_blank" rel="noreferrer" class="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
                        ({product.id}) {product.title}</a>
                    </div>
                  </article>
                </div>
              ))
            }
          </section>
        </article>
      </div>
    </main>
  )
}

export default Products