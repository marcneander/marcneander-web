import React from 'react';
import { Helmet } from 'react-helmet';
import Container from '../components/Container';
import Pill from '../components/Pill';
import Job from '../components/Job';

import blocket from '../images/blocket.png';
import schibsted from '../images/schibsted.png';
import pixpro from '../images/pixpro.png';
import bytbil from '../images/bytbil.jpg';
import tripwell from '../images/tripwell.png';
import mojang from '../images/mojang.png';
import Emoji from '../components/Emoji';

const Profile = () => (
    <React.Fragment>
        <Helmet>
            <title>Profile</title>
        </Helmet>
        <Container>
            <h2>
                <Emoji symbol="👨" /> About
            </h2>
            <p>Javascript engineer with more than 10 years of professional experience.</p>
            <p>
                I build front-ends with <strong>React</strong> and back-ends with <strong>Node.js</strong>. Passionate
                about performance, aesthetics, user experience and accessibility. I’m a social and quality driven team
                player. Able to lead projects and people.
            </p>
            <p>Off work I’m a dad, rock-climber, gamer, tech &amp; golf enthusiast.</p>
            <h2>
                <Emoji symbol="📖" /> Skill
            </h2>
            <p>
                Solid JavaScript/TypeScript, CSS &amp; HTML foundation. I’m a problemsolver, performance optimizer and
                code quality advocate. Smooth animations and pixel perfection, that’s a given.
            </p>
            <p>Excited about GraphQL, monitoring, error tracking, logs, tests, tooling and the developer experience.</p>
            <p>
                <Pill>React</Pill>
                <Pill>GraphQL</Pill>
                <Pill>Apollo</Pill>
                <Pill>Redux</Pill>
                <Pill>Immer</Pill>
                <Pill>Jest</Pill>
                <Pill>Cypress</Pill>
                <Pill>NodeJS</Pill>
                <Pill>Express</Pill>
                <Pill>Bootstrap</Pill>
                <Pill>Sass</Pill>
                <Pill>styled-components</Pill>
                <Pill>Less</Pill>
                <Pill>Three.js</Pill>
                <Pill>AngularJS</Pill>
                <Pill>jQuery</Pill>
            </p>
            <p>
                <Pill>Docker</Pill>
                <Pill>Webpack</Pill>
                <Pill>Rollup</Pill>
                <Pill>Lerna</Pill>
                <Pill>Gatsby</Pill>
                <Pill>ESLint</Pill>
                <Pill>Stylelint</Pill>
                <Pill>Prisma</Pill>
                <Pill>DevTools</Pill>
                <Pill>Sentry</Pill>
                <Pill>Contentful</Pill>
                <Pill>Netlify</Pill>
                <Pill>Teamcity</Pill>
                <Pill>Github Actions</Pill>
                <Pill>Travis</Pill>
                <Pill>Jenkins</Pill>
                <Pill>Datadog</Pill>
                <Pill>Sumologic</Pill>
                <br />
                <Pill>...</Pill>
            </p>
            <br />
            <h2>
                <Emoji symbol="✈️" /> Experience
            </h2>
            <div>
                <Job
                    logo={mojang}
                    alt="Mojang Logo"
                    title="Front-end Developer"
                    location="Mojang AB"
                    duration="Jan 2019 - Dec 2020"
                >
                    <ul>
                        <li>
                            Designing and developing a new front-end platform for the Minecraft launcher using React,
                            Typescript, Webpack, Docker etc.
                        </li>
                        <li>Creating a lightweight CMS solution for dynamic content.</li>
                        <li>Creating a Minecraft skin visualizer using Three.js</li>
                    </ul>
                </Job>
                <Job
                    logo={blocket}
                    alt="Blocket logo"
                    title="JavaScript Developer"
                    location="Blocket AB"
                    duration="Jan 2018 - Jan 2019"
                >
                    <ul>
                        <li>Develop and maintain services, both front-end and back-end</li>
                        <li>Develop and deploy several new micro-services using Node.js, Express etc.</li>
                    </ul>
                </Job>
                <Job
                    logo={bytbil}
                    alt="Bytbil logo"
                    title="Front-end Developer"
                    location="Byt Bil Nordic AB"
                    duration="Sep 2016 – Jan 2018"
                >
                    <ul>
                        <li>Develop and maintain a styleguide for use throughout the organization</li>
                        <li>Develop and maintain front-end for several systems</li>
                        <li>Designing a new front-end platform using React, Redux, Express, Webpack, Docker etc.</li>
                        <li>Ensure platform performance is optimized</li>
                    </ul>
                </Job>
                <Job
                    logo={tripwell}
                    alt="Tripwell logo"
                    title="Front-end Developer"
                    location="Tripwell AB"
                    duration="May 2016 – Sep 2016"
                >
                    <ul>
                        <li>Develop and maintain front-end for Tripwell.com</li>
                    </ul>
                </Job>
                <Job
                    logo={schibsted}
                    alt="Schibsted logo"
                    title="Lead Front-end Developer"
                    location="SCM Ventures AB"
                    duration="Apr 2015 - May 2016"
                >
                    <ul>
                        <li>Lead and advise small front-end team</li>
                        <li>Leading international collaboration with development team from Africa</li>
                        <li>Design and develop new front-end platform using Angular, gulp etc.</li>
                    </ul>
                </Job>
                <Job
                    logo={schibsted}
                    alt="Schibsted logo"
                    title="Front-end Developer"
                    location="SCM Ventures AB"
                    duration="Jan 2012 – Apr 2015"
                >
                    <ul>
                        <li>Develop and maintain front-end for multisite classified platform</li>
                        <li>Deploy several new sites in different countries around the world</li>
                        <li>Performance enhance platform to serve countries with slow connection/featurephones</li>
                    </ul>
                </Job>
                <Job
                    logo={pixpro}
                    alt="PixPro logo"
                    title="Developer"
                    location="Pixpro Stockholm AB"
                    duration="Dec 2009 – Jun 2011"
                >
                    <ul>
                        <li>Develop customized Joomla templates</li>
                        <li>Develop customized Joomla extensions</li>
                        <li>Debug and support customers with their Joomla website</li>
                    </ul>
                </Job>
            </div>
        </Container>
    </React.Fragment>
);

export default Profile;
