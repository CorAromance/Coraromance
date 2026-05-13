import creedaventus from "../assets/parfumes/creedaventus.jpeg";
import hommeintense from "../assets/parfumes/hommeintense.jpg";
import bleudechanel from "../assets/parfumes/bleudechanel.jpg";
import ombreleather from "../assets/parfumes/ombreleather.jpg";
import naxos from "../assets/parfumes/naxos.png";
import sideeffect from "../assets/parfumes/sideeffect.jpg";
import layton from "../assets/parfumes/layton.jpg";
import rouge540 from "../assets/parfumes/rouge540.jpg";
import delinaexclusif from "../assets/parfumes/delinaexclusif.jpg";
import cocomademoiselle from "../assets/parfumes/cocomademoiselle.jpg";
import libre from "../assets/parfumes/libre.jpg";
import blanche from "../assets/parfumes/blanche.jpg";
import lovedontbeshy from "../assets/parfumes/lovedontbeshy.jpg";
import atomicrose from "../assets/parfumes/atomicrose.jpg";
import angelsshare from "../assets/parfumes/angelsshare.jpg";
import erbapura from "../assets/parfumes/erbapura.jpg";
import oudforgreatness from "../assets/parfumes/oudforgreatness.jpg";
import gypsywater from "../assets/parfumes/gypsywater.jpeg";

export interface Perfume {
  brand: string;
  name: string;
  description: string;
  image: string;
  price: string;
  category: 'men' | 'women' | 'unisex';
  notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
}

