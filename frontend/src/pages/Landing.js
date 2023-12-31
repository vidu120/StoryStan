import * as React from 'react';

import AppBar from '@mui/material/AppBar';

import Box from '@mui/material/Box';

import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';

import CardContent from '@mui/material/CardContent';

import Card from '@mui/material/Card';

import TitleBar from "../components/TitleBar.js"
import SideBar from "../components/SideBar.js"



export default function Landing() {

  return (

    <>

    <TitleBar page="landing"/>
    {/* <SideBar/> */}
    <Card style={{margin:"100px"}} >

      <CardContent>

        <Typography gutterBottom variant="h5" component="div">

          About Us

        </Typography>

        <Typography variant="body2" color="text.secondary" style={{fontSize: "15px"}} >

            Welcome to StoryStan, an innovative platform that brings your imagination to life! StoryStan harnesses the power of generative AI to create captivating stories across different genres based on a short description provided by you.With StoryStan, the possibilities are endless. Whether you're seeking an epic fantasy adventure, a thrilling mystery, a heartwarming romance, or a thought-provoking science fiction tale, our advanced AI algorithms are here to weave a unique narrative tailored to your preferences.<br /><br />

            Here's how it works: you simply provide us with a brief description or prompt, and our generative AI engine takes over, crafting a compelling story that will transport you to fascinating realms and introduce you to intriguing characters. Each story generated by StoryStan is an original masterpiece, carefully crafted to captivate and engage readers.Our cutting-edge technology leverages the vast knowledge and patterns of countless literary works, allowing StoryStan to produce narratives that are not only coherent but also possess the essence of human creativity. Whether you're an aspiring writer seeking inspiration or a reader in search of fresh, exciting tales, StoryStan has something for everyone.<br /><br />

            We understand the importance of personalization, which is why StoryStan allows you to customize various aspects of your story, such as the tone, pacing, and even character development. This ensures that each story is tailored to your preferences, creating a truly immersive and enjoyable experience.At StoryStan, we believe that storytelling has the power to inspire, entertain, and provoke emotions. We're dedicated to providing you with an extraordinary platform that unleashes your imagination and brings your unique ideas to life. Join our community today and embark on a journey of endless possibilities as you explore the extraordinary worlds crafted by our generative AI.<br /><br />

            Experience the magic of storytelling with StoryStan and let your creativity soar to new heights. Get ready to be transported to a realm where imagination knows no bounds. Start your storytelling adventure today!<br />

        </Typography>

      </CardContent>

    </Card>

  </>

  );

}