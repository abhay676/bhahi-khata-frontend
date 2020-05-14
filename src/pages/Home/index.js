import React from 'react'
import NavBar from "./NavBar"
import HeroSection from "./HeroSection"
import FeatureSection from "./FeatureSection"

function Home() {
    return (
        <React.Fragment>
            <NavBar />
            <HeroSection/>
            <FeatureSection />
        </React.Fragment>
    )
}

export default Home
