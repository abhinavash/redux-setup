import React from 'react'
import { useSelector } from 'react-redux'

const SubcChild = () => {
  //for showing data from redux store
  const data = useSelector((c)=>{
    return c.storeData.value;
  });

  return (
    <div>
        <h2>
           Sub child: {data}
        </h2>
    </div>
  )
}

export default SubcChild