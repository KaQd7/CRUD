import styled from 'styled-components'

export const Form = styled.form`
    height: 340px;
    width: 250px;
    background-color: blanchedalmond;
    box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-top: 70px;
    margin-bottom: 50px;
    border-radius: 3px;
`

export const FormContainer = styled.div`
`

export const FormFields = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FormFields2 = styled.div`
    display: flex;
    flex-direction: column;
`

export const FormLabel = styled.label`
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    margin-bottom: 2px;
`
export const Title = styled.div`
    text-align: center;
`

export const FormInput = styled.input`
    /* width: 170px;
    height: 25px; */
    padding: 10px;
	border: 1px solid #ccc;
	border-radius: 3px;
	margin-bottom: 10px;
	width: 100%;
	box-sizing: border-box;
	font-family: montserrat;
	color: #2C3E50;
	font-size: 13px;
`

export const Button = styled.button`
    background-color: #C89D7C;
	font-weight: bold;
	color: white;
	border: 0 none;
	border-radius: 1px;
	cursor: pointer;
	padding: 10px 5px;
	margin: 10px 5px;
    width: 80px;
    border-radius: 3px;


    &:hover{
        box-shadow: 0 0 0 2px white, 0 0 0 3px #C89D7C;
    }
`