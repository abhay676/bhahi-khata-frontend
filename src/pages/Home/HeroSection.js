import React from "react";
import styled from "styled-components";
import { Button } from "evergreen-ui";

const Section = styled.section`
  font-size: 3.5rem;
`;

const Image = styled.img`
  width: 45%;
  height: 100%;
  text-align: center;
`;

const Heading = styled.p`
  font-family: "Oswald", sans-serif;
  text-shadow: 4px 6px #eee;
`;

const SubHeading = styled.p`
  font-family: "Oswald", sans-serif;
  color: #05386B;
  font-size: 2.2rem;
`

const GithubLink = styled.a`
  display: block;
  color: #fff;
  &:hover {
    text-decoration: underline;
  }
`;

function HeroSection() {
  return (
    <Section className="flex flex-row mx-8 my-4">
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/bhahi-khata-b7bce.appspot.com/o/delivery-4.png?alt=media&token=3a0825c4-2e99-4173-afb3-3fc33b412aa5"
        alt="Hero_image"
      />
      <div className="mt-8 text-center">
        <Heading>Finding difficulty to manage your expenses</Heading>
        <SubHeading>Don't worry we are here to help you</SubHeading>
        <Button appearance="primary">Let's get started</Button>
        <GithubLink
          href="https://github.com/abhay676/bhahi-khata-frontend"
          target="_blank"
          className="text-xs"
        >
          We are open-source<span role="img">🎉</span>
        </GithubLink>
      </div>
    </Section>
  );
}

export default HeroSection;
