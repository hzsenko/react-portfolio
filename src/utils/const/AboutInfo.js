import image from '@assets/images/svg/about/superpower.svg';
import guitar from '@assets/images/svg/about/guitar.svg';

const AboutInfo = {
  name: 'Zakharov Sergey',
  status: 'Я занимаюсь frontend-разработкой',
  image,
  otherStatus: 'Помимо разработки, я занимаюсь музыкой, играю на гитаре, пишу музыку и песни. Также я занимаюсь столярным искусством и мастерю из дерева.',
  technologies: [
    {
      img: guitar,
      text: 'JS',
    },
    {
      img: guitar,
      text: 'NodeJS',
    },
    {
      img: guitar,
      text: 'React',
    },
    {
      img: guitar,
      text: 'Yii2',
    },
  ],
};

export default AboutInfo;
