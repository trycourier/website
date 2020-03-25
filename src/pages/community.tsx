import React from "react";
import { Link } from "gatsby";

import styled from "styled-components";
import tw from "tailwind.macro";

// import colors from "../colors";
import Simple from "./simple";

const EventCard = styled.div`
  ${tw`max-w-sm rounded overflow-hidden shadow-lg p-4`}
`;

const Community: React.FC = () => {
  return (
    <Simple title="Community">
      <h1>Community</h1>
      <h2>Blog</h2>
      <hr />
      <EventCard>
        <img
          className="w-full"
          src="https://placekitten.com/400/200"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <h4 className="font-bold text-xl mb-2">Notification Design Studio</h4>
          <div className="text-sm mb-2">
            posted by <strong>Name of Person</strong> on{" "}
            <strong>Date and Time</strong>
          </div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 py-4">
          <Link>Read More</Link>
        </div>
      </EventCard>
    </Simple>
  );
};

export default Community;
