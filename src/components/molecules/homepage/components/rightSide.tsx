"use client"

import Flex from "@/components/atoms/flex";
import Text from "@/components/atoms/text";
import { useScreenResolution } from "@/components/atoms/useScreenResolution";
import styled from "styled-components";
import { Project } from "./carousel";
import Link from "@/components/atoms/link";

const RightSideWrapper = styled.div`
//   margin-left: 24%;
  padding: 2rem 0 0;
  height: 100vh;
  width: 70%;
  overflow: scroll;


  @media screen and (max-width: 900px) {
    margin: 0;
    padding: 0;
    width: 100%;
    // overflow: hidden;
  }
`;

const RightSide = () => {
        const { isMobile } = useScreenResolution();
    
    return (
        <>
        <RightSideWrapper>
         <Flex direction="column" gap="1rem" styles={{
            padding: "0 1.5rem",
         }}>
            <Flex direction="column" styles={{width: "100%"}}>
                <Text type="h1" text="Experience Summary" styles={{
                    marginBottom: "1rem",
                    width: isMobile ? "284px" : "330px",
                    borderBottom: "2px solid",
                    fontSize: isMobile ? "1.7rem" : "2rem",
                    fontWeight: "bolder",
                }} />
                <Text styles={{
                    lineHeight: '1.5rem', marginBottom: ".8rem"
                }} type="p" text="I am a talented and seasoned web engineer who is passionate about writing original and effective code. With more than three years of experience in the field and a background in computer science, I have a track record of producing high-quality software on schedule and within budget." />
                <Text styles={{
                    lineHeight: '1.5rem', marginBottom: ".8rem"
                }} type="p" text="React.js, PHP, and MySQL are just a few of the many programming languages and technologies I am familiar with. I have experience working in both small and large development teams, and I am knowledgeable about Agile approaches." />
                <Text styles={{
                    lineHeight: '1.5rem', marginBottom: ".8rem"
                }} type="p" text="I am skilled in using ReactJS, a well-liked JavaScript library, to construct intricate single-page applications. I can write reusable, modular code that is simple to maintain and update since I have a solid understanding of React's component-based architecture. I am also skilled at successfully managing state and props to create interfaces that are simple to use." />
                <Text styles={{
                    lineHeight: '1.5rem', marginBottom: ".8rem"
                }} type="p" text="I have extensive knowledge of the PHP programming language. I have experience using MySQL and other databases, and I can design and implement strong back-end systems that underpin contemporary online applications." />
                <Text styles={{
                    lineHeight: '1.5rem', marginBottom: ".8rem"
                }} type="p" text="My experience working on multidisciplinary teams has given me good communication skills and the capacity to cooperate with others to achieve shared objectives. I pick things up quickly and am constantly eager to broaden my skill set and take on new challenges." />
                <Text styles={{
                    lineHeight: '1.5rem', marginBottom: ".8rem"
                }} type="p" text="Overall, I am a committed and knowledgeable software engineer who is passionate about coming up with elegant and useful solutions to difficult challenges. I'm constantly seeking fresh chances to use my abilities and add to creative initiatives." />

            </Flex>

            <Flex direction="column" styles={{width: "100%"}}>
            <Text type="h1" text="Soft Skills Summary"  styles={{
                    marginBottom: "1rem",
                    marginTop: "2rem",
                    width: isMobile ? "269px" : "310px",
                    borderBottom: "2px solid",
                    fontSize: isMobile ? "1.7rem" : "2rem",
                    fontWeight: "bolder",
                }} />

                <Text styles={{
                    lineHeight: '1.5rem', marginBottom: ".8rem"
                }} type="p" text="organization, positivity, and excellent writing and vocal communication abilities. good interpersonal abilities and the ability to work independently or with little oversight." />
                
                <Text styles={{
                    lineHeight: '1.5rem', marginBottom: ".8rem"
                }} type="p" text="A task management savant who can manage web and mobile solutions while comprehending business objectives to create selections demonstrated the ability to take the initiative, assess specific issues, recognize challenges, and suggest suitable resources." />

             <ul style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
             }}>
                <li>
                    <p><strong>Languages:</strong> React.js, TypeScript, Next.js</p>
                </li>
                <li>
                    <p><strong>Tools:</strong> VSCode, Git</p>
                </li>
                <li>
                    <p><strong>Concepts:</strong> Design Implementation, Clean Architecture, Test-Driven Development, and Agile
                    methodology</p>
                </li>
                <li>
                    <p><strong>Web Frameworks:</strong> React.js, TypeScript, Next.js</p>
                </li>
                <li>
                    <p><strong>UI Tools:</strong> Styled-COmponents, TailwindCSS, MUI, Bootstrap</p>
                </li>
                <li>
                    <p><strong>DevOps:</strong> Azure, GitHub Actions, Docker</p>
                </li>
                <li>
                    <p><strong>State Management:</strong> Redux, Recoil, Vanilla</p>
                </li>
                <li>
                    <p><strong>Database:</strong> MYSQL, Firebase, MongoDB</p>
                </li>
                <li>
                    <p><strong>Certification:</strong> Frontend Development (Udemy, Coursera), JavaScript</p>
                </li>
             </ul>
            </Flex>

            <Flex direction="column" styles={{width: "100%"}}>
            <Text type="h1" text="Engineering Skills Summary"  styles={{
                    marginBottom: "1rem",
                    marginTop: "2rem",
                    width: isMobile ? "332px" : "437px",
                    borderBottom: "2px solid",
                    fontSize: isMobile ? "1.5rem" : "2rem",
                    fontWeight: "bolder",
                }} />

             <ul style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
             }}>
                <li>
                    <p>4+ years of experience creating online applications that can scale smoothly across many browsers and devices, manage complex data requirements
                    </p>
                </li>
                <li>
                    <p>Experience with CSS preprocessors, such as LESS and SASS</p>
                </li>
                <li>
                    <p>Experience with statistical analysis and the ability to make data-informed decisions</p>
                </li>
                <li>
                    <p>A deep sense of product ownership</p>
                </li>
                <li>
                    <p>Experienced with the Software Development Life Cycle (SDLC) process, which includes designing and
                    implementing the software, debugging, fixing, and maintaining the software.</p>
                </li>
                <li>
                    <p>Extensive experience in React application design and implementation</p>
                </li>
                <li>
                    <p>Developed applications while being part of both Engineering and Marketing decisions, which helped
                    me learn more and acquire knowledge about basic business processes.</p>
                </li>
             </ul>
            </Flex>

            <Flex direction="column" styles={{width: "100%"}}>
            <Text type="h1" text="Professional Experience"  styles={{
                    marginBottom: "1rem",
                    marginTop: "2rem",
                    width: isMobile ? "285px" : "377px",
                    borderBottom: "2px solid",
                    fontSize: isMobile ? "1.5rem" : "2rem",
                    fontWeight: "bolder",
                }} />

                <Flex justify="flex-start" direction="column">
                    <h3 style={{margin: ".5rem 0 1.2rem", fontSize: isMobile ? "1.2rem" : "1.5rem"}}>
                        <strong>Thrillers Travels / </strong> 
                        <em style={{color: "#686868"}}>Frontend Engineer</em>
                    </h3>
             <ul style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
             }}>
                <li>
                    <p>
                    Collaborate with business analysts, users, and the QA team to ensure market quality and provide implementations/bug fixes.
                    </p>
                </li>
                <li>
                    <p>
                    Worked with UX/UI designers to implement visually appealing and user-friendly interfaces and other Developers
                    </p>
                </li>
                <li>
                    <p>
                    I participated in architectural, design, and product discussions
                    </p>
                </li>
                <li>
                    <p>
                    I overall work in an agile environment with an excellent team of engineers and managers
                    </p>
                </li>
                <li>
                    <p>
                    Utilized an in-house-made state management solution called the <strong>“redux toolkit”</strong> built from <strong>redux</strong>
                    </p>
                </li>
                <li>
                    <p>
                    Converted high-fidelity mockups to responsive web code
                    </p>
                </li>
                <li>
                    <p>
                    Partnered with the creative and product teams to maintain a cohesive design and experience
                    </p>
                </li>
             </ul>
             </Flex>

             <Flex justify="flex-start" direction="column">
                    <h3 style={{margin: "2rem 0 1.2rem", fontSize: isMobile ? "1.2rem" : "1.5rem"}}>
                        <strong>Thrillers Group Inc. / </strong> 
                        <em style={{color: "#686868"}}>Frontend Engineer</em>
                    </h3>
             <ul style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
             }}>
                <li>
                    <p>
                    Collaborate with business analysts, users, and the QA team to ensure market quality and provide implementations/bug fixes.
                    </p>
                </li>
                <li>
                    <p>
                    Worked with UX/UI designers to implement visually appealing and user-friendly interfaces and other Developers
                    </p>
                </li>
                <li>
                    <p>
                    I participated in architectural, design, and product discussions
                    </p>
                </li>
                <li>
                    <p>
                    I overall work in an agile environment with an excellent team of engineers and managers
                    </p>
                </li>
                <li>
                    <p>
                    Utilized an in-house-made state management solution called the <strong>“redux toolkit”</strong> built from <strong>redux</strong>
                    </p>
                </li>
                <li>
                    <p>
                    Converted high-fidelity mockups to responsive web code
                    </p>
                </li>
                <li>
                    <p>
                    Partnered with the creative and product teams to maintain a cohesive design and experience
                    </p>
                </li>
             </ul>
             </Flex>

             <Flex justify="flex-start" direction="column">
                    <h3 style={{margin: "2rem 0 1.2rem", fontSize: isMobile ? "1.2rem" : "1.5rem"}}>
                        <strong>Restoraweb / </strong> 
                        <em style={{color: "#686868"}}>Frontend Engineer</em>
                    </h3>
             <ul style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
             }}>
                <li>
                    <p>
                    Developed responsive web applications using HTML5, CSS3, JavaScript
                    </p>
                </li>
                <li>
                    <p>
                    Built dynamic user interfaces with React.js, and Next.js for enhanced user experiences
                    </p>
                </li>
                <li>
                    <p>
                    Translated Figma and Adobe XD designs into fully functional web pages
                    </p>
                </li>
                <li>
                    <p>
                    Ensured pixel-perfect designs and a consistent visual language across all web platforms
                    </p>
                </li>
                <li>
                    <p>
                    Built reusable, scalable components using React Hooks and styled-components
                    </p>
                </li>
                <li>
                    <p>
                    Applied <strong>modular CSS techniques</strong> (SASS, Tailwind CSS) for scalable styling solutions
                    </p>
                </li>
                <li>
                    <p>
                    Implemented lazy loading, code splitting, and other optimization techniques to improve web performance
                    </p>
                </li>
                <li>
                    <p>
                    Ensured cross-browser compatibility and responsiveness across <strong>Chrome, Firefox, Safari, and Edge</strong>
                    </p>
                </li>
                <li>
                    <p>
                    Applied <strong>media queries</strong> and mobile-first design principles for enhanced accessibility
                    </p>
                </li>
                <li>
                    <p>
                    Implemented animations and effects using AOS (Animate on Scroll)
                    </p>
                </li>
             </ul>
             </Flex>

             <Flex justify="flex-start" direction="column">
                    <h3 style={{margin: "2rem 0 1.2rem", fontSize: isMobile ? "1.2rem" : "1.5rem"}}>
                        <strong>Grace College of Education / </strong> 
                        <em style={{color: "#686868"}}>ICT Official</em>
                    </h3>
             <ul style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
             }}>
                <li>
                    <p>
                    Provided technical support for hardware, software, and network issues, ensuring minimal downtime
                    </p>
                </li>
                <li>
                    <p>
                    Diagnosed and resolved technical problems for end-users, improving system reliability
                    </p>
                </li>
                <li>
                    <p>
                    Performed regular system updates, patches, and maintenance to ensure optimal performance
                    </p>
                </li>
                <li>
                    <p>
                    Monitored and maintained network infrastructure, including routers, switches, and firewalls
                    </p>
                </li>
                <li>
                    <p>
                    Ensured secure and efficient data flow across LAN/WAN environments
                    </p>
                </li>
                <li>
                    <p>
                    Installed, configured, and maintained enterprise software applications
                    </p>
                </li>
                <li>
                    <p>
                    Conducted software training sessions for staff to maximize productivity
                    </p>
                </li>
                <li>
                    <p>
                    Delivered training and technical workshops to improve digital literacy among staff
                    </p>
                </li>
                <li>
                    <p>
                    Created user guides and FAQs for self-service technical support
                    </p>
                </li>
             </ul>
             </Flex>
            </Flex>

            <Flex direction="column" styles={{width: "100%"}}>
            <Text type="h1" text="Projects"  styles={{
                    marginBottom: "1rem",
                    marginTop: "2rem",
                    width: isMobile ? "106px" : "131px",
                    borderBottom: "2px solid",
                    fontSize: isMobile ? "1.5rem" : "2rem",
                    fontWeight: "bolder",
                }} />

             <Project />
            </Flex>

            <Flex direction="column" styles={{width: "100%"}}>
            <Text type="h1" text="Education"  styles={{
                    marginBottom: "1rem",
                    marginTop: "2rem",
                    width: isMobile ? "139px" : "159px",
                    borderBottom: "2px solid",
                    fontSize: isMobile ? "1.5rem" : "2rem",
                    fontWeight: "bolder",
                }} />

             <ul style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
             }}>
                <li>
                    <p>
                    <strong>National Innovation Diploma in Computer Science, Grace City Institute, Osogbo, Nigeria</strong>
                    </p>
                </li>
                <li>
                    <p>
                    <strong>Bachelor of Science in Computer Science, Institute Superieur Saint Paul De Carse (ISSPT)</strong>
                    </p>
                </li>
                <p>
                    <em>
