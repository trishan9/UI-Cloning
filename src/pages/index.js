import React from "react";
import NavBar from "@/src/components/NavBar"
import Hero from "@/src/components/Hero"

export default function Home() {
    return (
        <React.Fragment>
            <div className="font-primary bg-[#fcfcfd]">
                <NavBar />
                <Hero/>
            </div>
        </React.Fragment>
    );
}
