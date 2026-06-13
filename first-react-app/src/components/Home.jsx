import React from 'react'
import img1 from '../assets/react.svg'

function Home() {
  return (
    <div className='text-center'>
      <h1 className="display-2 text-secondary">Home Page</h1>
      <img src={img1} alt="" width="250px" className='rounded-5 py-5' />
      <p className="lead">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque id veritatis mollitia dolor, deserunt culpa maiores perferendis! Explicabo ratione, reiciendis sapiente magnam id, earum quisquam corrupti magni hic cumque culpa libero eius numquam quasi nemo placeat repudiandae eveniet provident delectus obcaecati dolor praesentium vero. Laudantium non cum culpa facilis alias?
      </p>
    </div>
  )
}

export default Home;