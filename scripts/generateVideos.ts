import { VideoType } from '@/app/schemas/videos';
import { faker } from '@faker-js/faker';

const generateVideoData = () => {
    return {
        thumbnail: faker.image.url({height:150, width:250}),
        title: faker.music.songName(),
        channelName: faker.internet.userName(),
        channelAvatar: faker.image.avatar(),
        views: faker.number.int({min:1, max:20000000}),
    };
  };
  
export const generateVideos = (num = 10) => {
    const videos: VideoType[] = [];
    for (let i = 0; i < num; i++) {
      videos.push(generateVideoData());
    }
    return videos;
  };
  
