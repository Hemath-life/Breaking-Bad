import React from "react"
import logo from "../img/logo.png"
import styled from "styled-components"

const Header = () => {
	return (
		<HeaderSection className='center'>
			<Img src={logo} alt='' />
		</HeaderSection>
	)
}

const HeaderSection = styled.header`
	height: 200px;
	display: flex;
	align-items: center;
	justify-content: center;
`
const Img = styled.img`
	width: 200px;
`



export default Header
