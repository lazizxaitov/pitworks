export type Locale = "en" | "ru" | "uz";

export type Translation = {
  nav: Array<{ href: string; label: string }>;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    stats: Array<{ value: string; label: string }>;
  };
  sections: {
    about: {
      title: string;
      intro: string;
      cards: Array<{ title: string; text: string }>;
    };
    projects: {
      title: string;
      intro: string;
      items: Array<{ title: string; description: string }>;
    };
    locations: {
      title: string;
      intro: string;
      items: Array<{ city: string; description: string }>;
    };
    team: {
      title: string;
      intro: string;
      items: Array<{ role: string; description: string }>;
    };
    contacts: {
      title: string;
      intro: string;
      details: Array<{ label: string; value: string }>;
    };
  };
};

export const content: Record<Locale, Translation> = {
  en: {
    nav: [
      { href: "/about", label: "About Us" },
      { href: "/projects", label: "Projects" },
      { href: "/locations", label: "Locations" },
      { href: "/team", label: "Team" },
      { href: "/contacts", label: "Contacts" },
    ],
    hero: {
      eyebrow: "Pitworks Mining Group",
      title: "Mining the future from Zarafshan, Navoiy.",
      subtitle:
        "An international mining company focused on responsible earthworks, high-potential metal deposits, and long-term value creation.",
      primaryCta: "Explore Projects",
      secondaryCta: "Get in Touch",
      stats: [
        { value: "501-1,000", label: "Company size" },
        { value: "50", label: "Connected members" },
        { value: "Zarafshan", label: "Headquarters" },
        { value: "2025", label: "Founded" },
      ],
    },
    sections: {
      about: {
        title: "Overview",
        intro:
          "Founded in 2025, Pitworks Mining Group is dedicated to executing large-scale earthworks for world-class mine development projects in Uzbekistan and surrounding territories.",
        cards: [
          {
            title: "Our Strengths",
            text:
              "Local respect, operational discipline, modern fleet capacity, and an experienced international team.",
          },
          {
            title: "Our Focus",
            text:
              "Zero harm, sustainable mining, know-how transfer, strategic growth, and a reputation built on results.",
          },
          {
            title: "Mining the future",
            text:
              "Large-scale earthworks for responsible extraction and mine development across Uzbekistan and neighboring territories.",
          },
          {
            title: "Company profile",
            text:
              "Metal ore mining. Headquarters in Zarafshan, Navoiy. 501-1,000 employees.",
          },
        ],
      },
      projects: {
        title: "Projects",
        intro:
          "Active mine sites, exploration programs, infrastructure upgrades, and sustainability initiatives.",
        items: [
          {
            title: "Ore Extraction Program",
            description:
              "A placeholder for open-pit or underground extraction with production capacity and safety metrics.",
          },
          {
            title: "Processing and Logistics",
            description:
              "A place for crushing, sorting, storage, transport, and supply chain coordination.",
          },
          {
            title: "Field Development",
            description:
              "Reserved for new site development, equipment deployment, and resource planning.",
          },
        ],
      },
      locations: {
        title: "Locations",
        intro:
          "Operating footprint, regional offices, and exploration blocks.",
        items: [
          { city: "Zarafshan", description: "Main mining base and operating area." },
          { city: "Navoiy", description: "Regional administrative and industrial context." },
          { city: "Uzbekistan", description: "National presence for future partnerships." },
        ],
      },
      team: {
        title: "Team",
        intro:
          "Leadership, engineering, geology, HSE, and operations.",
        items: [
          { role: "Executive Leadership", description: "Strategy, partnerships, and growth direction." },
          { role: "Operations", description: "Site execution, production planning, and coordination." },
          { role: "Technical Services", description: "Geology, maintenance, quality control, and reporting." },
        ],
      },
      contacts: {
        title: "Contacts",
        intro:
          "Ready for contact details, a lead form, or a map.",
        details: [
          { label: "Email", value: "info@pitworks.uz" },
          { label: "Phone", value: "+998 00 000 00 00" },
          { label: "Office", value: "Zarafshan, Navoiy Region, Uzbekistan" },
          { label: "Working hours", value: "Mon - Fri, 09:00 - 18:00" },
        ],
      },
    },
  },
  ru: {
    nav: [
      { href: "/about", label: "О нас" },
      { href: "/projects", label: "Проекты" },
      { href: "/locations", label: "Локации" },
      { href: "/team", label: "Команда" },
      { href: "/contacts", label: "Контакты" },
    ],
    hero: {
      eyebrow: "Pitworks Mining Group",
      title: "Добываем будущее в Зарафшане, Навои.",
      subtitle:
        "Международная компания, которая выполняет ответственные земляные работы и развивает перспективные месторождения металлических руд.",
      primaryCta: "Смотреть проекты",
      secondaryCta: "Связаться",
      stats: [
        { value: "501-1 000", label: "Размер компании" },
        { value: "50", label: "Связанных участников" },
        { value: "Зарафшан", label: "Штаб-квартира" },
        { value: "2025", label: "Основана" },
      ],
    },
    sections: {
      about: {
        title: "Overview",
        intro:
          "Основанная в 2025 году, Pitworks Mining Group занимается выполнением масштабных земляных работ для проектов мирового уровня по развитию месторождений в Узбекистане и соседних территориях.",
        cards: [
          {
            title: "Наши сильные стороны",
            text:
              "Уважение к местным сообществам, операционная дисциплина, современный парк техники и опытная международная команда.",
          },
          {
            title: "Наш фокус",
            text:
              "Нулевой травматизм, устойчивая добыча, передача опыта, стратегический рост и репутация, основанная на результате.",
          },
          {
            title: "Мы добываем будущее",
            text:
              "Масштабные земляные работы для ответственной добычи и развития месторождений в Узбекистане и соседних территориях.",
          },
          {
            title: "Профиль компании",
            text:
              "Добыча металлических руд. Штаб-квартира: Зарафшан, Навоий. 501-1 000 сотрудников.",
          },
        ],
      },
      projects: {
        title: "Проекты",
        intro:
          "Действующие карьеры, разведка, инфраструктура и инициативы по устойчивому развитию.",
        items: [
          {
            title: "Программа добычи руды",
            description:
              "Заглушка для открытой или подземной добычи с показателями мощности и безопасности.",
          },
          {
            title: "Переработка и логистика",
            description:
              "Блок для дробления, сортировки, хранения, перевозок и координации поставок.",
          },
          {
            title: "Развитие месторождений",
            description:
              "Место для новых площадок, запуска техники и ресурсного планирования.",
          },
        ],
      },
      locations: {
        title: "Локации",
        intro:
          "География компании, зоны деятельности и ключевые площадки.",
        items: [
          { city: "Зарафшан", description: "Основная производственная база и площадка." },
          { city: "Навои", description: "Региональный административный и промышленный центр." },
          { city: "Узбекистан", description: "Национальное присутствие для партнёрств." },
        ],
      },
      team: {
        title: "Команда",
        intro:
          "Руководство, инженеры, геологи, HSE и операционная команда.",
        items: [
          { role: "Руководство", description: "Стратегия, партнёрства и развитие." },
          { role: "Операции", description: "Работа площадок, планирование и координация." },
          { role: "Технический блок", description: "Геология, обслуживание и отчётность." },
        ],
      },
      contacts: {
        title: "Контакты",
        intro:
          "Готово для контактов, формы заявки или карты.",
        details: [
          { label: "Email", value: "info@pitworks.uz" },
          { label: "Phone", value: "+998 00 000 00 00" },
          { label: "Office", value: "Зарафшан, Навоийская область, Узбекистан" },
          { label: "Working hours", value: "Пн - Пт, 09:00 - 18:00" },
        ],
      },
    },
  },
  uz: {
    nav: [
      { href: "/about", label: "Biz haqimizda" },
      { href: "/projects", label: "Loyihalar" },
      { href: "/locations", label: "Manzillar" },
      { href: "/team", label: "Jamoa" },
      { href: "/contacts", label: "Aloqa" },
    ],
    hero: {
      eyebrow: "Pitworks Mining Group",
      title: "Kelajakni Zarafshon, Navoiydan qazib olamiz.",
      subtitle:
        "Mas’uliyatli yer ishlari va yuqori salohiyatli metall konlarini rivojlantirishga ixtisoslashgan xalqaro kompaniya.",
      primaryCta: "Loyihalarni ko‘rish",
      secondaryCta: "Bog‘lanish",
      stats: [
        { value: "501-1 000", label: "Kompaniya hajmi" },
        { value: "50", label: "Bog‘langan a’zolar" },
        { value: "Zarafshon", label: "Bosh ofis" },
        { value: "2025", label: "Tashkil etilgan" },
      ],
    },
    sections: {
      about: {
        title: "Umumiy ma'lumot",
        intro:
          "2025-yilda tashkil etilgan Pitworks Mining Group O‘zbekistonda va qo‘shni hududlarda jahon darajasidagi konlarni rivojlantirish loyihalari uchun yirik ko‘lamdagi yer ishlarini bajarishga bag‘ishlangan.",
        cards: [
          {
            title: "Bizning kuchli tomonlarimiz",
            text:
              "Mahalliy jamoalarga hurmat, operatsion intizom, zamonaviy texnika parki va tajribali xalqaro jamoa.",
          },
          {
            title: "Bizning fokus",
            text:
              "Nol zarar, barqaror konchilik, tajriba almashish, strategik o‘sish va kuchli obro‘.",
          },
          {
            title: "Biz kelajakni qazib olamiz",
            text:
              "O‘zbekistonda va yaqin hududlarda mas’uliyatli qazib olish va kon rivojlantirish uchun yirik yer ishlari.",
          },
          {
            title: "Kompaniya profili",
            text:
              "Metall rudalarni qazib olish. Bosh ofis: Zarafshon, Navoiy. 501-1 000 xodim.",
          },
        ],
      },
      projects: {
        title: "Loyihalar",
        intro:
          "Faol konlar, geologik qidiruv, infratuzilma va barqaror rivojlanish tashabbuslari.",
        items: [
          {
            title: "Ruda qazib olish",
            description:
              "Ochiq yoki yer osti qazib olish uchun quvvat va xavfsizlik ko‘rsatkichlari.",
          },
          {
            title: "Qayta ishlash va logistika",
            description:
              "Maydalash, saralash, saqlash, tashish va ta’minot zanjiri uchun joy.",
          },
          {
            title: "Kon hududini rivojlantirish",
            description:
              "Yangi maydonlar, texnika va resurslarni rejalashtirish uchun bo‘lim.",
          },
        ],
      },
      locations: {
        title: "Manzillar",
        intro:
          "Kompaniya geografiyasi, hududlar va asosiy maydonlar.",
        items: [
          { city: "Zarafshon", description: "Asosiy ishlab chiqarish bazasi va maydon." },
          { city: "Navoiy", description: "Hududiy ma’muriy va sanoat markazi." },
          { city: "O‘zbekiston", description: "Hamkorlik va kengayish uchun milliy qamrov." },
        ],
      },
      team: {
        title: "Jamoa",
        intro:
          "Rahbariyat, muhandislik, geologiya, HSE va operatsiyalar.",
        items: [
          { role: "Rahbariyat", description: "Strategiya, hamkorlik va rivojlanish." },
          { role: "Operatsiyalar", description: "Maydon ishlari, rejalashtirish va koordinatsiya." },
          { role: "Texnik xizmatlar", description: "Geologiya, ta’mirlash va hisobot." },
        ],
      },
      contacts: {
        title: "Aloqa",
        intro:
          "Aloqa ma’lumotlari, forma yoki xarita uchun tayyor.",
        details: [
          { label: "Email", value: "info@pitworks.uz" },
          { label: "Phone", value: "+998 00 000 00 00" },
          { label: "Office", value: "Zarafshon, Navoiy viloyati, O‘zbekiston" },
          { label: "Working hours", value: "Du - Ju, 09:00 - 18:00" },
        ],
      },
    },
  },
};

export const languages: Array<{ code: Locale; label: string }> = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "uz", label: "UZ" },
];