export const perfumes: Perfume[] = [
  // Men's Fragrances
  {
    brand: "Creed",
    name: "Aventus",
    description: "Легендарный фруктово-древесный аромат. Воплощение силы, успеха и уверенности.",
    image: creedaventus,
    price: "₽32 000",
    category: "men",
    notes: {
      top: ["Ананас", "Чёрная смородина", "Яблоко", "Бергамот"],
      middle: ["Роза", "Сухая берёза", "Марокканский жасмин", "Пачули"],
      base: ["Дубовый мох", "Мускус", "Амбергрис", "Ваниль"]
    }
  },
  {
    brand: "Dior",
    name: "Homme Intense",
    description: "Утончённая древесно-цветочная композиция. Элегантность и мужественность в едином аккорде.",
    image: hommeintense,
    price: "₽9 500",
    category: "men",
    notes: {
      top: ["Лаванда", "Бергамот", "Шалфей"],
      middle: ["Ирис", "Пион", "Амбретта"],
      base: ["Кедр", "Ветивер", "Кожа"]
    }
  },
  {
    brand: "Chanel",
    name: "Bleu de Chanel",
    description: "Древесно-ароматический парфюм нового поколения. Свобода выбора и решительность.",
    image: bleudechanel,
    price: "₽10 800",
    category: "men",
    notes: {
      top: ["Лимон", "Мята", "Розовый перец", "Грейпфрут"],
      middle: ["Имбирь", "Жасмин", "Мускатный орех"],
      base: ["Ладан", "Ветивер", "Кедр", "Сандал"]
    }
  },
  {
    brand: "Tom Ford",
    name: "Ombre Leather",
    description: "Чувственный кожаный аромат. Воплощение пустыни на закате и безграничной свободы.",
    image: ombreleather,
    price: "₽27 500",
    category: "men",
    notes: {
      top: ["Кардамон"],
      middle: ["Кожа", "Жасмин самбак"],
      base: ["Пачули", "Амбер", "Мох"]
    }
  },
  {
    brand: "Xerjoff",
    name: "Naxos",
    description: "Восточно-древесная композиция с медовыми и табачными нотами. Тёплая роскошь.",
    image: naxos,
    price: "₽37 000",
    category: "men",
    notes: {
      top: ["Лаванда", "Бергамот", "Лимон"],
      middle: ["Мёд", "Корица", "Кашмеран"],
      base: ["Табак", "Ваниль", "Сандал"]
    }
  },
  {
    brand: "Initio",
    name: "Side Effect",
    description: "Интенсивная табачно-ванильная композиция. Опьяняющий и чувственный.",
    image: sideeffect,
    price: "₽32 500",
    category: "men",
    notes: {
      top: ["Ром", "Корица"],
      middle: ["Табак", "Ваниль"],
      base: ["Сандал", "Гедион"]
    }
  },
  {
    brand: "Parfums de Marly",
    name: "Layton",
    description: "Восточно-цветочная композиция с яблоком и ванилью. Аристократическая роскошь.",
    image: layton,
    price: "₽28 000",
    category: "men",
    notes: {
      top: ["Яблоко", "Лаванда", "Мандарин", "Бергамот"],
      middle: ["Герань", "Жасмин", "Фиалка"],
      base: ["Ваниль", "Кардамон", "Сандал", "Пачули"]
    }
  },

  // Women's Fragrances
  {
    brand: "Maison Francis Kurkdjian",
    name: "Baccarat Rouge 540",
    description: "Легендарный янтарно-цветочный аромат. Невесомый, сияющий и неповторимый.",
    image: rouge540,
    price: "₽25 500",
    category: "women",
    notes: {
      top: ["Шафран", "Жасмин"],
      middle: ["Амбревуд", "Амбергрис"],
      base: ["Пихтовая смола", "Кедр"]
    }
  },
  {
    brand: "Parfums de Marly",
    name: "Delina Exclusif",
    description: "Роскошная цветочно-фруктовая композиция. Элегантность и чувственность.",
    image: delinaexclusif,
    price: "₽33 000",
    category: "women",
    notes: {
      top: ["Личи", "Мускатный орех", "Ревень"],
      middle: ["Турецкая роза", "Пион", "Гелиотроп"],
      base: ["Ваниль", "Кашемировое дерево", "Мускус"]
    }
  },
  {
    brand: "Chanel",
    name: "Coco Mademoiselle",
    description: "Современный восточный аромат. Свежий, изысканный и дерзкий.",
    image: cocomademoiselle,
    price: "₽11 500",
    category: "women",
    notes: {
      top: ["Апельсин", "Мандарин", "Бергамот"],
      middle: ["Роза", "Жасмин", "Личи"],
      base: ["Пачули", "Ваниль", "Белый мускус"]
    }
  },
  {
    brand: "Yves Saint Laurent",
    name: "Libre",
    description: "Цветочный фужерный аромат. Свобода, сила и женственность.",
    image: libre,
    price: "₽9 800",
    category: "women",
    notes: {
      top: ["Мандарин", "Лаванда", "Чёрная смородина"],
      middle: ["Апельсиновый цвет", "Жасмин"],
      base: ["Мускус", "Ваниль", "Амбер"]
    }
  },
  {
    brand: "Byredo",
    name: "Blanche",
    description: "Минималистичный белоцветочный аромат. Чистота и свежесть.",
    image: blanche,
    price: "₽19 500",
    category: "women",
    notes: {
      top: ["Альдегиды", "Розовый перец", "Белая роза"],
      middle: ["Пион", "Фиалка", "Нероли"],
      base: ["Сандал", "Мускус"]
    }
  },
  {
    brand: "Kilian",
    name: "Love, Don't Be Shy",
    description: "Сладкая цветочная композиция с маршмэллоу. Незабываемый и притягательный.",
    image: lovedontbeshy,
    price: "₽27 800",
    category: "women",
    notes: {
      top: ["Нероли"],
      middle: ["Роза", "Апельсиновый цвет"],
      base: ["Зефир", "Ваниль", "Мускус", "Ирис"]
    }
  },
  {
    brand: "Initio",
    name: "Atomic Rose",
    description: "Мощный розовый аромат с животными нотами. Провокационный и роскошный.",
    image: atomicrose,
    price: "₽31 000",
    category: "women",
    notes: {
      top: ["Розовый перец"],
      middle: ["Турецкая роза", "Египетский жасмин"],
      base: ["Гедион", "Амбергрис", "Мускус"]
    }
  },

  // Unisex Fragrances
  {
    brand: "Kilian",
    name: "Angels' Share",
    description: "Гурманский аромат с коньяком и ванилью. Роскошь и соблазн.",
    image: angelsshare,
    price: "₽28 500",
    category: "unisex",
    notes: {
      top: ["Коньяк", "Дубовая эссенция", "Корица"],
      middle: ["Тонка", "Пралине"],
      base: ["Ваниль", "Сандал"]
    }
  },
  {
    brand: "Xerjoff",
    name: "Erba Pura",
    description: "Фруктово-цитрусовый шедевр. Средиземноморская свежесть и роскошь.",
    image: erbapura,
    price: "₽36 000",
    category: "unisex",
    notes: {
      top: ["Сицилийский лимон", "Калабрийский бергамот", "Апельсин"],
      middle: ["Персик", "Фрукты"],
      base: ["Ваниль", "Белый мускус", "Амбер"]
    }
  },
  {
    brand: "Initio",
    name: "Oud for Greatness",
    description: "Мощный восточный аромат с удом. Величие и харизма.",
    image: oudforgreatness,
    price: "₽34 000",
    category: "unisex",
    notes: {
      top: ["Шафран", "Мускус"],
      middle: ["Лавандин", "Уд"],
      base: ["Пачули"]
    }
  },
  {
    brand: "Byredo",
    name: "Gypsy Water",
    description: "Свежий древесный аромат. Романтика цыганской свободы.",
    image: gypsywater,
    price: "₽19 800",
    category: "unisex",
    notes: {
      top: ["Бергамот", "Лимон", "Можжевельник", "Перец"],
      middle: ["Сосна", "Ладан"],
      base: ["Ваниль", "Сандал", "Амбер"]
    }
  }
];
