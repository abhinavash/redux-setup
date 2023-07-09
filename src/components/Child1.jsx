import React from 'react'
import SubcChild from './SubcChild'
import { useSelector } from 'react-redux';

const Child1 = (props) => {
  const data = useSelector((c)=> c.storeData.value);
  return (
    <div>
        <h1>
            child one: {data}
        </h1>
        <SubcChild />
    </div>
  )
}

export default Child1