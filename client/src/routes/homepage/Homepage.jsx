import { TypeAnimation } from 'react-type-animation';
import './homepage.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Homepage = () => {

    const [typingStatus, setTypingStatus] = useState("Baktot")
    
    // const test = async () => {
    //     await fetch("http://localhost:3000/api/test", {
    //         credentials: "include",
    //     });
    // };

    return (
    <div className='homepage'>
        <img src="/orbital.png" alt="pic" className='orbital'/>
        <div className="left">
            <h1>Drei Ai</h1>
            <h2>I am drei your ai helper, What can i help you?</h2>
            <h3>This is only a project of mine where I can learn how to integrate different API's and use it accordingly like those famous AI Chat Apps.
            </h3>
            <Link to="/dashboard">Get Started</Link>
            {/* <button onClick={test}>TEST BACKEND AUTH</button> */}
        </div>
        <div className="right">
            <div className="imgContainer">
                <div className="bgContainer">
                    <div className="bg"></div>
                </div>
                <img src="/bot.png" alt="bot" className='bot'/>
                <div className='chat'>
                    <img src={
                    typingStatus === "Baktot"
                    ?"/about.jpg"
                    : "bot.png"
                    } alt="botpic" />
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Baktot : Are you Google?',
                            2000, ()=>{
                                setTypingStatus("Drei Ai")
                            },
                            'Drei Ai : Hmmm???, I do not know, Why?',
                            2000, ()=>{
                                setTypingStatus("Baktot")
                            },
                            'Baktot : Because you have everything I’m searching for',
                            2000, ()=>{
                                setTypingStatus("Drei Ai")
                            },
                            'Drei Ai : Error! Error! help me what am I supposed to say?',
                            2000, ()=>{
                                setTypingStatus("Baktot")
                            },
                        ]}
                        wrapper="span"
                        repeat={Infinity}
                        cursor={true}
                        omitDeletionAnimation={true}
                    />
                </div>
            </div>
        </div>
        <div className="terms">
            <img src="/Logowhite.png" alt="logo" />
            <div className="links">
                <Link to="/">Terms of Service</Link>
                <Link to="/">Privacy Policy</Link>
            </div>
        </div>
    </div>
    );
};

export default Homepage