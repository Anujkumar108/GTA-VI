import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/all';

import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import FirstVideo from "./sections/FirstVideo.jsx";
import Jason from "./sections/Jason.jsx";
import SecondVideo from "./sections/SecondVideo.jsx";
import Lucia from "./sections/Lucia.jsx";
import PostCard from "./sections/PostCard.jsx";
import Final from "./sections/Final.jsx";
import Outro from "./sections/Outro.jsx";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
    return (
        <main>
            <Navbar/>
            <Hero/>

            <FirstVideo/>
            <Jason/>

            <SecondVideo/>
            <Lucia/>

            <PostCard/>
            <Final/>
            <Outro/>
        </main>
    )
}
export default App
