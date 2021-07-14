import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const CharacterItem = ({ item }) => {
	return (
		<Card>
			<CardInner className='card-inner'>
				<Link to={`/details/${item.char_id}`}>
					<CardFront img={item.img}>
						<Details>
							<h1>{item.name}</h1>
						</Details>
					</CardFront>
				</Link>
			</CardInner>
		</Card>
	)
}

const Card = styled.div`
	cursor: pointer;
	background-color: transparent;
	height: 300px;
	perspective: 1000px;
`

const CardInner = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	transition: transform 0.8s;
	transform-style: preserve-3d;
	&:hover CardFront {
		transform: scale(1.9);
	}
`

const CardFront = styled.div`
	width: 100%;
	height: 100%;
	backface-visibility: hidden;
	background: url(${props => props.img}) no-repeat center;
	background-size:contain;
	padding: 5px;
	position: relative;
	transition: .2s ease-in-out;
	background-repeat: no-repeat;
	margin-left: auto;
	margin-right: auto;
	background-repeat:no-repeat;
	-webkit-background-size:cover;
	-moz-background-size:cover;
	-o-background-size:cover;	
	background-size:cover;
	background-position:center;	



	li {
		list-style: none;
		padding-bottom: 10px;
	}
        &:hover {
		color: rgba(230, 230, 230, 0.973);
                transform: scale(0.9);
                h1{
                        color: rgb(231, 231, 231);
                        font-size: 20px;


                }
	}
}

`

const Details = styled.div`
	height: 20%;
	position: absolute;
	bottom: 0%;
	background: rgba(0, 0, 0, 0.171);

	right: 0;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: centerI;

	h1 {
		padding: 20px 0;
		font-size: 15px;
		text-align: center;
		color: rgba(230, 230, 230, 0.589);
		transition: 0.2s ease-in-out;
	}
`

export default CharacterItem
