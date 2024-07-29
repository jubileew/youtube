import { faker } from '@faker-js/faker';

export type TagType = {
    text: string
}

const generateTagData = () => {
    return {
      text: faker.music.genre()
    };
  };
  
export const generateTags = (num = 10) => {
    const tags: TagType[] = [];
    for (let i = 0; i < num; i++) {
      tags.push(generateTagData());
    }
    return tags;
  };
  