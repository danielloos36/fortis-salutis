export default function AnnouncementBar() {
  return (
    <a
      href="tel:+4915773327200"
      className="fixed top-0 left-0 right-0 z-[60] h-8 bg-wine text-white flex items-center justify-center gap-1.5 px-4 text-[11px] font-bold tracking-wide hover:bg-wine-dark transition-colors"
    >
      <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span className="truncate min-w-0">Kurze Wartezeiten</span>
      <span className="hidden sm:inline">· Termin meist in 1–2 Wochen</span>
      <span className="hidden md:inline underline underline-offset-2">Jetzt anrufen</span>
    </a>
  )
}
