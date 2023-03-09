import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Create = () => {
  const [name, setName] = useState()

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    axios.post('http://127.0.0.1:8000/api/categories/store', { name }).then(res => navigate('/'))
  }

  const handleChange = e => {
    setName(e.target.value)
  }

  return (
		<>
			<h1>Create Category</h1>
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
					<button className='btn btn-primary'>create</button>
				</div>
			</form>
		</>
	)
}

export default Create
