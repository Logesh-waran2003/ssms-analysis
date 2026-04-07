export default function Footer() {
  return (
    <footer className="bg-ink py-12 px-8">
      <div className="max-w-[1160px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-white/8">
          <div className="md:col-span-2">
            <img src="/images/logo.png" alt="SSMS" className="h-8 brightness-0 invert opacity-80 mb-3" />
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              A CBSE-affiliated school committed to merit, character, and holistic development. Part of the SSM Educational Trust, serving Chennai since 1985.
            </p>
            <p className="text-white/50 text-sm">📍 Mappedu Road, Alapakkam, New Perungalathur, Chennai – 600 063</p>
            <p className="text-white/50 text-sm">📞 044-45094270, 45094235</p>
            <p className="text-white/50 text-sm">✉️ adminssms.perungalathur@ssmetrust.in</p>
          </div>
          <div>
            <h4 className="text-white/50 text-xs font-semibold tracking-widest uppercase mb-4">Admissions</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#cta" className="text-white/65 hover:text-white transition-colors">Apply Online</a></li>
              <li><a href="#admissions" className="text-white/65 hover:text-white transition-colors">Admission Steps</a></li>
              <li><a href="#results" className="text-white/65 hover:text-white transition-colors">Board Results</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white/50 text-xs font-semibold tracking-widest uppercase mb-4">School</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#campus" className="text-white/65 hover:text-white transition-colors">About SSMS</a></li>
              <li><a href="#facilities" className="text-white/65 hover:text-white transition-colors">Facilities</a></li>
              <li><a href="https://school.ssms.edu.in/" target="_blank" className="text-white/65 hover:text-white transition-colors">Official Website</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-5 flex flex-wrap justify-between items-center text-xs text-white/40">
          <span>© 2026 Srimathi Sundaravalli Memorial School. All rights reserved.</span>
          <span className="bg-white/5 border border-white/8 rounded px-2.5 py-1 text-white/50">CBSE Affiliation No. 1930487</span>
        </div>
      </div>
    </footer>
  );
}
