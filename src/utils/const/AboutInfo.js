import {
  YiiSvg,
  JsSvg,
  ReactSvg,
  NodeSvg,
  SawSvg,
  GuitarSvg,
  SportSvg,
} from '../../components/__Partials/SvgImage/SvgImage';

const AboutInfo = {
  name: 'Zakharov Sergey',
  status: 'Я занимаюсь frontend-разработкой',
  otherStatus: 'Помимо разработки, я занимаюсь музыкой, играю на гитаре, пишу музыку и песни. Также я занимаюсь столярным искусством и мастерю из дерева.',
  technologies: [
    {
      img: JsSvg,
      text: 'JS',
    },
    {
      img: NodeSvg,
      text: 'NodeJS',
    },
    {
      img: ReactSvg,
      text: 'React',
    },
    {
      img: YiiSvg,
      text: 'Yii2',
    },
  ],
  interests: [
    {
      img: SawSvg,
      text: 'Столярное дело',
    },
    {
      img: GuitarSvg,
      text: 'Музыка',
    },
    {
      img: SportSvg,
      text: 'Спорт',
    },
  ],
};

export default AboutInfo;
