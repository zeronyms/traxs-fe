import { Button } from "@/components/ui/button";
import { ScanQrCode } from "lucide-react";
import Link from "next/link";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/60 border-b border-slate-200">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ScanQrCode className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold tracking-tighter text-slate-950">
            Traxs<span className="text-blue-600">.</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          <a href="#features" className="hover:text-blue-600 transition-colors">
            Fitur
          </a>
          <a
            href="#how-it-works"
            className="hover:text-blue-600 transition-colors"
          >
            Cara Kerja
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors">
            Gabung Agen
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="font-semibold text-blue-600 hover:text-blue-700 hover:bg-blue-50"
          >
            <Link href="/login">Login</Link>
          </Button>
          <Button
            size="sm"
            className="bg-blue-600 hover:bg-blue-700 rounded-full px-5 shadow-sm"
          >
            <Link href="/register">Register</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
