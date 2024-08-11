import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-top: 25px;
`

export const TitleAndStatus = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    max-width: 500px;
`

export const Description = styled.div`
    max-width: 480px;
`

export const Input = styled.input`
    padding: 12px;
    width: 100%;
    outline: none;
    border: 1px solid #aaaaaa;
    border-radius: 5px;

    &:focus {
        border-color: #53a7f5;
    }
`

export const Select = styled.select`
    width: 100%;
    padding: 10px;
    outline: none;
    border: 1px solid #aaaaaa;
    border-radius: 5px;

    &:focus {
        border-color: #53a7f5;
    }
`

export const TextArea = styled.textarea`
    padding: 12px;
    height: 150px;
    width: 100%;
    resize: none;
    outline: none;
    border: 1px solid #aaaaaa;
    border-radius: 5px;

    &:focus {
        border-color: #53a7f5;
    }
`

export const Option = styled.option`
    padding: 10px;
    margin: 30px;
    width: 300px;
`

export const Button = styled.button`
    width: 120px;
    padding: 10px;
    cursor: pointer;
    color: #ffffff;
    background-color: #53a7f5;
    border-radius: 5px;
    outline: none;
    border: none;

`