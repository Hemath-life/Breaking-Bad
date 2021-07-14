import React from "react"
import CharacterItem from "./CharacterItem"
import styled from "styled-components"
import Spinner from "./Styled"

const Character = ({ isLoading, items }) => {
	return isLoading ? (
		<Spinner />
	) : (
		<div>
			<Card>
				{items.map(item => (
					<CharacterItem key={item.char_id} item={item} />
				))}
			</Card>
		</div>
	)
}

const Card = styled.section`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1rem;

	@media (max-width: 800px) {
		.cards {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 500px) {
		.cards {
			grid-template-columns: 1fr;
		}
		
	}
`

export default Character
