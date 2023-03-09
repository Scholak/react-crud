import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Delete = () => {
  const { id } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    axios.delete(`http://127.0.0.1:8000/api/categories/${id}`).then(res => navigate('/'))
  }, [])
}

export default Delete
