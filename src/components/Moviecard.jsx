import React from 'react'

const Moviecard = (data) => {
 // console.log(value.data.Year,"....yearrr")
  //const {data} = data;
  console.log(data,"....val")
  console.log(data?.data?.Title,"....title")


  return (
    <div className='p-2  '>

<div class="flex justify-center">
  <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={data?.data?.Poster} alt={data?.data?.Title} />
    <div class="p-6 flex flex-col justify-start">
      <h5 class="text-gray-900 text-xl font-medium mb-2">{data?.data?.Title}</h5>
      <p>{data?.data?.Year}</p>
    </div>
  </div>
</div>
      </div>
  )
}

export default Moviecard