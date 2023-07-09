import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, incrementByTen } from '../features/showSlice';

const SubcChild = () => {
  
  const dispatch = useDispatch();
  
  //for showing data from redux store
  const data = useSelector((c)=>{
    return c.storeData.value;
  });

  return (
    <div>
        <h2>
           Sub child: {data}
        </h2>
        <button onClick={()=>dispatch(increment())}>Click</button>
        <button onClick={()=>dispatch(incrementByTen(10))}>Click</button>

    </div>
  )
}

export default SubcChild