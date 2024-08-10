import styled from "styled-components";

export const LayoutContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`

export const LayoutImage = styled.img`
    width: 400px;
`

export const Forms = styled.div`
    display: flex;
    align-items: center;
    background-color: #ffffff;
    padding: 80px;
    border-radius: 20px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 400px;
`

export const FormHeading = styled.h1`
    font-size: 24px;
    color: #53a7f5;
    font-weight: bolder;
`

export const Label = styled.label`
    font-size: 14px;
`

export const Input = styled.input`
    font-size: 14px;
    padding: 10px;
    outline: none;
    border-radius: 5px;
    border: 1px solid #000000;

    &:focus {
        border-color: #53a7f5;
    }
`

export const Button = styled.button`
    width: 100px;
    background-color: #53a7f5;
    color: #ffffff;
    font-weight: bold;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`