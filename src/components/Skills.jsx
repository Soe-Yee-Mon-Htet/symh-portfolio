import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="bg-surface-light/50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-center text-3xl font-bold sm:text-4xl">
          Skills &amp; Tools
        </h2>
        <div className="mx-auto mb-12 mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent" />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {skillsData.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group flex flex-col items-center gap-3 rounded-xl border border-text-muted/10 bg-surface p-5 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
              >
                <div className="rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
                  <Icon size={24} />
                </div>
                <span className="text-sm font-medium text-text-muted transition-colors group-hover:text-text">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
