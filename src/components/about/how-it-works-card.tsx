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
    <div className="my-6 flex flex-col items-center justify-around lg:flex-row lg:px-52">
      {leftImg && (
        <div className="my-6 lg:w-full">
          <Image src={imgUrl} alt="imge" height={imgHeight} width={imgWidth} />
        </div>
      )}
      <div className="flex flex-col items-start lg:px-40 lg:-mx-12">
        <h3>{stepText}</h3>
        <h1 className="my-6 font-bold text-xl text-dumaorange">{titleText}</h1>
        <p className="text-left">{descriptionText}</p>
      </div>
      {rightImg && (
        <div className="order-first my-6 lg:order-last lg:w-full">
          <Image src={imgUrl} alt="imge" height={imgHeight} width={imgWidth} />
        </div>
      )}
    </div>
  );
};

export default HowItWorksCards;
