import React from 'react';
import {
    UserProfileContainer,
    ProfileAndCoverImage,
    CoverImage,
    ProfileImage,
    DefaultProfile,
} from "./UserProfile.styled.jsx";
import PersonalDetails from "../../components/PersonalDetails/PersonalDetails.component.jsx";
import Header from "../../components/Header/Header.jsx";
import userProfile from "./userProfile.js";

function UserProfile() {
    const {
        firstLetterOfUserName
    } = userProfile()
    return (
        <UserProfileContainer>
            <Header
                headerText={"Profile Details"}
            />
            <ProfileAndCoverImage>
                <CoverImage></CoverImage>
                <ProfileImage>
                    <DefaultProfile>{firstLetterOfUserName}</DefaultProfile>
                </ProfileImage>
            </ProfileAndCoverImage>
            <PersonalDetails />
        </UserProfileContainer>
    );
}

export default UserProfile;