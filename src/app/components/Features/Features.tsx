import React from "react"
import SectionHeading from "../SectionHeading/SectionHeading"
import FeatureCard from "./FeatureCard";


const Features = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
        <SectionHeading headingMini= "Ideal solutions for you" headingPrimary= "Explor ultimate features"/>

        <div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[1.4rem]">
            <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
                <FeatureCard title="Email Subscription" image="/images/Icon1.webp" />
            </div>
            <div data-aos="zoom-in" data-aos-delay="200" data-aos-anchor-placement="top-center">
                <FeatureCard title="Email Subscription" image="/images/Icon2.webp" />
            </div>
            <div data-aos="zoom-in" data-aos-delay="400" data-aos-anchor-placement="top-center">
                <FeatureCard title="Email Subscription" image="/images/Icon3.webp" />
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" data-aos-anchor-placement="top-center">
                <FeatureCard title="Email Subscription" image="/images/Icon4.webp" />
            </div>
            <div data-aos="zoom-in" data-aos-delay="800" data-aos-anchor-placement="top-center">
                <FeatureCard title="Email Subscription" image="/images/Icon5.webp" />
            </div>
            <div data-aos="zoom-in" data-aos-delay="1000" data-aos-anchor-placement="top-center">
                <FeatureCard title="Email Subscription" image="/images/Icon3.webp" />
            </div>
        </div>
    </div>
  );
};

export default Features;