import React from 'react';
import {
    UserProfileContainer,
     ProfileAndCoverImage,
    CoverImage,
    ProfileImage
} from "./UserProfile.styled.jsx";
import PersonalDetails from "../../components/PersonalDetails/PersonalDetails.component.jsx";
import Header from "../../components/Header/Header.jsx";

function UserProfile() {
    return (
        <UserProfileContainer>
            <Header
                headerText={"Profile Details"}
            />
            <ProfileAndCoverImage>
                <CoverImage></CoverImage>
                <ProfileImage></ProfileImage>
            </ProfileAndCoverImage>
            <PersonalDetails />
        </UserProfileContainer>
    );
}

export default UserProfile;
