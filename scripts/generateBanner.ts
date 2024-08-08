import { faker } from '@faker-js/faker';

const generateBannerData = () => {
    return {
        img: faker.image.url({width:2000}),
    };
  };
  
export const generateBanner = () => {
    return generateBannerData();
  };
  
