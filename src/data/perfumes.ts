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
    image: "https://images.unsplash.com/photo-1698867928110-2408e8e2f44a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    price: "₽32 000",
    category: "men",
    notes: {
      верхние ноты: ["Ананас", "Чёрная смородина", "Яблоко", "Бергамот"],
      сердце аромата: ["Роза", "Сухая берёза", "Марокканский жасмин", "Пачули"],
      основные ноты: ["Дубовый мох", "Мускус", "Амбергрис", "Ваниль"]
    }
  },
  {
    brand: "Dior",
    name: "Homme Intense",
    description: "Утончённая древесно-цветочная композиция. Элегантность и мужественность в едином аккорде.",
    image: "https://images.unsplash.com/photo-1698877779289-d546e6376001?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
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
    image: "https://images.unsplash.com/photo-1721190171118-c5c0921ea6c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
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
    image: "https://images.unsplash.com/photo-1775210727378-7b0e9a50b660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
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
    image: "https://images.unsplash.com/photo-1769038933775-305885b212c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
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
    image: "https://images.unsplash.com/photo-1770301410072-f6ef6dad65b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
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
    image: "https://images.unsplash.com/photo-1698867928110-2408e8e2f44a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
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
    image: "https://images.unsplash.com/photo-1774280347934-9c74dff6ab2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
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
    image: "https://images.unsplash.com/photo-1621962728420-a7328f6ea8ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
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
    image: "https://images.unsplash.com/photo-1773527142304-58116364b8a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
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
    image: "https://images.unsplash.com/photo-1759793500112-c588839cfc6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
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
    image: "https://images.unsplash.com/photo-1774280347934-9c74dff6ab2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
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
    image: "https://images.unsplash.com/photo-1769038933775-305885b212c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
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
    image: "https://images.unsplash.com/photo-1621962728420-a7328f6ea8ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
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
    image: "https://images.unsplash.com/photo-1770301410072-f6ef6dad65b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
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
    image: "https://images.unsplash.com/photo-1775210727378-7b0e9a50b660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
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
    image: "https://images.unsplash.com/photo-1769038933775-305885b212c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
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
    image: "https://images.unsplash.com/photo-1773527142304-58116364b8a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    price: "₽19 800",
    category: "unisex",
    notes: {
      top: ["Бергамот", "Лимон", "Можжевельник", "Перец"],
      middle: ["Сосна", "Ладан"],
      base: ["Ваниль", "Сандал", "Амбер"]
    }
  },
  {
    brand: "Nishane",
    name: "Ani",
    description: "Восточно-ванильная композиция. Тёплая, чувственная и обволакивающая.",
    image: "https://images.unsplash.com/photo-1774280347934-9c74dff6ab2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    price: "₽24 000",
    category: "unisex",
    notes: {
      top: ["Бергамот", "Зелёные ноты", "Розовый перец", "Чёрная смородина"],
      middle: ["Турецкая роза", "Кардамон"],
      base: ["Ваниль", "Бензоин", "Сандал", "Кедр", "Пачули", "Мускус"]
    }
  }
];
