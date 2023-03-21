import React from 'react';
import { ChildEating, GlobeLeaf, HandLeaf, RecycleIcon } from '../icons';
import InfoCard from './info-card';

const WeCare = () => {
  return (
    <div className="w-3/5  lg:flex lg:justify-around">
      <div className="left-item lg:h-92 flex flex-col justify-between ">
        <InfoCard
          icon={<GlobeLeaf />}
          title="Did you know?"
          description="The annual economic loss due to food waste in Ghana alone is 65 Million US Dollars "
        />
        <InfoCard
          icon={<RecycleIcon />}
          title="Did you know?"
          description="Women spend more than 90 hours annually shopping for their families. We want to save you that time."
        />
      </div>

      <div className="middle-item flex flex-col items-center justify-between lg:mt-40 lg:h-96">
        <div>
          <img
            src="https://res.cloudinary.com/dhmljeapc/image/upload/v1679309702/Duma/zerowaste_lrzq0w.png"
            alt=""
            width="200"
            className="hidden lg:block"
          />
        </div>
      </div>
      <div className="right-item lg:h-92 flex flex-col justify-between">
        <InfoCard
          icon={<HandLeaf />}
          title="Did you know?"
          description="50% of Ghana’s population experiences food insecurity. We are on a mission to curb wastage."
        />
        <InfoCard
          icon={<ChildEating />}
          title="Did you know?"
          description="The United Nations Sustainable Development Goal (SDG) No.12 aims to Ensure sustainable consumption and production patterns "
        />
      </div>
    </div>
  );
};

export default WeCare;
