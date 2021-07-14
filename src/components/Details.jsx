import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"
import Spinner from "./Styled"

const Details = ({ match }) => {
	const [item, setItem] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const fetchItem = async () => {
			const result = await axios(
				`https://www.breakingbadapi.com/api/characters/${match.params.ids}`
			)
			console.log(result.data)
			setItem(result.data)
			setIsLoading(false)
		}
		fetchItem()
	}, [])

	return <Item isLoading={isLoading} item={item} />
}

const Item = ({ isLoading, item }) => {
	return isLoading ? (
		<Spinner />
	) : (
		<Card>
			<img src={item[0].img} alt='' />
			<ul>
				<li>
					Actor Name: <strong>{item[0].portrayed}</strong>
				</li>
				<li>
					Nickname:<strong> {item[0].nickname}</strong>
				</li>
				<li>
					Birthday: <strong>{item[0].birthday}</strong>
				</li>
				<li>
					Status: <strong>{item[0].status}</strong>
				</li>
				<li>
					Occupation:<strong> {item[0].occupation[0]}</strong>
				</li>
				<li>
					Appearance: <strong>{item[0].appearance.length}</strong>
				</li>
			</ul>
		</Card>
	)
}

const Card = styled.div`
	margin-top: 40px;
	display: flex;
	justify-content: space-evenly;
	align-items: center;

	img {
		height: 400px;
		object-fit: cover;
		filter: grayscale(30%);
		&:hover {
			filter: grayscale(0);
		}
	}

	ul {
		list-style: none;
		li {
			font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
				"Lucida Sans Unicode", Geneva, Verdana, sans-serif;

			margin-bottom: 20px;
			font-size: 20px;
			font-family: Arial, Helvetica, sans-serif;
			color: rgba(241, 240, 240, 0.705);
			letter-spacing: 0.5px;

			strong {
				font-size: 20px;
				font-weight: normal;
				color: rgba(241, 240, 240, 0.938);
			}
		}
	}
`

export default Details
