import styled from 'styled-components'

export const Global = styled.div`
    padding: 12px;
    font-family:'Source Sans Pro', sans-serif;
    margin: 0px;
    
`

export const TableContainer = styled.div`
    max-width: 1000px;
	margin-right: auto;
	margin-left: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height:100px;
    box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
`

export const Table = styled.div`
    width: 100%;
	border: 1px solid #EEEEEE;
`

export const TableHeader = styled.div`
    display: flex;
	width: 100%;
    justify-content: space-evenly;
	background: #C89D7C;
	padding: (12px * 1.5px) 0;
`

export const TableRow = styled.div`
    display: flex;
	width: 100%;
    justify-content: space-evenly;
	padding: (12px * 1.5) 0;
    
	
	/* &:nth-of-type(odd) {
        
		background: blanchedalmond;
	} */
`

export const HeaderItem = styled.div`
    flex: 1px 1px 20%;
    width: 250px;
	text-align: center;
    text-transform: uppercase;
`

export const TableItem = styled.div`
    flex: 1px 1px 20%;
    width: 250px;
	text-align: center;
    background: ${props => props.index % 2 === 0 ? 'blanchedalmond' : 'white'};
`
export const TableContent = styled.div`
    
`

export const Text = styled.p`

`
export const TextHeader = styled.p`
    color: white;

`

export const Button = styled.button`
    
    width: 55px;
    margin: 5px;
    padding: 5px;
    background-color: #C89D7C;
    border-radius: 2em;
    box-sizing: border-box;
    text-decoration: none;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    color: black;
    text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
    transition: all 0.2s;
    text-align: center;
    
    &:hover {
        border-color: rgb(255, 255, 255);
        cursor: pointer;
    }
`

export const Buttons = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

`
