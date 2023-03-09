import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/categories').then(res => setCategories(res.data.categories))
  }, [])

  return (
		<div>
			<h1>Categories</h1>
      <Link to='/create' className='d-inline-block mb-3 btn btn-primary'>create new category</Link>
			<table className='table table-bordered table-striped'>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Hit</th>
						<th>Operations</th>
					</tr>
				</thead>
				<tbody>
					{categories?.map(category => (
						<tr key={category.id}>
							<td>{category.id}</td>
							<td>{category.name}</td>
							<td>{category.hit}</td>
							<td>
								<Link to={`/show/${category.id}`} className='btn btn-info me-2'>Show</Link>
								<Link to={`/edit/${category.id}`} className='btn btn-warning me-2'>Edit</Link>
								<Link to={`/delete/${category.id}`} className='btn btn-danger'>Delete</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Home
