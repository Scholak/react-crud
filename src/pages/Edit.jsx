import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Edit = () => {
  const { id } = useParams()

  const navigate = useNavigate()

  const [category, setCategory] = useState({})

  const [name, setName] = useState('')

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/categories/${id}`).then(res => {
      setCategory(res.data.category)
      setName(res.data.category.name)
    })
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    axios.put(`http://127.0.0.1:8000/api/categories/${id}`, { name }).then(res => {
      if(res.status == 200) {
        navigate('/')
      }
    })
  }

  const handleChange = e => {
    setName(e.target.value)
  }
  
  return (
		<>
			<h1>Edit Category - {category?.name}</h1>
			<Link to='/'>return back to the category list</Link>
			<form onSubmit={handleSubmit} method='post'>
				<div className='form-group'>
					<label htmlFor='name'>Category Name</label>
					<input
						type='text'
						name='name'
						onChange={handleChange}
						value={name}
						className='form-control'
            required
					/>
				</div>
				<div className='form-group'>
					<button className='btn btn-primary'>edit</button>
				</div>
			</form>
		</>
	)
}

export default Edit
