import React from 'react';
import {
    UserProfileContainer,
    DetailsContainer,
    DetailsText,
    Line, ProfileAndCoverImage, CoverImage, ProfileImage
} from "./UserProfile.styled.jsx";

function UserProfile() {
    return (
        <UserProfileContainer>
            <DetailsContainer>
                <DetailsText>
                    PERSONAL DETAILS
                </DetailsText>
                <Line />
            </DetailsContainer>
            <ProfileAndCoverImage>
                <CoverImage></CoverImage>
                <ProfileImage></ProfileImage>
            </ProfileAndCoverImage>
        </UserProfileContainer>
    );
}

export default UserProfile;
