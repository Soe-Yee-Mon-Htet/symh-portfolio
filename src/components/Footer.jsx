import { ArrowUp } from 'lucide-react';
import { footerData } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-text-muted/10 py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-text-muted">{footerData.copyright}</p>

        <a
          href="#hero"
          className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-text-muted transition-colors hover:bg-white/10 hover:text-primary"
        >
          <ArrowUp size={16} />
          Back to top
        </a>
      </div>
    </footer>
  );
}
