import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #f5d0fe;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CardContainer = styled.div`
  background-color: #ffffff;
  padding: 50px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const MainHeading = styled.h1`
  color: #000000;
  font-size: 28px;
  font-family: 'Roboto';
  font-weight: 600;
`
export const InputContainer = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
`
export const DisplayInputText = styled.p`
  color: #323f4b;
  font-size: 18px;
  font-family: 'Roboto';
`
export const UserInput = styled.input`
  color: #323f4b;
  font-size: 16px;
  font-family: 'Roboto';
  border: 1px solid #cbd2d9;
  outline: none;
  padding: 8px;
  height: 35px;
  width: 250px;
  border-radius: 4px;
`
export const Button = styled.button`
  color: #ffffff;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 500;
  background-color: #d946ef;
  padding: 8px 10px;
  border-radius: 6px;
  border: none;
  outline: none;
  cursor: pointer;
`
