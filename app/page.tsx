"use client";

import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import { useEffect, useState } from "react";

type Locale = "en" | "ru" | "uz";

type Translation = {
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

const content: Record<Locale, Translation> = {
  en: {
    nav: [
      { href: "#about", label: "About Us" },
      { href: "#projects", label: "Projects" },
      { href: "#locations", label: "Locations" },
      { href: "#team", label: "Team" },
      { href: "#contacts", label: "Contacts" },
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
      { href: "#about", label: "О нас" },
      { href: "#projects", label: "Проекты" },
      { href: "#locations", label: "Локации" },
      { href: "#team", label: "Команда" },
      { href: "#contacts", label: "Контакты" },
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
      { href: "#about", label: "Biz haqimizda" },
      { href: "#projects", label: "Loyihalar" },
      { href: "#locations", label: "Manzillar" },
      { href: "#team", label: "Jamoa" },
      { href: "#contacts", label: "Aloqa" },
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

const languages: Array<{ code: Locale; label: string }> = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "uz", label: "UZ" },
];

function BrandMark({ size = "sm" }: { size?: "sm" | "lg" }) {
  const compact = size === "sm";

  return (
    <div className="flex items-center">
      <Image
        src="/pitworks-logo.png"
        alt="Pitworks logo"
        width={compact ? 360 : 840}
        height={compact ? 155 : 360}
        priority
        className={`h-auto select-none object-contain ${
          compact ? "w-[140px] sm:w-[160px]" : "w-[320px] sm:w-[420px]"
        }`}
      />
    </div>
  );
}

function SectionHeading({
  title,
  intro,
  accent = false,
}: {
  title: string;
  intro: string;
  accent?: boolean;
}) {
  return (
    <div className="max-w-3xl space-y-3">
      <p
        className={`text-sm font-bold uppercase tracking-[0.34em] ${
          accent ? "text-[#ffe0b3]" : "text-[#f6c37b]"
        }`}
      >
        {title}
      </p>
      <p className={`text-lg leading-8 ${accent ? "text-white/90" : "text-white/70"}`}>
        {intro}
      </p>
    </div>
  );
}

function GlassSection({
  id,
  title,
  intro,
  children,
  tone = "default",
  depth = 0,
}: {
  id: string;
  title: string;
  intro: string;
  children: ReactNode;
  tone?: "default" | "mid" | "warm";
  depth?: number;
}) {
  const toneClass =
    tone === "mid"
      ? "bg-[linear-gradient(180deg,rgba(16,24,44,0.95),rgba(9,14,29,0.9))]"
      : tone === "warm"
        ? "bg-[linear-gradient(135deg,rgba(182,115,34,0.95),rgba(133,78,13,0.92))]"
        : "bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))]";

  const outerClass =
    tone === "warm"
      ? "border-white/12 shadow-[0_24px_80px_rgba(182,115,34,0.24)]"
      : "border-white/12 shadow-[0_24px_80px_rgba(0,0,0,0.24)]";

  return (
    <section
      id={id}
      className={`relative mt-8 overflow-hidden rounded-none border ${outerClass} ${toneClass} px-6 py-8 backdrop-blur-3xl md:px-10 md:py-10`}
      style={{ transform: `translate3d(0, ${depth}px, 0)` }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(182,115,34,0.12),transparent_30%)]" />
      <div className="relative">
        <SectionHeading title={title} intro={intro} accent={tone === "warm"} />
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("ru");
  const [scrollY, setScrollY] = useState(0);
  const [pointer, setPointer] = useState({ x: 50, y: 30 });
  const copy = content[locale];
  const dashboardCopy =
    locale === "ru"
      ? {
          snapshot: "Профиль компании",
          facts: "Ключевые факты",
          industry: "Отрасль",
          size: "Размер компании",
          operating: "Производственный профиль",
          indicator: "Ответственная добыча",
          sizeValue: "501-1 000 сотрудников",
          chips: [
            "Добыча металлических руд",
            "Штаб-квартира в Зарафшане",
            "Основана в 2025",
          ],
          profileLines: ["Масштабные земляные работы", "Международные операции", "Устойчивое развитие"],
        }
      : locale === "uz"
        ? {
            snapshot: "Kompaniya profili",
            facts: "Asosiy ma'lumotlar",
            industry: "Sanoat",
            size: "Kompaniya hajmi",
            operating: "Faoliyat profili",
            indicator: "Mas'uliyatli qazib olish",
            sizeValue: "501-1 000 xodim",
            chips: [
              "Metall rudalarni qazib olish",
              "Zarafshon bosh ofisi",
              "2025-yilda tashkil etilgan",
            ],
            profileLines: ["Yirik yer ishlari", "Xalqaro operatsiyalar", "Barqaror rivojlanish"],
          }
        : {
            snapshot: "Company snapshot",
            facts: "Key facts",
            industry: "Industry",
            size: "Company size",
            operating: "Operating profile",
            indicator: "Responsible mining",
            sizeValue: "501-1,000 employees",
            chips: ["Metal ore mining", "Zarafshan HQ", "Founded 2025"],
            profileLines: ["Large-scale earthworks", "International operations", "Sustainable development"],
          };

  useEffect(() => {
    let raf = 0;

    const updateScroll = () => {
      cancelAnimationFrame(raf);
      raf = window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    const updatePointer = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      setPointer({ x, y });
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);
    window.addEventListener("pointermove", updatePointer, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
      window.removeEventListener("pointermove", updatePointer);
    };
  }, []);

  const orbitStyle = (factor: number): CSSProperties => ({
    transform: `translate3d(0, ${scrollY * factor}px, 0)`,
  });

  const heroStyle: CSSProperties = {
    transform: `translate3d(0, ${scrollY * -0.03}px, 0)`,
  };

  const sidePanelStyle: CSSProperties = {
    transform: `translate3d(0, ${scrollY * 0.02}px, 0)`,
  };

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_32%),radial-gradient(circle_at_20%_20%,rgba(182,115,34,0.08),transparent_26%),radial-gradient(circle_at_80%_65%,rgba(125,211,252,0.06),transparent_28%)]" />
        <div className="absolute inset-0 opacity-[0.16] bg-[linear-gradient(135deg,transparent_0_46%,rgba(255,255,255,0.06)_46%_47%,transparent_47%_100%),linear-gradient(45deg,transparent_0_46%,rgba(182,115,34,0.08)_46%_47%,transparent_47%_100%)] bg-[size:140px_140px]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_180px),repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0_1px,transparent_1px_180px)]" />
        <div className="absolute inset-x-0 top-[12%] h-[42rem] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.07),transparent_68%)] opacity-60" />
        <div
          className="absolute h-[34rem] w-[34rem] rounded-full bg-[#b67322]/18 blur-3xl transition-[transform,opacity] duration-300"
          style={{
            left: `${pointer.x}%`,
            top: `${pointer.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className="glass-float absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#b67322]/25 blur-3xl"
          style={orbitStyle(0.02)}
        />
        <div
          className="glass-drift absolute right-0 top-0 h-[32rem] w-[32rem] rounded-full bg-cyan-400/12 blur-3xl"
          style={orbitStyle(-0.015)}
        />
        <div
          className="glass-float absolute left-1/3 top-1/2 h-[24rem] w-[24rem] rounded-full bg-fuchsia-500/10 blur-3xl"
          style={orbitStyle(0.03)}
        />
        <div className="glass-shimmer absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-16 pt-4 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-20 rounded-none border border-white/14 bg-white/10 px-4 py-4 shadow-[0_24px_80px_rgba(0,0,0,0.26)] backdrop-blur-[28px]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <BrandMark size="sm" />
            <nav className="flex flex-wrap items-center gap-2 text-sm text-white/80">
              {copy.nav.map((item) => (
                <a
                  key={item.href}
                  className="rounded-none px-3 py-1.5 transition hover:bg-white/10 hover:text-white"
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2 rounded-none border border-white/10 bg-black/20 p-1">
              {languages.map((language) => (
                <button
                  key={language.code}
                  type="button"
                  onClick={() => setLocale(language.code)}
                  className={`rounded-none px-3 py-1.5 text-sm font-medium transition ${
                    locale === language.code
                      ? "bg-[#b67322] text-white"
                      : "text-white/75 hover:bg-white/10 hover:text-white"
                  }`}
                  aria-pressed={locale === language.code}
                >
                  {language.label}
                </button>
              ))}
            </div>
          </div>
        </header>

        <section
          className="relative mt-8 grid gap-8 overflow-hidden rounded-none border border-white/14 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.05))] px-6 py-6 shadow-[0_32px_120px_rgba(0,0,0,0.35)] backdrop-blur-[30px] md:grid-cols-[1.2fr_0.8fr] md:px-10 md:py-10"
          style={heroStyle}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(182,115,34,0.2),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(125,211,252,0.12),transparent_28%),radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_42%)]" />
          <div className="relative space-y-8">
            <div className="inline-flex rounded-none border border-[#b67322]/30 bg-[#b67322]/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-[#f6c37b]">
              {copy.hero.eyebrow}
            </div>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
                {copy.hero.title}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/70">{copy.hero.subtitle}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-none bg-[#b67322] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#d08a31]"
              >
                {copy.hero.primaryCta}
              </a>
              <a
                href="#contacts"
                className="rounded-none border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {copy.hero.secondaryCta}
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {copy.hero.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-none border border-white/12 bg-white/10 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-[26px]"
                >
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="mt-1 text-sm text-white/65">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative grid gap-4" style={sidePanelStyle}>
            <div className="rounded-none border border-white/14 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_42%),linear-gradient(135deg,rgba(255,255,255,0.14),rgba(255,255,255,0.06))] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.25)] backdrop-blur-[30px]">
              <div className="flex items-center justify-between">
                <div className="text-sm uppercase tracking-[0.26em] text-white/55">
                  {dashboardCopy.snapshot}
                </div>
                <div className="h-3 w-3 rounded-full bg-[#b67322] shadow-[0_0_20px_rgba(182,115,34,0.9)]" />
              </div>
              <div className="mt-6 space-y-4">
                <BrandMark size="lg" />
                <div className="rounded-none border border-white/12 bg-white/8 p-4">
                  <div className="text-sm uppercase tracking-[0.22em] text-white/50">
                    {dashboardCopy.facts}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {dashboardCopy.chips.map((chip) => (
                      <span key={chip} className="rounded-none bg-[#b67322] px-3 py-1 text-sm text-white">
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-none bg-[#0b1226] p-4">
                    <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/60">
                      {dashboardCopy.industry}
                    </div>
                    <div className="mt-2 text-lg font-semibold text-white">
                      {dashboardCopy.indicator}
                    </div>
                  </div>
                  <div className="rounded-none bg-[#111827] p-4">
                    <div className="text-xs uppercase tracking-[0.24em] text-[#f6c37b]">
                      {dashboardCopy.size}
                    </div>
                    <div className="mt-2 text-lg font-semibold text-white">
                      {dashboardCopy.sizeValue}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-none border border-white/12 bg-white/12 p-6 backdrop-blur-[30px]">
              <div className="text-sm uppercase tracking-[0.24em] text-white/50">
                {dashboardCopy.operating}
              </div>
              <div className="mt-4 grid gap-3 text-sm text-white/70">
                {dashboardCopy.profileLines.map((line) => (
                  <div key={line} className="rounded-none border border-white/10 bg-white/5 p-4">
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <GlassSection id="about" title={copy.sections.about.title} intro={copy.sections.about.intro}>
          <div className="grid gap-4 md:grid-cols-2">
            {copy.sections.about.cards.map((card) => (
              <article
                key={card.title}
                className="group rounded-none border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.05))] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#b67322]/40 hover:bg-white/12 hover:shadow-[0_18px_50px_rgba(182,115,34,0.12)]"
              >
                <div className="text-sm font-bold uppercase tracking-[0.24em] text-[#b67322]">
                  {card.title}
                </div>
                <p className="mt-4 leading-7 text-white/70">{card.text}</p>
              </article>
            ))}
          </div>
        </GlassSection>

        <GlassSection
          id="projects"
          title={copy.sections.projects.title}
          intro={copy.sections.projects.intro}
          tone="mid"
          depth={Math.min(scrollY * -0.008, 16)}
        >
          <div className="grid gap-4 lg:grid-cols-3">
            {copy.sections.projects.items.map((item) => (
              <article
                key={item.title}
                className="rounded-none border border-white/12 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_42%),linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.045))] p-6 backdrop-blur-[24px]"
              >
                <div className="text-sm uppercase tracking-[0.24em] text-[#f6c37b]">
                  {item.title}
                </div>
                <p className="mt-4 leading-7 text-white/70">{item.description}</p>
              </article>
            ))}
          </div>
        </GlassSection>

        <GlassSection
          id="locations"
          title={copy.sections.locations.title}
          intro={copy.sections.locations.intro}
          depth={Math.min(scrollY * -0.006, 12)}
        >
          <div className="grid gap-4 md:grid-cols-3">
            {copy.sections.locations.items.map((item) => (
              <article
                key={item.city}
                className="rounded-none border border-white/12 bg-white/8 p-6 backdrop-blur-[26px]"
              >
                <div className="text-sm uppercase tracking-[0.24em] text-[#b67322]">
                  {item.city}
                </div>
                <p className="mt-4 leading-7 text-white/70">{item.description}</p>
              </article>
            ))}
          </div>
        </GlassSection>

        <GlassSection
          id="team"
          title={copy.sections.team.title}
          intro={copy.sections.team.intro}
          tone="mid"
          depth={Math.min(scrollY * -0.008, 16)}
        >
          <div className="grid gap-4 lg:grid-cols-3">
            {copy.sections.team.items.map((item) => (
              <article
                key={item.role}
                className="rounded-none border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.04))] p-6"
              >
                <div className="text-sm uppercase tracking-[0.24em] text-[#f6c37b]">
                  {item.role}
                </div>
                <p className="mt-4 leading-7 text-white/70">{item.description}</p>
              </article>
            ))}
          </div>
        </GlassSection>

        <GlassSection
          id="contacts"
          title={copy.sections.contacts.title}
          intro={copy.sections.contacts.intro}
          tone="warm"
          depth={Math.min(scrollY * -0.004, 10)}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {copy.sections.contacts.details.map((item) => (
              <div
                key={item.label}
                className="rounded-none border border-white/12 bg-white/14 p-5 backdrop-blur-[26px]"
              >
                <div className="text-xs uppercase tracking-[0.24em] text-white/70">
                  {item.label}
                </div>
                <div className="mt-2 text-lg font-semibold">{item.value}</div>
              </div>
            ))}
          </div>
        </GlassSection>
      </div>
    </main>
  );
}
