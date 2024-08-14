// components/GroupLinks.tsx
import React from 'react';
import Links from './link';
import linkData from '../../data/links.json';

type LinkItem = {
  title: string;
  url: string;
};

type Section = {
  title: string;
  links: LinkItem[];
};

const GroupLinks: React.FC = () => {
  return (
    <div className=" grid grid-flow-row grid-cols-2 sm:grid-cols-4 gap-10 sm:gap-20">
      {linkData.map((section, index) => (
        <div key={index} className=" flex sm:text-lg gap-3 flex-col ">
          <h2 className="">{section.title}</h2>
          {section.links.map((link, index) => (


              <Links key={index} title={link.title} url={link.url}/>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GroupLinks;
