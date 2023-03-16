import React from 'react';



interface Props {
  imageUrl: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
}

const WeCare: React.FC<Props> = ({
  imageUrl,
  text1,
  text2,
  text3,
  text4,
  text5,
}) => {
  return (
    <div className="image-with-text-container">
      <img src={imageUrl} alt="" className="image-with-text-image" />
      <div className="image-with-text-text-container">
        <div className="image-with-text-text image-with-text-text-1">{text1}</div>
        <div className="image-with-text-text image-with-text-text-2">{text2}</div>
        <div className="image-with-text-text image-with-text-text-3">{text3}</div>
        <div className="image-with-text-text image-with-text-text-4">{text4}</div>
        <div className="image-with-text-text image-with-text-text-5">{text5}</div>
      </div>
    </div>
  );
};

export default WeCare;
