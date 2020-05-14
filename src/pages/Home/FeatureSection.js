import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 45%;
  height: 100%;
`;

const Heading = styled.div`
  color: #05386b;
  font-size: 3rem;
  font-weight: bold;
  text-decoration: underline;
`;

const LI = styled.li`
  list-style: none;
  font-family: "Oswald", sans-serif;
  text-shadow: 2px 4px #eee;
  font-size: 40px;
`;

function FeatureSection() {
  return (
    <div>
      <Heading className="text-center text-4xl">FEATURES</Heading>
      <div className="flex flex-row mx-4 mt-4">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/bhahi-khata-b7bce.appspot.com/o/downloading-6.png?alt=media&token=b123ae33-4a25-4ba7-83c6-5003b623c824"
          alt="features"
        />
        <div className="mt-8 space-x-8">
          <LI>✨ Dashboard for your weekly/yearly roundups</LI>
          <LI>✨ Unlimited wallets</LI>
          <LI>✨ Upload your manuscript</LI>
          <LI>✨ Generate reports on the fly and much more...</LI>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
