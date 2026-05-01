import { Zap, Palette, Shield, Layers, Code2, Moon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Next.js 15 + Turbopack",
    description: "Turbopack 기반의 초고속 개발 서버, React 19, App Router 완전 지원",
  },
  {
    icon: Palette,
    title: "TailwindCSS v4",
    description: "CSS-first 설정, OKLCH 색상, @theme 디렉티브 — 설정 파일 불필요",
  },
  {
    icon: Layers,
    title: "shadcn/ui 컴포넌트",
    description: "Radix UI 기반의 접근성 높은 60개 이상의 컴포넌트 즉시 사용 가능",
  },
  {
    icon: Moon,
    title: "다크 모드",
    description: "next-themes를 활용한 깜빡임 없는 다크/라이트/시스템 테마 전환",
  },
  {
    icon: Shield,
    title: "TypeScript Strict",
    description: "엄격한 TypeScript 설정, 경로 별칭, 타입 안전한 설정 파일",
  },
  {
    icon: Code2,
    title: "즉시 확장 가능",
    description: "헤더, 푸터, 사이드바, 랜딩 페이지 섹션이 포함되어 바로 사용 가능",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-muted/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
            모든 것이 포함되어 있습니다
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            현대적인 도구들이 이미 연결되어 바로 사용 가능한 프로덕션 수준의 스타터 킷
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="border-border bg-card">
              <CardHeader>
                <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="size-5 text-primary" />
                </div>
                <CardTitle className="text-lg">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <CardContent />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
