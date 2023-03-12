import Image from 'next/image';
import React from 'react';

interface HowItWorksCards {
  leftImg?: boolean;
  rightImg?: boolean;
  imgUrl: string;
  stepText: string;
  titleText: string;
  descriptionText: string;
  imgHeight: number;
  imgWidth: number;
}

const HowItWorksCards = ({
  leftImg,
  rightImg,
  imgUrl,
  stepText,
  titleText,
  descriptionText,
  imgHeight,
  imgWidth,
}: HowItWorksCards) => {
  return (
    <div className="my-6 flex flex-col items-center justify-around lg:flex-row lg:px-40">
      {leftImg && (
        <div className="my-6 lg:w-full">
          <Image src={imgUrl} alt="imge" height={250} width={271.9} />
        </div>
      )}
      <div className="flex flex-col items-start lg:px-40">
        <h3>{stepText}</h3>
        <h1 className="my-6 font-bold">{titleText}</h1>
        <p className="text-left">{descriptionText}</p>
      </div>
      {rightImg && (
        <div className="my-6 lg:w-full">
          <Image src={imgUrl} alt="imge" height={imgHeight} width={imgWidth} />
        </div>
      )}
    </div>
  );
};

export default HowItWorksCards;
