import { aboutData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-center text-3xl font-bold sm:text-4xl">
          {aboutData.title}
        </h2>
        <div className="mx-auto mb-12 mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent" />

        <div className="space-y-5">
          {aboutData.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg leading-relaxed text-text-muted sm:text-xl"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
