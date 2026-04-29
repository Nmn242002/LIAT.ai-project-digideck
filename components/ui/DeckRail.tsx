export default function DeckRail() {
  return (
    <aside className="pointer-events-none fixed bottom-8 left-6 z-40 hidden text-white/42 lg:block">
      <div className="flex h-[58vh] flex-col items-center justify-between">
        <p className="[writing-mode:vertical-rl] text-[10px] font-semibold uppercase tracking-[0.42em]">
          Dubai Mall Partner Presentation
        </p>
        <div className="h-24 w-px bg-gradient-to-b from-transparent via-gold/70 to-transparent" />
        <p className="[writing-mode:vertical-rl] text-[10px] uppercase tracking-[0.38em]">
          Scroll the deck
        </p>
      </div>
    </aside>
  );
}
