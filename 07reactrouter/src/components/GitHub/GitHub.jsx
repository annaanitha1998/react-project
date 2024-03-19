import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {

    const data = useLoaderData()

// const [data, setData] = useState([])

// useEffect(() => {
//     fetch('https://api.github.com/users/annaanitha1998')
//     .then((response) => response.json())
//     .then((data) => setData(data))
// }, [])

  return (
    <div className='bg-gray-600 text-white text-3xl text-center p-5'>GitHub Followers: {data.followers} 
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default GitHub

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/annaanitha1998')
    return response.json()
}