// pages/dashboard/index.js
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../../components/dashComponents/Header';
import Footer from '../../components/Footer';
import SearchBar from '../../components/dashComponents/SearchBar';
import Initialcontent from '../../components/Initialcontent';
import RecipeList from '../../components/dashComponents/RecipeList';
import withSession from '../../middleware/_middleware';
import { useRouter } from 'next/router';

const IndexPage = ({ user }) => {
    const router = useRouter();

    const showSaveButton = false;
    const showBookmarksButton = true;

    const { recipesRandom, randomRecipes } = Initialcontent();
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        if (!user) {
          router.push('../login');
        }
      }, [user]);
    

    useEffect(() => {
        // Call randomRecipes when the component mounts
        randomRecipes();
    }, []); // Empty dependency array means this effect runs only once after the component mounts

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div style={styles.body}>
            <Head>
                <link rel='icon' href='/skillet_FILL0_wght400_GRAD0_opsz24.png' />
                <title>Simmer</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
            </Head>
            <Header scrolling={scrolling} showSaveButton={showSaveButton} showBookmarksButton={showBookmarksButton}>
                <SearchBar/>
            </Header>
            <main style={styles.content}>
                <RecipeList recipes={recipesRandom} />
            </main>
            <Footer />
        </div>
    );
};

const styles = {
    body: {
        position: 'relative',
        minHeight: '100vh',
        margin: '0',
        maxWidth: '100vw',
        fontFamily: 'Roboto, sans-serif',
    },
    content: {
        width: '98.6%', // Ensures the content fits the width of the device
        paddingTop: '60px',
        paddingBottom: '60px',
    },
};

export const getServerSideProps = withSession(async ({ req, res }) => {
    const user = req.session.get('user');
  
    return {
      props: {
        user: user || null,
      },
    };
  });

export default IndexPage;
