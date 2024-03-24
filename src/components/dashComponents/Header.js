// components/dashComponents/header.js
import React, {useState} from 'react';
import styled from 'styled-components';
import BrandIcon from '../../assets/icons/skillet_FILL0_wght400_GRAD0_opsz40.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';

const StyHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    max-width: 97.6%;
    color: black; /* White text */
    position: fixed; /* Fixed position */
    top: 0; /* Stick to the top */
    width: 98.6%;
    height: 35px;
    margin-left: -8px;
    transition: background-color 0.4s ease; /* Smooth transition */
    background-color: ${props => (props.scrolling ? 'rgba(230, 230, 230, 0.9)' : 'rgb(251, 251, 251)')}; /* Conditional translucent background color */
    z-index: 9999; /* Ensure header is on top */

    @media (max-width: 480px) {
        max-width: 97.6%;
        margin-left: -8px;
    }
`;

const H1 = styled.h1`
    margin: 0;
    text-align: center;
    flex-grow: 1;
    margin-right: 0px;
    display: flex; /* Change display to flex */
    align-items: center; /* Center items vertically */
    justify-content: center; /* Center items horizontally */

    

    @media (max-width: 480px) {
        display: flex; /* Change display to flex */
        align-items: center; /* Center items vertically */
        margin-right: 0px;
    }
`;

const ButtonContainer = styled.div`
    display: flex;

    align-items: center; /* Added */
 
    @media (max-width: 480px) {
        flex-direction: column; /* Stack buttons vertically */
        gap: 5px; /* Vertical gap between buttons */
    }
`;

const Button = styled.button`
    margin-left: 10px;

    /* Added */
    padding: 5px 20px; /* Half the original padding */
    border: 1px solid black; /* Thin black border */
    border-radius: 25px;
    font-size: 16px;
    font-weight: 600;
    color: black; /* Text color */
    background-color: white; /* White background color */
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease, border-color 0.3s ease;

    &:hover {
        background-color: #F2F2F2; /* Slightly off-white on hover */
        border-color: #999999; /* Darker border on hover */
        transform: scale(1.05); /* Slightly increase size on hover */
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); /* Soft shadow on focus */
    }

    &:first-child {
        background-color: #F9F9F9; /* Slightly different shade of white for Sign Up button */
        border-color: black; /* Black border for Sign Up button */
        margin-left: 0;
    }

    @media (max-width: 480px) {
        margin-right: 13px;
        padding: 8px 15px;
        height: 33px; /* Adjusted height for smaller screens */
        align-items: center;
    }
`;

const ChildrenWrapper = styled.div`
    margin-right: -80px; // Adjust as needed
    margin-left: -10px;

    @media (max-width: 480px) {
        margin-right: 0px;
        margin-left: -18px;
    }

    @media (max-width: 380px) {
        margin-right: -30px;
        margin-left: -18px;
      }  
`;

const SaveButton = ({ onClick }) => {
    const [isSaved, setIsSaved] = useState(false);
    const [buttonText, setButtonText] = useState('Save');

    const handleClick = async () => {
        setIsSaved(true);
        setButtonText('✔');
        
        // Call the original onClick function
        onClick();

        setTimeout(() => {
            setButtonText('Save');
            setIsSaved(false);
        }, 2000);
    };

    return (
        <Button onClick={handleClick} style={{ transform: isSaved ? 'scale(1.2)' : 'scale(1)' }}>
            {buttonText}
        </Button>
    );
};


const HeaderDash = ({ children, scrolling, showSaveButton, id, showBookmarksButton }) => {
    const router = useRouter();
    const handleLogoutClick = async () => {
        try {
            const response = await fetch('../api/logout', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
              });

            if (response.status === 200) {
                const data = await response.json();
                // Redirect the user to the specified URL
                window.location.href = data.redirectUrl;
            } else {
                // Handle other status codes if needed
                throw new Error('Logout failed');
            }
          } catch (error) {
            console.error('Logout failed:', error);
            // Handle error if needed
          }
      };
    
      const handleSaveClick = async () => {
        try {
            const response = await fetch('../api/bookmark', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
              });
          } catch (error) {
            console.error('Error saving recipe:', error);
          }
      };

      const handleBookmarkClick = async () => {
        router.push('../dashboard/bookmarks');
      }

    return (
        <StyHeader scrolling={scrolling}>
            <ChildrenWrapper>{children}</ChildrenWrapper>
            <H1>
                <Link href="/dashboard" style={{ textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <BrandIcon/>
                    Simmer
                </Link>
            </H1>
            <ButtonContainer>
                {showBookmarksButton && <Button onClick={() => handleBookmarkClick()}>Bookmarks</Button>}
                {showSaveButton && <SaveButton onClick={handleSaveClick} />}
                <Button onClick={() => handleLogoutClick()}>Logout</Button>
            </ButtonContainer>
        </StyHeader>
    );
};

export default HeaderDash;