A dedicated Computer Science professional with dual certifications specializing in Web and Mobile Development. Earned a National Innovation Diploma (NID) in Computer Science from Grace City Institute, Osogbo, Nigeria, and a Bachelor of Science (BSc) in Computer Science from the Institute Superieur Saint Paul De Carse (ISSPT). Proficient in modern web technologies and mobile application development, with a strong foundation in software engineering principles, responsive design, and cross-platform development. Committed to delivering high-quality digital solutions and continuously expanding technical expertise.
                    </em>
                </p>
                <p>
                I am excited to begin a new journey at a world-class University that teaches skills that apply to my everyday work. I am eager to learn and grow in my career, and I am confident that my skills and experience will make me a valuable asset to any team.
                </p>
             </ul>
             </Flex>

             <Link 
    href="mailto:pelumiadeyemi111@gmail.com" target="_blank" 
    style={{ textDecoration: "none" }}
>
    <Text 
        type="h1" 
        text="Hire Me"
        styles={{
            marginBottom: "1rem",
            marginTop: "2rem",
            width: isMobile ? "352px" : "124px",
            border: "1px solid",
            borderRadius: ".5rem",
            fontSize: isMobile ? "1.7rem" : "1.5rem",
            padding: ".5rem",
            textAlign: "center",
            cursor: "pointer"
        }}
    />
</Link>

         </Flex>   
        </RightSideWrapper>
        </>
    );
};

export default RightSide;
