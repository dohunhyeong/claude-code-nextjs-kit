import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "컴포넌트",
};

export default function ComponentsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 max-w-4xl">
      <Badge variant="outline" className="mb-4">컴포넌트</Badge>
      <h1 className="text-4xl font-bold tracking-tight mb-4">UI 컴포넌트</h1>
      <p className="text-lg text-muted-foreground mb-12">
        shadcn/ui 기반의 컴포넌트 목록입니다. 모두 TailwindCSS v4와 Radix UI로 구성됩니다.
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-semibold mb-4">Button</h2>
          <Card>
            <CardContent className="pt-6 flex flex-wrap gap-3">
              <Button>기본</Button>
              <Button variant="secondary">보조</Button>
              <Button variant="outline">외곽선</Button>
              <Button variant="ghost">고스트</Button>
              <Button variant="destructive">삭제</Button>
              <Button disabled>비활성</Button>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Badge</h2>
          <Card>
            <CardContent className="pt-6 flex flex-wrap gap-3">
              <Badge>기본</Badge>
              <Badge variant="secondary">보조</Badge>
              <Badge variant="outline">외곽선</Badge>
              <Badge variant="destructive">삭제</Badge>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Card</h2>
          <Card>
            <CardHeader>
              <CardTitle>카드 제목</CardTitle>
              <CardDescription>카드 설명 텍스트입니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">카드 본문 내용입니다.</p>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Input</h2>
          <Card>
            <CardContent className="pt-6 space-y-3 max-w-sm">
              <Input placeholder="텍스트를 입력하세요" />
              <Input placeholder="비활성 입력" disabled />
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Separator</h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <p className="text-sm text-muted-foreground">위 영역</p>
              <Separator />
              <p className="text-sm text-muted-foreground">아래 영역</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
