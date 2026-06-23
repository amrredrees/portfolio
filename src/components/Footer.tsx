export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-5 text-sm text-slate-500 md:flex-row">
        <p>© {new Date().getFullYear()} Amr Edrees. All rights reserved.</p>
        <p>Performance Marketing • Funnels • Tracking • Growth</p>
      </div>
    </footer>
  );
}
