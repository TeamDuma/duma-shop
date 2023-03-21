import Banner from '@/components/banners/banner';
import PromotionSliders from '@/components/promotions/promotions';
import Categories from '@/components/categories/categories';
import { Element } from 'react-scroll';
import FilterBar from './filter-bar';
import ProductGridHome from '@/components/products/grids/home';
import type { HomePageProps } from '@/types';
import HowItWorksCards from '../about/how-it-works-card';
import WeCare from '../landing/wecare';
import ShopCard from '../ui/cards/shop';
import shop from '../ui/cards/shop';
import ReviewsCarousel from '../landing/reviews';
import reviews from '../landing/reviews';
import ShopCarousel from '../landing/shops';
import { FlashIcon, GlobeLeaf } from '../icons';
import { ChevronRight } from '../icons/chevron-right';
import CountdownTimer from '@/components/countdown/counter';

export default function ClassicLayout({ variables }: HomePageProps) {
  const shops = [
    {
      id: 1,
      imageUrl:
        'https://res.cloudinary.com/ddtoofsjj/image/upload/v1679006057/Duma/Group_505_qozuzp.png',
    },
    {
      id: 2,
      imageUrl:
        'https://res.cloudinary.com/ddtoofsjj/image/upload/v1679006057/Duma/Group_503_pc4vje.png',
    },
    {
      id: 3,
      imageUrl:
        'https://res.cloudinary.com/ddtoofsjj/image/upload/v1679006057/Duma/Group_505_qozuzp.png',
    },
    {
      id: 4,
      imageUrl:
        'https://res.cloudinary.com/ddtoofsjj/image/upload/v1679006057/Duma/Group_503_pc4vje.png',
    },
    {
      id: 5,
      imageUrl:
        'https://res.cloudinary.com/ddtoofsjj/image/upload/v1679006057/Duma/Group_505_qozuzp.png',
    },
    {
      id: 6,
      imageUrl:
        'https://res.cloudinary.com/ddtoofsjj/image/upload/v1679006057/Duma/Group_503_pc4vje.png',
    },
    {
      id: 6,
      imageUrl:
        'https://res.cloudinary.com/ddtoofsjj/image/upload/v1679006057/Duma/Group_503_pc4vje.png',
    },
  ];

  const reviews = [
    {
      id: 1,
      author: 'John Doe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      rating: 4,
    },
    {
      id: 2,
      author: 'Jane Smith',
      text: 'Pellentesque euismod ipsum id odio ultricies, a malesuada lorem pharetra.',
      rating: 5,
    },
    {
      id: 3,
      author: 'Bob Johnson',
      text: 'Sed auctor sapien non diam semper, non ornare nulla varius.',
      rating: 3,
    },
    {
      id: 4,
      author: 'Bob Johnson',
      text: 'Sed auctor sapien non diam semper, non ornare nulla varius.',
      rating: 3,
    },
    {
      id: 5,
      author: 'Bob Johnson',
      text: 'Sed auctor sapien non diam semper, non ornare nulla varius.',
      rating: 3,
    },
    {
      id: 6,
      author: 'Bob Johnson',
      text: 'Sed auctor sapien non diam semper, non ornare nulla varius.',
      rating: 3,
    },
  ];
  const startTime = new Date('2023-03-13T08:00:00');
  const endTime = new Date('2023-03-18T12:30:00');

  const handleTimerComplete = () => {
    console.log('Timer completed!');
  };

  return (
    <div>
      <Banner layout="classic" variables={variables.types} />
      {/* <PromotionSliders variables={variables.types} /> */}
      <FilterBar variables={variables.categories} />
      <header className="mb-8 text-center">
        <h1 className="mt-24 text-xl font-bold md:text-2xl xl:text-3xl">
          Today&apos;s Crazy Deals
        </h1>
      </header>
      <div className="container flex w-full items-center justify-between rounded-xl bg-dumaorange py-2 px-4 lg:mx-12">
        <div className="left-items flex items-center">
          <FlashIcon />
          <p className="ml-2 text-xl font-bold text-white">Flash Sales</p>
        </div>
        <div className="middle-items flex items-center self-center text-xl font-bold text-white">
          <p className=" font-bold text-white">Time left:</p>
          <CountdownTimer
            startTime={startTime}
            endTime={endTime}
            onTimerComplete={handleTimerComplete}
          />
        </div>
        <div className="right-items flex ">
          <h1 className=" mr-3 font-bold text-white">See All</h1>
          <ChevronRight stroke="white" strokeWidth={3} width={15} />
        </div>
      </div>
      <Element
        name="grid"
        className="flex border-t border-solid border-border-200 border-opacity-70"
      >
        {/* <Categories layout="classic" variables={variables.categories} /> */}
        <ProductGridHome
          className="px-4 pb-8 lg:p-8"
          variables={variables.products}
        />
      </Element>

      <div className="lg:px-22 lg:mt-12">
        <header className="mb-8 text-center">
          <h1 className="text-xl font-bold md:text-2xl xl:text-3xl">
            How it works
          </h1>
          <HowItWorksCards
            rightImg
            imgUrl="https://res.cloudinary.com/dhmljeapc/image/upload/v1678376990/samples/Duma%20Website/Mask_group_ant7t0.png"
            imgWidth={271.9}
            imgHeight={250}
            stepText="Step 1"
            titleText="Browser through our amazing listings"
            descriptionText={` Getting started is as easy as entering your name and email
                address, then verifying your identity on the platform.\n
                As a registered investor, you can scan through all the
                campaigns on our system and invest in any of your choice.
                Learn more about verifying your identity and how we secure
                sensitive information.`}
          />
          <HowItWorksCards
            leftImg
            imgUrl="https://res.cloudinary.com/dhmljeapc/image/upload/v1679391083/Duma/shopping_oj0mem.png"
            imgWidth={234.4}
            imgHeight={250}
            stepText="Step 2"
            titleText="Verify your purchase and pay"
            descriptionText={` After you have finished selecting your products, check your cart to make sure you have collected all you need.

                You will then be prompted to pay using your preferred payment method.`}
          />
          <HowItWorksCards
            rightImg
            imgUrl="https://res.cloudinary.com/dhmljeapc/image/upload/v1679391083/Duma/delivery_fysu3l.png"
            imgWidth={271.9}
            imgHeight={250}
            stepText="Step 3"
            titleText="Choose your delivery option"
            descriptionText={` We aim to connect you to shops nearest to you, so you have the option of using our courier partner, or passing by the shop and collecting your shopping within the same day you purchase.`}
          />
        </header>
      </div>
      <div className="flex w-full justify-center my-10">
        <img
          alt="promo barner"
          src="https://res.cloudinary.com/dhmljeapc/image/upload/v1679338832/Duma/deals_barner_bnqzsq.png"
        />
      </div>

      <Element
        name="grid"
        className="flex border-t border-solid border-border-200 border-opacity-70"
      >
        {/* <Categories layout="classic" variables={variables.categories} /> */}
        <ProductGridHome
          className="px-4 pb-8 lg:p-8"
          variables={variables.products}
        />
      </Element>

      <header className="mb-8 text-center">
        <h1 className="mt-8 text-xl font-bold md:text-2xl xl:text-3xl">
          Featured Shops
        </h1>
      </header>
      <ShopCarousel shops={shops} />

      <header className="mb-8 text-center">
        <h1 className="mt-8 text-xl font-bold md:text-2xl xl:text-3xl">
          What People are Saying{' '}
        </h1>
      </header>

      <ReviewsCarousel reviews={reviews} />

      <header className="mb-8 text-center">
        <h1 className="mt-8 text-xl font-bold md:text-2xl xl:text-3xl">
          We Care
        </h1>
      </header>
      <div
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <WeCare />
      </div>
    </div>
  );
}
