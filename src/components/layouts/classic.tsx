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
  ];

  const reviews = [
    {
      id: 1,
      imageUrl:
        'https://res.cloudinary.com/ddtoofsjj/image/upload/v1679304689/Group_12_zlejtf.png',
      author: 'John Doe',
      text: 'I bought for the first time short time ago. I love it ',
      time: '3 days',
      rating: 4,
    },
    {
      id: 2,
      imageUrl:
        'https://res.cloudinary.com/ddtoofsjj/image/upload/v1679304689/Group_12_zlejtf.png',
      author: 'Jane Smith',
      text: 'It is user friendly, quick and brought me a 30% discount on what I bought.',
      time: '15 days',
      rating: 5,
    },
    {
      id: 3,
      imageUrl:
        'https://res.cloudinary.com/ddtoofsjj/image/upload/v1679304689/Group_12_zlejtf.png',
      author: 'Bob Johnson',
      text: 'The quality and savings that that I received is Impressive.',
      time: '2 days',
      rating: 3,
    },
    {
      id: 4,
      imageUrl:
        'https://res.cloudinary.com/ddtoofsjj/image/upload/v1679304689/Group_12_zlejtf.png',
      author: 'Bob Johnson',
      text: 'saves you money and contributes to improving the food industry by reducing the amount of food waste.',
      time: '10 days',
      rating: 3,
    },
    {
      id: 5,
      imageUrl:
        'https://res.cloudinary.com/ddtoofsjj/image/upload/v1679304689/Group_12_zlejtf.png',
      author: 'Bob Johnson',
      text: 'I bought for the first time short time ago. I love it ',
      time: '7 days',
      rating: 3,
    },
    {
      id: 6,
      imageUrl:
        'https://res.cloudinary.com/ddtoofsjj/image/upload/v1679304689/Group_12_zlejtf.png',
      author: 'Bob Johnson',
      text: 'It is user friendly, quick and brought me a 30% discount on what I bought.',
      time: '10 days',
      rating: 3,
    },
  ];

  return (
    <>
      <Banner layout="classic" variables={variables.types} />
      {/* <PromotionSliders variables={variables.types} /> */}
      <FilterBar variables={variables.categories} />
      <header className="mb-8 text-center">
        <h1 className="mt-8 text-xl font-bold md:text-2xl xl:text-3xl">
          Today&apos;s Crazy Deals
        </h1>
      </header>

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

      <div className="lg:px-22">
        <header className="mb-8  text-center">
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
            imgUrl="https://res.cloudinary.com/ddtoofsjj/image/upload/v1679308091/Mask_group_k5y5jh.png"
            imgWidth={271.9}
            imgHeight={250}
            stepText="Step 2"
            titleText="Verify your purchase and pay"
            descriptionText={` After you have finished selecting your products, check your cart to make sure you have collected all you need.

                You will then be prompted to pay using your preferred payment method.`}
          />
          <HowItWorksCards
            rightImg
            imgUrl="https://res.cloudinary.com/ddtoofsjj/image/upload/v1679308223/Mask_group_1_mbo7c6.png"
            imgWidth={271.9}
            imgHeight={250}
            stepText="Step 3"
            titleText="Choose your delivery option"
            descriptionText={` We aim to connect you to shops nearest to you, so you have the option of using our courier partner, or passing by the shop and collecting your shopping within the same day you purchase.`}
          />
        </header>
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

      <WeCare
        imageUrl={
          'https://res.cloudinary.com/dhmljeapc/image/upload/v1678376990/samples/Duma%20Website/Mask_group_ant7t0.png'
        }
        text1={'Did you know?1'}
        text2={'Did you know?2'}
        text3={'Did you know?3'}
        text4={'Did you know4?'}
        text5={'Did you know5?'}
      ></WeCare>
    </>
  );
}
