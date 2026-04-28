import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/918287008400?text=Hi%20TripZip%20Holidays%2C%20I%27d%20like%20a%20free%20quote%20for%20a%20trip."
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <span className="relative flex items-center gap-2 bg-[#25D366] text-white pl-3 pr-4 py-3 rounded-full shadow-elegant hover:scale-105 transition">
        <MessageCircle className="size-5" />
        <span className="hidden sm:inline text-sm font-semibold">Chat with us</span>
      </span>
    </a>
  );
}
