import { ArrowRight } from 'lucide-react';
import { heroData } from '../data/portfolioData';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center"
    >
      {/* Background: grid pattern */}
      <div className="absolute inset-0 -z-20 bg-grid" />

      {/* Background: decorative orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-orb-float absolute -top-40 right-[-10%] h-[500px] w-[500px] rounded-full bg-primary/15 blur-[120px]" />
        <div className="animate-orb-float-reverse absolute top-1/2 left-[-5%] h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px]" />
        <div className="animate-orb-float absolute -bottom-40 right-[20%] h-[350px] w-[350px] rounded-full bg-primary/8 blur-[90px]" />
      </div>

      {/* Greeting */}
      <p className="animate-fade-in-up mb-3 text-sm font-medium tracking-wide text-text-muted sm:text-base">
        {heroData.greeting}
      </p>

      {/* Name heading */}
      <h1 className="animate-fade-in-up animate-delay-100 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
        <span className="gradient-text">{heroData.name}</span>
      </h1>

      {/* Role / title */}
      <p className="animate-fade-in-up animate-delay-200 mt-4 max-w-xl text-lg font-semibold text-text sm:text-xl lg:text-2xl">
        {heroData.title}
      </p>

      {/* Subtitle / tagline */}
      <p className="animate-fade-in-up animate-delay-300 mt-4 max-w-lg text-text-muted leading-relaxed sm:text-lg">
        {heroData.subtitle}
      </p>

      {/* Status badge */}
      <div className="animate-fade-in-up animate-delay-400 mt-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </span>
        <span className="text-sm font-medium text-text-muted">
          {heroData.statusText}
        </span>
      </div>

      {/* CTA buttons */}
      <div className="animate-fade-in-up animate-delay-500 mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href={heroData.ctaPrimary.href}
          className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5"
        >
          {heroData.ctaPrimary.label}
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </a>
        <a
          href={heroData.ctaSecondary.href}
          className="group inline-flex items-center gap-2 rounded-xl border border-text-muted/30 px-6 py-3 font-semibold text-text transition-all hover:border-primary hover:text-primary hover:-translate-y-0.5"
        >
          {heroData.ctaSecondary.label}
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </a>
      </div>

      {/* Scroll indicator — pill mouse design */}
      <a
        href="#about"
        className="animate-fade-in-up animate-delay-600 mt-20 flex flex-col items-center gap-2 text-text-muted transition-colors hover:text-primary"
        aria-label="Scroll to about section"
      >
        <span className="text-xs font-medium uppercase tracking-widest">
          Scroll
        </span>
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-current p-1">
          <div className="h-2 w-2 rounded-full bg-current animate-scroll-dot" />
        </div>
      </a>
    </section>
  );
}
