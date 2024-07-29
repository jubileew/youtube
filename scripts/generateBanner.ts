import { faker } from '@faker-js/faker';

export type BannerType = {
    img: string,
}

const generateBannerData = () => {
    return {
        img: faker.image.url({width:2000}),
    };
  };
  
export const generateBanner = () => {
    return generateBannerData();
  };
  
