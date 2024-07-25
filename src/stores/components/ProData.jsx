import React from 'react'
import { mobileData } from '../data2/mobiles'
const ProData = () => {
  return (
    <>
    <h2>Mobiles</h2>
    <div className='proSection'>
        {
            firstFiveImages.map((item)=>
            {
                return (
                    <div className='imgBox'>
                        <img className='proImage' src={item.image} alt=""/>
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default ProData
