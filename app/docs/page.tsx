import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "문서",
};

const steps = [
  {
    step: "1",
    title: "저장소 클론",
    code: "git clone https://github.com/you/claude-nextjs-starterkit",
  },
  {
    step: "2",
    title: "의존성 설치",
    code: "npm install",
  },
  {
    step: "3",
    title: "개발 서버 실행",
    code: "npm run dev",
  },
];

const structure = [
  { path: "app/", desc: "레이아웃, 페이지, 전역 CSS" },
  { path: "components/ui/", desc: "shadcn/ui 컴포넌트 (CVA + Radix)" },
  { path: "components/landing/", desc: "Hero, Features, CTA 섹션" },
  { path: "components/layout/", desc: "Header, Footer, Sidebar" },
  { path: "hooks/", desc: "useIsMobile (768px 브레이크포인트)" },
  { path: "lib/utils.ts", desc: "cn() 유틸리티 (clsx + tailwind-merge)" },
];

export default function DocsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 max-w-3xl">
      <Badge variant="outline" className="mb-4">문서</Badge>
      <h1 className="text-4xl font-bold tracking-tight mb-4">시작하기</h1>
      <p className="text-lg text-muted-foreground mb-12">
        Next.js 15 · TailwindCSS v4 · shadcn/ui 기반 스타터킷을 빠르게 설정하는 방법입니다.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">설치</h2>
        <div className="space-y-4">
          {steps.map(({ step, title, code }) => (
            <Card key={step}>
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-3">
                  <span className="flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    {step}
                  </span>
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="rounded-md bg-muted px-4 py-3 font-mono text-sm overflow-x-auto">
                  {code}
                </pre>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">프로젝트 구조</h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="space-y-3">
              {structure.map(({ path, desc }) => (
                <li key={path} className="flex items-start gap-3 text-sm">
                  <code className="shrink-0 rounded bg-muted px-2 py-0.5 font-mono text-xs">
                    {path}
                  </code>
                  <span className="text-muted-foreground">{desc}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
