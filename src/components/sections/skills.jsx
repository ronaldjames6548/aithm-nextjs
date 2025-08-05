import React from 'react'
const skillsData = [
    { id: 1, name: "WordPress", percentage: 80, },
    { id: 2, name: "JavaScript", percentage: 90, },
    { id: 3, name: "Python", percentage: 75, },
    { id: 4, name: "PHP", percentage: 95, },
    { id: 5, name: "React", percentage: 65, },
    { id: 6, name: "Figma", percentage: 90, },
];

const Skills = () => {
    return (
        <div className="multiple-section">
            <div className="section-canvas bg-14">
                <div className="container">
                    <div className="multip-title">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-5">
                                <h3 data-animation="fade-down">Our Expertise On This Skills!</h3>
                            </div>
                            <div className="col-lg-6">
                                <p data-animation="fade-right" data-delay={0.1}>The journey from theoretical concepts to practical applications has been marked by innovation, challenges, and ethical considerations. As AI technology continues to evolve</p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        {skillsData.map((skill, index) => (
                            <div key={skill.id} className="col-lg-4 col-sm-6">
                                <div className="multip" data-animation="fade-up" data-delay={index * 0.1}>
                                    <div className="content-1">
                                        <div className="skill-bar">
                                            <div className="text-content">
                                                <ul>
                                                    <li><span>{skill.name}</span></li>
                                                    <li><span>{skill.percentage}%</span></li>
                                                </ul>
                                                <p>
                                                    The collaboration between humans and AI, often referred to as augmented intelligence,
                                                    will likely become the norm collective capabilities.
                                                </p>
                                            </div>
                                            <div className="progress" role="progressbar" aria-valuenow={skill.percentage} aria-valuemin={0} aria-valuemax={100}>
                                                <div className="progress-bar bg-clr" style={{ width: `${skill.percentage}%` }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Skills