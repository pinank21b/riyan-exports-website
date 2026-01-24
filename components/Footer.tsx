import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#eef4f1]">
      <div className="mx-auto max-w-7xl px-6 py-24">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

          {/* COMPANY INFO */}
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-5">
              Riyan Foods & Spices LLP
            </h3>
            <p className="text-[15px] leading-[1.7] text-neutral-700">
              A professionally managed Indian exporter of spices, grains,
              pulses, millets, and dehydrated food products supplying
              international markets with consistency and compliance.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-[15px] text-neutral-700">
              <li><Link href="/about" className="hover:text-brand-main transition">About Us</Link></li>
              <li><Link href="/products" className="hover:text-brand-main transition">Products</Link></li>
              <li><Link href="/quality" className="hover:text-brand-main transition">Quality</Link></li>
              <li><Link href="/logistics" className="hover:text-brand-main transition">Logistics</Link></li>
              <li><Link href="/contact" className="hover:text-brand-main transition">Contact</Link></li>
            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 mb-5">
              Export Categories
            </h4>
            <ul className="space-y-3 text-[15px] text-neutral-700">
              <li><Link href="/products/spices" className="hover:text-brand-main transition">Spices</Link></li>
              <li><Link href="/products/grains" className="hover:text-brand-main transition">Grains & Rice</Link></li>
              <li><Link href="/products/pulses" className="hover:text-brand-main transition">Pulses</Link></li>
              <li><Link href="/products/millets" className="hover:text-brand-main transition">Millets</Link></li>
              <li><Link href="/products/dehydrated" className="hover:text-brand-main transition">Dehydrated Products</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 mb-5">
              Contact
            </h4>
            <p className="text-[15px] leading-[1.7] text-neutral-700">
              India<br />
              <a href="mailto:sales@riyanexims.parvamsoftech.com" className="hover:text-brand-main transition">
                sales@riyanexims.parvamsoftech.com
              </a><br />
              <a href="tel:+917874574687" className="hover:text-brand-main transition">
                +91 78745 74687
              </a>
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-6 flex gap-5">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/riyan-foods-and-spices-llp-074103383?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" aria-label="LinkedIn" className="group">
                <svg
                  className="w-5 h-5 text-neutral-600 group-hover:text-brand-main transition"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.8-2.2 3.8-2.2 4.1 0 4.8 2.7 4.8 6.2V24h-4v-8.6c0-2-.1-4.6-2.8-4.6s-3.2 2.2-3.2 4.4V24h-4V8z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/riyan_exim?igsh=OWx5M3U0eDVwcjMy&utm_source=qr" aria-label="Instagram" className="group">
                <svg
                  className="w-5 h-5 text-neutral-600 group-hover:text-brand-main transition"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.5.7.3 1.3.7 1.8 1.2.5.5.9 1.1 1.2 1.8.2.5.4 1.3.5 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.5-.3.7-.7 1.3-1.2 1.8-.5.5-1.1.9-1.8 1.2-.5.2-1.3.4-2.5.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.5-.7-.3-1.3-.7-1.8-1.2-.5-.5-.9-1.1-1.2-1.8-.2-.5-.4-1.3-.5-2.5-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-2 .5-2.5.3-.7.7-1.3 1.2-1.8.5-.5 1.1-.9 1.8-1.2.5-.2 1.3-.4 2.5-.5 1.3-.1 1.7-.1 4.9-.1zm0 3.6a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.2a4 4 0 110-8 4 4 0 010 8zm6.4-10.8a1.4 1.4 0 11-2.8 0 1.4 1.4 0 012.8 0z"/>
                </svg>
              </a>

              
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-20 pt-8 border-t border-neutral-300 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-600">
            © {new Date().getFullYear()} Riyan Foods & Spices LLP. All rights reserved.
          </p>
          <p className="text-sm text-neutral-600">
            Design & Developed by <a href="https://parvamsoftech.com">PARVAM SOFTECH</a>
          </p>
        </div>

      </div>
    </footer>
  );
}
