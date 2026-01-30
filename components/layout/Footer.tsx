import { siteConfig } from "@/lib/metadata";

export default function Footer() {
  return (
    <footer className="border-t mt-24">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          {/* Left */}
          <p>
            © {new Date().getFullYear()} {siteConfig.name}
          </p>

          {/* Right */}
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/ptnque/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              Instagram
            </a>
            <a
              href="https://github.com/NguyetQue1211"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              GitHub
            </a>
            <a
              href="laura.phan.work@gmail.com"
              className="hover:text-black transition"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
