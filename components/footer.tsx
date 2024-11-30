import Link from "next/link";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-gray-600">
              Vaš zaupanja vreden partner za tisk na majice in tekstil.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Izdelki</h3>
            <ul className="space-y-2">
              <li><Link href="/izdelki/majice" className="text-sm text-gray-600 hover:text-primary">Majice</Link></li>
              <li><Link href="/izdelki/majice-s-kratkimi-rokavi" className="text-sm text-gray-600 hover:text-primary">Majice s kratkimi rokavi</Link></li>
              <li><Link href="/izdelki/majice-z-dolgimi-rokavi" className="text-sm text-gray-600 hover:text-primary">Majice z dolgimi rokavi</Link></li>
              <li><Link href="/izdelki/sportne-majice" className="text-sm text-gray-600 hover:text-primary">Športne majice</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Podpora</h3>
            <ul className="space-y-2">
              <li><Link href="/pogosta-vprasanja" className="text-sm text-gray-600 hover:text-primary">Pogosta vprašanja</Link></li>
              <li><Link href="/blog" className="text-sm text-gray-600 hover:text-primary">Blog</Link></li>
              <li><Link href="/o-nas" className="text-sm text-gray-600 hover:text-primary">O nas</Link></li>
              <li><Link href="/mnenja" className="text-sm text-gray-600 hover:text-primary">Mnenja strank</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">info@tisknamajice.com</li>
              <li className="text-sm text-gray-600">031/474-107</li>
              <li className="text-sm text-gray-600">
                Pečarovci 82<br />
                9202 Mačkovci<br />
                Slovenija
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} TiskNaMajice.com. Vse pravice pridržane.</p>
        </div>
      </div>
    </footer>
  );
}