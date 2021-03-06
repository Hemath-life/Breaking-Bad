import styled from "styled-components"

const Spinner = styled.div`
	border: 10px solid #f3f3f3; /* Light grey */
	border-top: 10px solid #3498db; /* Blue */
	border-radius: 50%;
	width: 80px;
	height: 80px;
	animation: spin 2s linear infinite;
	margin-top: 70px;
	margin-left: auto;
	margin-right: auto;
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`

export default Spinner
