import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const footerColumns = [
  {
    heading: "제품",
    links: ["기능", "가격", "변경 사항"],
  },
  {
    heading: "개발자",
    links: ["문서", "GitHub", "API"],
  },
  {
    heading: "회사",
    links: ["소개", "블로그", "문의"],
  },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="font-bold text-lg mb-2">StarterKit</p>
            <p className="text-sm text-muted-foreground">
              최신 기술 스택으로 만든 Next.js 스타터 킷
            </p>
          </div>
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <p className="font-semibold text-sm mb-3">{col.heading}</p>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l}>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator className="my-8" />
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} StarterKit. Next.js 15 &amp; shadcn/ui 기반
        </p>
      </div>
    </footer>
  );
}
