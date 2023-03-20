import React from 'react';

interface InfoCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const InfoCard = ({ title, description, icon }: InfoCard) => {
  return (
    <div className="flex w-60 flex-col items-center">
      {icon}
      <h1 className="my-2 text-xl font-bold">{title}</h1>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default InfoCard;
