
import React from 'react'

const Category = ({uniqueCategories,filterCategory}) => {

  
  return (
    <div className='btn-container'>

        {uniqueCategories.map((category,index)=>{
            return (
            <button  key={index} type='button' onClick={()=>filterCategory(category)} className='btn'>{category}</button>
            )
        })}

    </div>
  )
}

export default Category