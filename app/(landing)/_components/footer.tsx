import { ScanQrCode } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white mt-10">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-4 gap-12 text-sm text-slate-600">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <ScanQrCode className="h-7 w-7 text-blue-600" />
            <span className="text-xl font-bold tracking-tighter text-slate-950">
              Traxs<span className="text-blue-600">.</span>
            </span>
          </div>
          <p>&copy; 2024 PT Traxs Teknologi Logistik. Hak Cipta Dilindungi.</p>
        </div>
        <div className="space-y-3">
          <h5 className="font-semibold text-slate-900">Perusahaan</h5>
          <a href="#" className="block hover:text-blue-600">
            Tentang Kami
          </a>
          <a href="#" className="block hover:text-blue-600">
            Karir
          </a>
          <a href="#" className="block hover:text-blue-600">
            Kontak
          </a>
        </div>
        <div className="space-y-3">
          <h5 className="font-semibold text-slate-900">Legal</h5>
          <a href="#" className="block hover:text-blue-600">
            Kebijakan Privasi
          </a>
          <a href="#" className="block hover:text-blue-600">
            Syarat & Ketentuan
          </a>
        </div>
        <div className="space-y-3">
          <h5 className="font-semibold text-slate-900">Dukungan</h5>
          <a href="#" className="block hover:text-blue-600">
            Pusat Bantuan
          </a>
          <a href="#" className="block hover:text-blue-600">
            Dokumentasi API
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
