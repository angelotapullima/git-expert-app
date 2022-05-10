import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GitGrid } from './components/GitGrid'

export const GitExpertApp = () => {


  const [categories, setCategories] = useState(['Halo'])

  return (
    <>
      <h2>GitExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      
      <ol>
        {
          categories.map(category => (
              <GitGrid
              key={category}
              category={category}
            />

          ))
        }
      </ol>
    </>
  )
}
