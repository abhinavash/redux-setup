import React from 'react'
import SubcChild from './SubcChild'

const Child1 = (props) => {
  return (
    <div>
        <h1>
            child one: {props.childOne}
        </h1>
        <SubcChild data={props.childOne}/>
    </div>
  )
}

export default Child1