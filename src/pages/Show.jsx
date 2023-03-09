import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const Show = () => {
  const { id } = useParams()

  const [category, setCategory] = useState({})

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/categories/${id}`).then(res => setCategory(res.data.category))
  })

  return (
		<div>
			<h1>Category - {category?.id}</h1>
      <p>Name: {category?.name}</p>
      <p>Hit: {category?.hit}</p>
      <Link to='/'>return back to the category list</Link>
		</div>
	)
}

export default Show
