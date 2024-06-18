import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = [];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "A17 PRO Bionic chip.",
      "Первозданные возможности.",
      "Переломный чип.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Нержавеющая сталь.", "текстурированный. С стеклянным задним покрытием."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 14 Pro Max есть:",
      "Система профессиональной камеры.",
      "Управление. Фокус. Глубина съёмки.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["Совершенно новая кнопка Действия.", "Что сделает ваша?"],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 14 Pro Max in Purple",
    color: ["#330033", "#330066", "#9966cc"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 14 Pro Max in Black",
    color: ["#000000", "#000033", "#000000"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 14 Pro Max in White",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 14 Pro Max in Black",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];
