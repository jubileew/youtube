import { faker } from '@faker-js/faker';

export type ChannelType = {
    avatar: string,
    channelName: string
}

const generateChannelData = () => {
    return {
        avatar: faker.image.avatar(),
        channelName: faker.internet.userName(),
    };
  };
  
export const generateChannels = (num = 10) => {
    const videos: ChannelType[] = [];
    for (let i = 0; i < num; i++) {
      videos.push(generateChannelData());
    }
    return videos;
  };
  