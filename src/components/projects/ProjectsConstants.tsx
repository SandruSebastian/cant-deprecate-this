import React, {ReactElement} from 'react';
import appImage1 from '../../resources/images/dorel-app-photo-1.webp';
import appImage2 from '../../resources/images/dorel-app-photo-2.webp';
import appImage3 from '../../resources/images/dorel-app-photo-3.webp';
import dorelLogo from '../../resources/icons/dorel-logo.webp';
import droneImage1 from '../../resources/images/unihack-drone-app-1.webp';
import droneImage2 from '../../resources/images/unihack-drone-app-2.webp';
import droneImage3 from '../../resources/images/unihack-drone-app-3.webp';
import drone from '../../resources/images/unihack-drone-photo-1.webp';
import zf from '../../resources/icons/ziarul-financiar-logo.webp';

import crImage from '../../resources/images/license-app-1.webp';
import crImage1 from '../../resources/images/license-app-2.webp';
import crImage2 from '../../resources/images/license-app-3.webp';
import crImage3 from '../../resources/images/license-app-4.webp';

import refImage1 from '../../resources/images/freeda-mockup.webp';
import reflogo from '../../resources/icons/refinio_logo.svg';
import corandusLogo from '../../resources/icons/trace-my-track-logo.webp';

export type Project = {
    title: string;
    description: string;
    longDescription: ReactElement;
    date: string;
    image: string;
    press?: ReactElement;
};

