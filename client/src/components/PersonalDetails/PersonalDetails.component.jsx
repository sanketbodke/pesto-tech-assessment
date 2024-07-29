import React from 'react';
import {Input, Label, ProfileDetailsContainer, ProfileField} from "./PersonalDetails.styled.jsx";
import usePersonalDetails from "./usePersonalDetails.js";

function PersonalDetails() {
    const  {
        userName,
        email
    } = usePersonalDetails()
    return (
        <ProfileDetailsContainer>
            <ProfileField>
                <Label>UserName</Label>
                <Input>{userName}</Input>
            </ProfileField>

            <ProfileField>
                <Label>Email</Label>
                <Input>{email}</Input>
            </ProfileField>
        </ProfileDetailsContainer>
    );
}

export default PersonalDetails;