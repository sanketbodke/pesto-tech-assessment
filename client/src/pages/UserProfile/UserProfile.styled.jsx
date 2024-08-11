import styled from "styled-components";

export const UserProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ProfileAndCoverImage = styled.div`
    position: relative;
`;

export const CoverImage = styled.div`
    max-width: 600px;
    height: 220px;
    background: rgb(247, 247, 247);
    border-radius: 20px;
`;

export const ProfileImage = styled.div`
    width: 110px;
    height: 110px;
    background: #53a7f5; 
    border-radius: 50%;
    position: absolute;
    left: 30px;
    bottom: -60px; 
    z-index: 1000;
    border: 3px solid #ffffff; 
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff; 
    font-size: 38px; 
`;

export const DefaultProfile = styled.p`
    margin: 0;
`;