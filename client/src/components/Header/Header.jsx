import { DetailsContainer, DetailsText, Line } from "./Header.styled.jsx";

import React from 'react';

function Header({headerText}) {
    return (
        <DetailsContainer>
            <DetailsText>
                {headerText}
            </DetailsText>
            <Line />
        </DetailsContainer>
    );
}

export default Header;