import { faker } from '@faker-js/faker';

export type IconType = {
    text: string
}

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
  