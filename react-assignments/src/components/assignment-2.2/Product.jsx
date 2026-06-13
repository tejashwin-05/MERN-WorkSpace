import React from 'react'

function Product(props) {
      console.log(props)
  return (
    <div className='card text-center p-4 me-3'>
        <h5>{props.prodObj.category}</h5>
        <img src={props.prodObj.image} width="100px" height="120px" alt="" className='d-block mx-auto' />
        <div className="card-body">
            <h6>Rate : {props.prodObj.rating.rate}</h6>
            <h6>Count : {props.prodObj.rating.count}</h6>
            <h6>id : {props.prodObj.id}</h6>
            <h6>title : {props.prodObj.title}</h6>
            <h6>price : {props.prodObj.price}</h6>
            <p className='lead fs-6'>{props.prodObj.description}</p>
        </div>

    </div>
  )
}

export default Product