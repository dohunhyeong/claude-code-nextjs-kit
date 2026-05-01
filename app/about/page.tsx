import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "소개",
};

const stack = [
  { name: "Next.js 15", desc: "App Router · React Server Components · Turbopack" },
  { name: "React 19", desc: "최신 React 런타임, 서버 액션 지원" },
  { name: "TailwindCSS v4", desc: "CSS-first 설정, @theme 블록으로 토큰 정의" },
  { name: "shadcn/ui", desc: "New York 스타일, Radix UI primitives 기반" },
  { name: "TypeScript", desc: "strict 모드, 경로 별칭 @/* 설정" },
  { name: "next-themes", desc: "light / dark / system 다크모드 지원" },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 max-w-3xl">
      <Badge variant="outline" className="mb-4">소개</Badge>
      <h1 className="text-4xl font-bold tracking-tight mb-4">이 스타터킷에 대해</h1>
      <p className="text-lg text-muted-foreground mb-12">
        프로덕션 수준의 Next.js 앱을 빠르게 시작할 수 있도록 설계된 최신 스택 기반 스타터킷입니다.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">기술 스택</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {stack.map(({ name, desc }) => (
            <Card key={name}>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">설계 원칙</h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary font-bold shrink-0">→</span>
                백엔드·API 라우트·인증·DB 없이 프론트엔드에 집중
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold shrink-0">→</span>
                서버 컴포넌트 우선, 인터랙션이 필요한 경우에만 클라이언트 컴포넌트 사용
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold shrink-0">→</span>
                TailwindCSS v4의 CSS-first 패턴으로 디자인 토큰 관리
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold shrink-0">→</span>
                shadcn/ui 컴포넌트를 직접 소유하여 자유롭게 커스터마이즈 가능
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
