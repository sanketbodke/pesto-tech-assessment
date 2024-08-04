import styled from 'styled-components';

export const Sidebar = styled.aside`
    display: flex;
    flex-direction: column;
    padding: 20px;
    height: 100vh;
    width: 270px;
    background-color: #ffffff;
    border-radius: 20px;
    box-shadow: 0 5px 4px rgb(146 161 176 / 15%);
`;

export const Tabs = styled.div`
    width: 100%;
`

export const ActiveTab = styled.div`
    background-color: #f9f9f9;
    color: #000000;
    padding: 15px 10px;
`

export const Tab =  styled.div`
    padding: 0 10px;
    background-color: #fff;
    margin-bottom: 20px;
`