import styled from "styled-components";

export const DisplayContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
`

export const SearchContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const SearchInput = styled.input`
    width: 300px;
    padding: 10px;
    outline: none;
    border: 1px solid #aaaaaa;
    border-radius: 5px;

    &:focus {
        border-color: #53a7f5;
    }
`

export const Button = styled.button`
    padding: 10px 15px;
    background-color: #53a7f5;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`