export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-[#c8b89a] py-14 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Contact */}
          <div>
            <h4 className="font-cormorant text-xs tracking-[0.3em] uppercase text-white mb-5">Contact Us</h4>
            <div className="flex flex-col gap-2">
              <p className="font-inter text-xs text-[#a89880]">hello@morta.com</p>
              <p className="font-inter text-xs text-[#a89880]">+1 (555) 123-4567</p>
              <p className="font-inter text-xs text-[#a89880] leading-relaxed mt-1">
                123 Fragrance Lane, Los Angeles<br />CA 90001, United States
              </p>
            </div>
          </div>

          {/* Policy */}
          <div>
            <h4 className="font-cormorant text-xs tracking-[0.3em] uppercase text-white mb-5">Policy</h4>
            <div className="flex flex-col gap-2">
              {["Shipping & Delivery", "Returns", "Privacy Policy", "Terms of Service"].map(l => (
                <a key={l} href="#" className="font-inter text-xs text-[#a89880] hover:text-white transition-colors">{l}</a>
              ))}
            </div>
          </div>

          {/* Follow */}
          <div>
            <h4 className="font-cormorant text-xs tracking-[0.3em] uppercase text-white mb-5">Follow Us</h4>
            <div className="flex items-center gap-4 mt-1">
              {/* Instagram */}
              <a href="#" className="text-[#a89880] hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" className="text-[#a89880] hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              {/* X/Twitter */}
              <a href="#" className="text-[#a89880] hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* Pinterest */}
              <a href="#" className="text-[#a89880] hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.852 0 1.265.64 1.265 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.476 1.806 1.772 0 3.137-1.867 3.137-4.563 0-2.387-1.716-4.054-4.165-4.054-2.837 0-4.502 2.128-4.502 4.328 0 .856.33 1.774.741 2.274a.3.3 0 0 1 .069.286c-.075.314-.243.995-.277 1.134-.044.183-.146.222-.337.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className="text-[#a89880] hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2e2e2e] pt-6 flex items-center justify-between">
          <p className="font-inter text-[10px] text-[#666] tracking-wider">© 2024 MORTA. All rights reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-8 h-8 border border-[#444] flex items-center justify-center hover:border-[#c8b89a] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c8b89a" strokeWidth="1.5">
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
