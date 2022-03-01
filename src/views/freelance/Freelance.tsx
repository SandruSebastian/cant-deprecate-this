import React from 'react';

export default function Freelance() {
    return (
        <div className="container" style={{maxWidth: 'unset'}}>
            <div className="wrapper">
                <h2>About me</h2>

                <h6>
                    <span role="img" aria-label="emoji">
                        👉
                    </span>{' '}
                    I am a mid-to-senior <b>NodeJS developer, contractor, and freelancer</b> with
                    over four years of experience leveraging my enthusiasm, abilities, and expertise
                    to build and execute state-of-the-art software solutions for global online
                    organizations.
                </h6>

                <h2>Concerning my skills</h2>
                <h6>• React, React-Native, Angular, Django Rest Framework</h6>
                <h6>• NodeJS, MySQL, Functional Programming, and Object-Oriented Programming</h6>
                <h6>
                    <span role="img" aria-label="emoji">
                        ✅
                    </span>{' '}
                    DevOps:
                </h6>
                <h6>• Containerization, Docker-Compose, Linux, and scripting</h6>
                <h6>• Amazon Web Services, DevSecOps, Security, and Networking</h6>
                <h6>• Continuous Integration/Continuous Delivery, Jenkins, Microservices</h6>

                <h2>Contact</h2>
                <h6>
                    <span role="img" aria-label="emoji">
                        💬
                    </span>{' '}
                    Don't hesitate to contact me or{' '}
                    <a style={{textDecoration: 'underline', cursor: 'pointer'}} href="/contact">
                        write me a message here
                    </a>{' '}
                    if you believe my knowledge may benefit your company!
                </h6>

                <h6>
                    <span role="img" aria-label="emoji">
                        📢
                    </span>{' '}
                    Email: sandrusebastian1997@gmail.com{' '}
                </h6>
                <h6>
                    <span role="img" aria-label="emoji">
                        📞
                    </span>{' '}
                    Phone: +(40) 722 586 392{' '}
                </h6>
            </div>
        </div>
    );
}
