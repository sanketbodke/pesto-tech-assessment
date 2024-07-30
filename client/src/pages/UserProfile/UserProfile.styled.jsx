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
    background: rgb(247, 247, 247);
    border-radius: 50%;
    position: absolute;
    left: 30px;
    bottom: -60px; 
    z-index: 1000;
    border: 3px solid #ffffff; 
`;
