import Banner from '@/components/banners/banner';
import PromotionSliders from '@/components/promotions/promotions';
import Categories from '@/components/categories/categories';
import { Element } from 'react-scroll';
import FilterBar from './filter-bar';
import ProductGridHome from '@/components/products/grids/home';
import type { HomePageProps } from '@/types';
import HowItWorksCards from '../about/how-it-works-card';

export default function ClassicLayout({ variables }: HomePageProps) {
  return (
    <>
      <Banner layout="classic" variables={variables.types} />
      {/* <PromotionSliders variables={variables.types} /> */}
      <FilterBar variables={variables.categories} />
      <header className="mb-8 text-center">
              <h1 className="text-xl font-bold md:text-2xl xl:text-3xl mt-8">
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
                imgUrl="https://res.cloudinary.com/dhmljeapc/image/upload/v1678376990/samples/Duma%20Website/Mask_group_ant7t0.png"
                imgWidth={271.9}
                imgHeight={250}
                stepText="Step 2"
                titleText="Verify your purchase and pay"
                descriptionText={` After you have finished selecting your products, check your cart to make sure you have collected all you need.

                You will then be prompted to pay using your preferred payment method.`}
              />
                  <HowItWorksCards
                rightImg
                imgUrl="https://res.cloudinary.com/dhmljeapc/image/upload/v1678376990/samples/Duma%20Website/Mask_group_ant7t0.png"
                imgWidth={271.9}
                imgHeight={250}
                stepText="Step 3"
                titleText="Choose your delivery option"
                descriptionText={` We aim to connect you to shops nearest to you, so you have the option of using our courier partner, or passing by the shop and collecting your shopping within the same day you purchase.`}
              />
            </header>
          </div>
    </>
  );
}
