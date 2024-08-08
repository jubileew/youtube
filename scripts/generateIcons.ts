import { IconType } from '@/app/schemas/icons';
import { faker } from '@faker-js/faker';

const generateIconData = () => {
    return {
      text: faker.lorem.word()
    };
  };
  
export const generateIcons = (num = 10) => {
    const icons: IconType[] = [];
    for (let i = 0; i < num; i++) {
      icons.push(generateIconData());
    }
    return icons;
  };
  