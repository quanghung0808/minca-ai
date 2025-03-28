import { sampleActivities } from '@/constant/dummy';
import { Activity } from '@/types/activity';
import { getRandomInt } from '@/utils/getRandomInt';

export const fetchActivities = async (): Promise<Activity[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomCount = getRandomInt(2, 5);

      const shuffledActivities = [...sampleActivities];
      for (let i = shuffledActivities.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledActivities[i], shuffledActivities[j]] = [
          shuffledActivities[j],
          shuffledActivities[i],
        ];
      }

      const randomActivities = shuffledActivities.slice(0, randomCount);
      resolve(randomActivities);
    }, 1000);
  });
};
