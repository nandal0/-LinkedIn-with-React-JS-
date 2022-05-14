import React from "react";
import Container1 from "./Container1";
import Container2 from "./Container2.1";
import ContainerTwo from "./Container2.1";
// import Container3 from "./Container3";
import ProfileSlide from "./ProfileSlide";
import Footer from "./Footer";

export default function MainContent() {

    return (
        <div className="main-content-container">
            <Container1 />
            <Container2 />
            <Footer />
            {/* <ContainerTwo /> */}
            {/* <Container3 /> */}
            {/* <ProfileSlide /> */}
        </div>
    )
}