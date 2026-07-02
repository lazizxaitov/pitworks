"use client";

import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { content, languages, type Locale } from "./site-data";

type SectionKey = keyof typeof content.en.sections;

function BrandMark() {
  return (
    <div className="flex items-center">
      <Image
        src="/pitworks-logo.png"
        alt="Pitworks logo"
        width={360}
        height={155}
        priority
        className="h-auto w-[140px] select-none object-contain sm:w-[160px]"
      />
    </div>
  );
}

function SectionBox({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <section className="relative mt-8 overflow-hidden rounded-none border border-white/14 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.05))] px-6 py-6 backdrop-blur-[30px] md:px-10 md:py-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(182,115,34,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(125,211,252,0.1),transparent_28%)]" />
      <div className="relative space-y-8">
        <div className="space-y-3">
          <p className="text-sm font-bold uppercase tracking-[0.34em] text-[#f6c37b]">{title}</p>
          <p className="max-w-3xl text-lg leading-8 text-white/75">{intro}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

function NavLink({
  href,
  children,
  active,
}: {
  href: string;
  children: ReactNode;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`rounded-none px-3 py-1.5 transition ${
        active ? "bg-white/12 text-white" : "text-white/80 hover:bg-white/10 hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}

export default function SectionPage({ section }: { section: SectionKey }) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return "ru";
    }

    const stored = window.localStorage.getItem("pitworks-locale");
    return stored && stored in content ? (stored as Locale) : "ru";
  });
  const copy = content[locale];
  const page = copy.sections[section];
  const activePath = `/${section}`;

  useEffect(() => {
    window.localStorage.setItem("pitworks-locale", locale);
  }, [locale]);

  const backgroundStyle: CSSProperties = {
    background:
      "radial-gradient(circle at top left, rgba(255,255,255,0.12), transparent 35%), radial-gradient(circle at right, rgba(182,115,34,0.14), transparent 30%), linear-gradient(180deg, rgba(5,8,22,0.96), rgba(5,8,22,0.98))",
  };

  const sections = {
    about: copy.sections.about.cards,
    projects: copy.sections.projects.items,
    locations: copy.sections.locations.items,
    team: copy.sections.team.items,
    contacts: copy.sections.contacts.details,
  } as const;

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#050816] text-white" style={backgroundStyle}>
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_32%),radial-gradient(circle_at_20%_20%,rgba(182,115,34,0.08),transparent_26%),radial-gradient(circle_at_80%_65%,rgba(125,211,252,0.06),transparent_28%)]" />
        <div className="absolute inset-0 opacity-[0.16] bg-[linear-gradient(135deg,transparent_0_46%,rgba(255,255,255,0.06)_46%_47%,transparent_47%_100%),linear-gradient(45deg,transparent_0_46%,rgba(182,115,34,0.08)_46%_47%,transparent_47%_100%)] bg-[size:140px_140px]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_180px),repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0_1px,transparent_1px_180px)]" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-16 pt-4 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-20 rounded-none border border-white/14 bg-white/10 px-4 py-4 shadow-[0_24px_80px_rgba(0,0,0,0.26)] backdrop-blur-[28px]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <Link href="/" className="inline-flex w-fit">
              <BrandMark />
            </Link>
            <nav className="flex flex-wrap items-center gap-2 text-sm text-white/80">
              {copy.nav.map((item) => (
                <NavLink key={item.href} href={item.href} active={item.href === activePath}>
                  {item.label}
                </NavLink>
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

        <section className="relative mt-8 overflow-hidden rounded-none border border-white/14 bg-[linear-gradient(135deg,rgba(14,20,38,0.88),rgba(255,255,255,0.08),rgba(14,20,38,0.84))] px-6 py-8 shadow-[0_32px_120px_rgba(0,0,0,0.35)] backdrop-blur-[30px] md:px-10 md:py-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(182,115,34,0.2),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(125,211,252,0.12),transparent_28%),radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_42%)]" />
          <div className="relative grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <div className="inline-flex rounded-none border border-[#b67322]/30 bg-[#b67322]/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-[#f6c37b]">
                {page.title}
              </div>
              <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
                {page.title}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/70">{page.intro}</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="rounded-none bg-[#b67322] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#d08a31]"
                >
                  {locale === "ru" ? "На главную" : locale === "uz" ? "Bosh sahifa" : "Home"}
                </Link>
                <Link
                  href="/contacts"
                  className="rounded-none border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  {locale === "ru" ? "Связаться" : locale === "uz" ? "Bog‘lanish" : "Get in Touch"}
                </Link>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
              {copy.hero.stats.map((stat) => (
                <div key={stat.label} className="rounded-none border border-white/12 bg-white/10 p-5">
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="mt-1 text-sm text-white/65">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionBox title={page.title} intro={page.intro}>
          {section === "about" && (
            <div className="grid gap-4 md:grid-cols-2">
              {sections.about.map((card) => (
                <article
                  key={card.title}
                  className="rounded-none border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.05))] p-6"
                >
                  <div className="text-sm font-bold uppercase tracking-[0.24em] text-[#b67322]">
                    {card.title}
                  </div>
                  <p className="mt-4 leading-7 text-white/70">{card.text}</p>
                </article>
              ))}
            </div>
          )}

          {section === "projects" && (
            <div className="grid gap-4 lg:grid-cols-3">
              {sections.projects.map((item) => (
                <article
                  key={item.title}
                  className="rounded-none border border-white/12 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_42%),linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.045))] p-6 backdrop-blur-[24px]"
                >
                  <div className="text-sm uppercase tracking-[0.24em] text-[#f6c37b]">{item.title}</div>
                  <p className="mt-4 leading-7 text-white/70">{item.description}</p>
                </article>
              ))}
            </div>
          )}

          {section === "locations" && (
            <div className="grid gap-4 md:grid-cols-3">
              {sections.locations.map((item) => (
                <article
                  key={item.city}
                  className="rounded-none border border-white/12 bg-white/8 p-6 backdrop-blur-[26px]"
                >
                  <div className="text-sm uppercase tracking-[0.24em] text-[#b67322]">{item.city}</div>
                  <p className="mt-4 leading-7 text-white/70">{item.description}</p>
                </article>
              ))}
            </div>
          )}

          {section === "team" && (
            <div className="grid gap-4 lg:grid-cols-3">
              {sections.team.map((item) => (
                <article
                  key={item.role}
                  className="rounded-none border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.04))] p-6"
                >
                  <div className="text-sm uppercase tracking-[0.24em] text-[#f6c37b]">{item.role}</div>
                  <p className="mt-4 leading-7 text-white/70">{item.description}</p>
                </article>
              ))}
            </div>
          )}

          {section === "contacts" && (
            <div className="grid gap-4 sm:grid-cols-2">
              {sections.contacts.map((item) => (
                <div key={item.label} className="rounded-none border border-white/12 bg-white/14 p-5 backdrop-blur-[26px]">
                  <div className="text-xs uppercase tracking-[0.24em] text-white/70">{item.label}</div>
                  <div className="mt-2 text-lg font-semibold">{item.value}</div>
                </div>
              ))}
            </div>
          )}
        </SectionBox>
      </div>
    </main>
  );
}
