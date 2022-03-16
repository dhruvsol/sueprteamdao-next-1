import React, { useEffect, useState } from 'react'

export const GetName = ({ userId }) => {
	const [names, setName] = useState(null)
	const fetchdata = () => {
		const name = fetch(`http://localhost:5000/v1/users/${userId}`)
		const data = JSON.stringify(name)
		setName(data)
	}
	useEffect(() => {
		fetchdata()
	})

	return (
		<>
			<div>{names}</div>
		</>
	)
}