export const PROJECTS: Project[] = [
    {
        title: 'Dorel App',
        description:
            'iOS/Android App that was launched in 2020 as part of the firm Elementum Technologies S.R.L., which I co-founded with five other colleagues... ',
        longDescription: (
            <div>
                <img src={dorelLogo} alt="dorel-logo" />
                <p>
                    Dorel App was launched in 2020 as part of the firm Elementum Technologies
                    S.R.L., which I co-founded with five other colleagues.
                </p>
                <h5>Tech stack</h5>
                <p>
                    Angular, React-Native, Redux Saga Typescrip, Django, SignalR, PostgreSQL,
                    Jenkins Docker
                </p>
                <h5>Abstract</h5>
                <p>
                    This platform facilitated the communication between service providers (e.g.,
                    electricians, masons, plumbers, and others) and their customers. From the
                    client's standpoint, they can have a more viable option when it comes to
                    selecting the appropriate services for their home ( from maintenance, to
                    gardening and building ). As simple as it seems, everything was integrated into
                    a mobile/web platform focused on providing the finest solutions possible for
                    both customers and service providers. As a result, service providers required to
                    register as an Authorized Person in order to execute work and be compensated.
                    Additionally, they will have information on their revenue, clientele, and advice
                    on how to improve their work and rates.
                </p>
                <h5>General</h5>
                <p>
                    {' '}
                    The concept began with a dilemma that we all face: locating a craftsman in a
                    timely way after a house breakdown. I believe we all clicked, and we recognized
                    an opportunity to benefit the community by developing a product focused on both
                    buyers and artisans who would work via the app. There are two ways to approach
                    the application. The viewpoint of the craftsman and the perspective of the
                    customer. The customer wants to locate a qualified and dependable craftsmen
                    quickly, and the craftsman wants to have a huge online presence, for example, a
                    site to display his work and find new projects, as well as a location where
                    anybody can become a craftsman. Thus, the platform is positioned as a service
                    for both consumers and artisans. It will be absolutely free for buyers, and for
                    craftsmen, we will provide six project options each month for free, after which
                    they may purchase more projects or subscribe to get an infinite number of
                    projects per month.{' '}
                </p>
                ,<img alt="dorel-1" style={{width: '200px'}} src={appImage1} />
                <img alt="dorel-2" style={{width: '200px'}} src={appImage2} />
                <img alt="dorel-3" style={{width: '200px'}} src={appImage3} />
            </div>
        ),
        date: '13-06-2019 until 10-10-2020',
        image: dorelLogo,
        press: (
            <span>
                As appeared on{' '}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.zf.ro/zf-it-generation/zf-it-generation-sebastian-sandru-cofondator-dorel-aplicatie-19420499"
                >
                    <img alt="dorel-4" style={{width: '150px'}} src={zf} />
                </a>
            </span>
        )
    },
    {
        title: 'Refinio ONE',
        description:
            'Refinio ONE was one of the most intriguing projects on which I have worked. You control all of your data; it is encrypted end to end; there is no centralized database...',
        longDescription: (
            <div>
                <img alt="ref-logo" src={reflogo} />
                <h5>Tech stack</h5>
                <p>React, NodeJS</p>
                <h5>Abstract</h5>
                <p>
                    Refinio ONE was one of the most intriguing projects on which I've worked. You
                    control all of your data; it is encrypted end to end; there is no centralized
                    database. REFINIO ONE is the first ubiquitously accessible meta database, giving
                    the FDM (Federated Data Management) foundation and the same runtime environment
                    for any software application needing communication and storage on servers, PCs,
                    browsers, mobile and embedded devices. ONE combines structured data markup with
                    embedded software to maximize data organization and storage flexibility,
                    privacy, and independence.{' '}
                </p>
                <h5>General</h5>
                <p>
                    {' '}
                    We built an application that enable physicians and scientists to conduct and
                    assess clinical research anonymously as part of the project "DEfenceCOVID-19."
                    This application is based on Refinio ONE software. ONE is unique in that all
                    data and events remain with the user. The obtained data is only shared with
                    other users with the user's express permission. Freeda.one is a Progressive Web
                    App (PWA) in the following sense: It is compatible with Google Chrome and Apple
                    Safari (and on IOS as a Save-to-Homescreen-App). The app is compatible with
                    smartphones, tablets, PCs, and laptops{' '}
                </p>
                <img alt="ref-1" style={{width: '415px'}} src={refImage1} />
            </div>
        ),
        date: '10-01-2019 - present',
        image: refImage1,
        press: (
            <div>
                Learn more about{' '}
                <b>
                    <a
                        style={{cursor: 'pointer', textDecoration: 'underline'}}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://refinio.net"
                    >
                        Refinio GmbH
                    </a>
                </b>
            </div>
        )
    },
    {
        title: 'Trace My Track',
        description:
            'TraceMyTrack is an iOS application that allows you to keep track of your travels. It allows you to customize your track by including photographs, descriptions, and tags for the ...',
        longDescription: (
            <div>
                <img alt="corandus-logo" src={corandusLogo} />
                <h5>Tech stack</h5>
                <p>Angular, Springboot</p>
                <h5>Abstract</h5>
                <p>
                    TraceMyTrack is an iOS application that allows you to keep track of your
                    travels. It allows you to customize your track by including photographs,
                    descriptions, and tags for the objects that are most meaningful to you. It
                    allows you to share your favorite tunes as story cards across all major social
                    networking platforms, including Facebook and Instagram, as well as messaging
                    services such as Email, Whatsapp, and others. This allows you to choose from a
                    variety of various layout options. Additionally, it can keep track of all the
                    locations where you've paused and enjoyed the moment. TraceMyTrack records your
                    standing points automatically. Your info is solely yours. TraceMyTrack saves
                    whatever it captures locally on your device. Create and save tracks on the map
                    for your excursions, trips, and sporting activity. Add images, tags, and
                    descriptions to your favorite locations worldwide and share them with your
                    friends.
                </p>
                <h5>General</h5>
                <p>
                    The app is ideal for walks, sightseeing excursions, running, hiking, and
                    trekking, as well as bicycling, motorcycling, and driving. TraceMyTrack collects
                    and analyzes data about your track and each individual point, such as speed,
                    height, time from start, and distance. Maintain a record of your stunning vistas
                    or critical information straight on the track. You may edit the track at any
                    time by adding photographs, descriptions, and tags. You may share tracks with
                    accompanying images, point data, and statistics with your friends and family
                    across all major social networking networks. Our new Story Card assists you in
                    this endeavor by providing a variety of layout profiles.
                </p>
            </div>
        ),
        date: '10-10-2018',
        image: corandusLogo,
        press: (
            <div>
                Learn more about{' '}
                <b>
                    <a
                        style={{cursor: 'pointer', textDecoration: 'underline'}}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://tracemytrack.com/"
                    >
                        Trace My Track
                    </a>
                </b>
            </div>
        )
    },
    {
        title: 'Concept: Drone trash recognition',
        description:
            'Karen the Drone is an IoT (Internet of Things) solution for environmental monitoring, particularly in difficult-to-reach places. The research entails flying a drone over a regi...',
        longDescription: (
            <div>
                <img alt="drone" style={{width: '50%'}} src={drone} />
                <p>
                    This project was conceived as a demonstration solution and was never meant to be
                    produced owing to a lack of funds and financial and equipment constraints.
                </p>
                <h5>Tech stack</h5>
                <p>Angular, Spring, Flask, Keras</p>
                <h5>Abstract</h5>
                <p>
                    Karen the Drone is an IoT (Internet of Things) solution for environmental
                    monitoring, particularly in difficult-to-reach places. The research entails
                    flying a drone over a region, such as the depths of a forest or along the banks
                    of a river, in order to locate areas contaminated by waste. These locations are
                    reported by the drone, and the coordinates and picture of the occurrence are
                    sent to a web portal accessible to the local community.
                </p>
                <h5>General</h5>
                <p>
                    {' '}
                    The project's objective is to empower the local population to assist in cleaning
                    up waste discovered by the drone. To do this, the online platform includes
                    capabilities such as comment reporting, a troubleshooting system, and direct
                    drone control from the site for privileged users. DJI Tello Edu is the drone
                    utilized in the present implementation. Although this drone is inexpensive and
                    has minimal specs, it meets our need for a proof of concept. It was developed in
                    partnership with Intel and has a 14-core CPU that is very energy efficient,
                    giving the drone a flying range of around 13 minutes when combined with the
                    1100mAh battery.{' '}
                </p>
                <img alt="drone-1" style={{width: '200px'}} src={droneImage1} />
                <img alt="drone-2" style={{width: '200px'}} src={droneImage2} />
                <img alt="drone-3" style={{width: '200px'}} src={droneImage3} />
            </div>
        ),
        date: '19-05-2020',
        image: drone
    },
    {
        title: 'Concept: Autonomous distributed cryptocurrency trading platform',
        description:
            '  The platform will be accessible through current online trading platforms that each registered user has an API key for...',
        longDescription: (
            <div>
                <h5>Tech stack</h5>
                <p>React, Spring, NodeJS, Keras, AioHttp, Docker, Redux Saga</p>
                <h5>Abstract</h5>
                <p>
                    The bitcoin sector is expanding, with enormous growth potential. The platform
                    developed is a bitcoin trading tool, a stand-alone application designed for
                    individuals with less knowledge of the cryptocurrency market. As a consequence,
                    this platform is limited to the cryptocurrency market, with no access to other
                    markets such as equities, commodities, or CFDs
                </p>
                <h5>General</h5>
                <p>
                    The platform will be accessible through current online trading platforms that
                    each registered user has an API key for, such as Coinbase PRO, Binance,
                    Bitfinex, and CEX. This API key is a unique string for each user of the
                    aforementioned platforms and enables the automation of operations conducted
                    through the aforementioned sites. As a result of these platforms' regulations,
                    the person who has the API key is accountable for any action made on their
                    virtual wallet, and the objective of the work in issue is to alert consumers of
                    this. This key is not required in the current version for testability and
                    presentation purposes. The platform will only save user API keys in the RAM of
                    the standalone agent; these keys will not be stored or persistent on the
                    platform. Notably, future versions will encrypt each API key using the SHA-256
                    platform, using a unique key comprised of the agent's Process Identifier (PID)
                    and start-up time. Time is by far the most valuable resource we as humans
                    possess. Thus, the utility of such a platform can be realized by those who lack
                    the time or the necessary knowledge to keep up with the latest trends in the
                    cryptocurrency market, but still wish to trade and own cryptocurrencies, or
                    simply earn additional income from transactions carried out by the platform's
                    autonomous agents. As a result, it significantly adds value to these sorts of
                    challenges by automatically trading cryptocurrency using buy or sell signals
                    generated by an artificial neural network. While trading cryptocurrencies is
                    straightforward, flexible, and transparent, profiting from future selling /
                    purchasing activities might be challenging for an unskilled investor ("Investing
                    is easy, but not simple").
                </p>
                <img alt="license-1" style={{width: '200px'}} src={crImage1} />
                <img alt="license-2" style={{width: '200px'}} src={crImage2} />
                <img alt="license-3" style={{width: '200px'}} src={crImage3} />
            </div>
        ),
        date: '10-07-2020',
        image: crImage
    }
];
