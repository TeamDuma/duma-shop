import Accordion from '@/components/ui/accordion';
import Image from 'next/image';
import { faq } from '@/framework/static/faq';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { GetStaticProps } from 'next';
import { getLayout } from '@/components/layouts/layout';
import Seo from '@/components/seo/seo';
import MissionCard from '@/components/about/mission-card';
import HowItWorksCards from '@/components/about/how-it-works-card';

export default function HelpPage() {
  const { t } = useTranslation();
  const leftImg = false;
  const rightImg = true;
  return (
    <>
      <Seo title="Help" url="help" />
      <section className="py-8 px-4 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20">
        <div className="">
          <div>
            
          </div>
          <header className="mb-8 text-center">
            <h1 className="text-xl font-bold md:text-2xl xl:text-3xl">
              What is Duma Deal Zone
            </h1>
          </header>
          <p className="text-center lg:px-40">
            Crowdfunding is a method of raising capital through the collective
            effort of friends, family, customers, and individual investors.
            Also, Crowdfunding is the practice of funding a project or venture
            by raising money from a large number of people, typically via the
            internet.
          </p>
          <div className="my-12 flex flex-col items-center justify-around lg:flex-row lg:px-20">
            <MissionCard
              imageUrl="https://res.cloudinary.com/dhmljeapc/image/upload/v1678372830/samples/Duma%20Website/white_rocket_qp9t4g.png"
              titleText="Mission"
              descriptionText="Crowdfunding is a method of raising capital through the collective effort of friends, family, customers, and individual investors. Also, Crowdfunding is the practice of funding a project or venture by raising money from a large number of people, typically via the internet."
              imageWidth={97.47}
              imageHeight={129}
            />
            <div className="w-0.5 bg-gray-300 lg:h-96" />

            <MissionCard
              imageUrl="https://res.cloudinary.com/dhmljeapc/image/upload/v1678372830/samples/Duma%20Website/lit_light_bulb_qomeog.png"
              titleText="Vision"
              descriptionText="Crowdfunding is a method of raising capital through the collective effort of friends, family, customers, and individual investors. Also, Crowdfunding is the practice of funding a project or venture by raising money from a large number of people, typically via the internet."
              imageWidth={89}
              imageHeight={129}
            />
          </div>
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
                stepText="Step 1"
                titleText="Browser through our amazing listings"
                descriptionText={` Getting started is as easy as entering your name and email
                address, then verifying your identity on the platform.\n
                As a registered investor, you can scan through all the
                campaigns on our system and invest in any of your choice.
                Learn more about verifying your identity and how we secure
                sensitive information.`}
              />
            </header>
          </div>
        </div>
        <header className="mb-8 text-center">
          <h1 className="text-xl font-bold md:text-2xl xl:text-3xl">
            {t('common:nav-menu-faq')}
          </h1>
        </header>
        <div className="mx-auto w-full max-w-screen-lg">
          <Accordion items={faq} translatorNS="faq" />
        </div>
      </section>
    </>
  );
}

HelpPage.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common', 'faq'])),
    },
  };
};
