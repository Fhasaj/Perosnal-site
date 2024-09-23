/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from "react"
import Buttons from "../components/buttons"
import ProjectsData from "../data/projects"
import ServiceCard from "../components/serviceCard"

export default function Projects() {

    const [ShowProjects, SetShowProjects] = useState("all");

    const filterProjects = () => {
        const filteredProjects = ShowProjects !== "all"
            ? ProjectsData.filter((project: any) => project.Cat.includes(ShowProjects))
            : ProjectsData;
        return (
            filteredProjects.map((project: any, index: number) => (
                <div key={index} className="flex-2">
                    <div className="mb-2 transition duration-300 ease-in-out">
                        <ServiceCard 
                            image={project.image}
                            title={project.title}
                            buttonText={project.buttonText}
                            description={project.description}
                            link={project.link}
                            target={project.target}
                            tags={project.tags}
                        />
                    </div>
                </div>
            ))
        )
    }

    return (
        <section 
        id="projects"
        className="relative h-full p-5 lg:p-0 bg-backgroundColour">
            <div className="relative flex flex-col text-center lg:items-start lg:justify-start lg:text-start text-white">
            <h1 className="text-4xl lg:mt-20 sm:text-center sm:justify-center lg:text-start lg:ml-80 underline underline-offset-8 decoration-4 decoration-accentColour font-FireSans-ExtraBold">
                    My Projects
            </h1>
            <p className="text-lg lg:text-start lg:ml-80 mt-4">
                Here is a small selection of projects I have worked on for customers as well as some projects I am currently working on.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row w-full items-center justify-center whitespace-normal p-5">
                <div className="w-full sm:w-fit mt-2 sm:mt-0">
                    <Buttons
                        text="All"
                        onClick={() => SetShowProjects("all")}
                    />
                </div>
                <div className="w-full sm:w-fit mt-2 sm:mt-0 sm:ml-5">
                    <Buttons
                        text="Web"
                        onClick={() => SetShowProjects("Web Development")}
                    />
                </div>
                <div className="w-full sm:w-fit mt-2 sm:mt-0 sm:ml-5">
                    <Buttons
                        text="Data Mining"
                        onClick={() => SetShowProjects("Data Mining")}
                    />
                </div>
                <div className="w-full sm:w-fit mt-2 sm:mt-0 sm:ml-5">
                    <Buttons
                        text="Apps"
                        onClick={() => SetShowProjects("App Development")}
                    />
                </div>
            </div>

            <div className="flex items-center justify-center">
                <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 justify-center items-center text-center">
                    {filterProjects()}
                </section>
            </div>

        </section>
    )
}
