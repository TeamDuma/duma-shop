import Image from 'next/image';
import React from 'react';

interface MissionCard {
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  titleText: string;
  descriptionText: string;
}

const MissionCard = ({
  imageUrl,
  imageWidth,
  imageHeight,
  titleText,
  descriptionText,
}: MissionCard) => {
  return (
    <div className="flex flex-col items-center lg:w-1/3 my-6">
      <Image
        src={imageUrl}
        alt="duma"
        width={imageWidth}
        height={imageHeight}
      />

      <h1 className="my-6 text-2xl font-bold">{titleText}</h1>
      <p className="text-center">{descriptionText}</p>
    </div>
  );
};

export default MissionCard;
