import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <div className="container mx-auto px-4 md:px-6 text-center">
        <Badge variant="outline" className="mb-6 gap-1.5">
          <span className="size-2 rounded-full bg-green-500 animate-pulse" />
          TailwindCSS v4 지원
        </Badge>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
          최신 스택으로{" "}
          <span className="text-primary">빠르게 시작하세요</span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-10">
          Next.js 15 · TailwindCSS v4 · shadcn/ui · TypeScript · 다크 모드.
          프로덕션 수준의 앱을 위한 모든 것이 준비되어 있습니다.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/docs">
              시작하기 <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 size-4" /> GitHub에서 보기
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
