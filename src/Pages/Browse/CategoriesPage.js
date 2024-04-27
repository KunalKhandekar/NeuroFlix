import React from 'react'
import { useParams } from 'react-router-dom'

const CategoriesPage = () => {
    const { categoryNo } = useParams();

  return (
    <div>
        {categoryNo}
    </div>
  )
}

export default CategoriesPage
