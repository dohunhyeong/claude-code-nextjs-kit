"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function CtaSection() {
  const [copied, setCopied] = React.useState(false);
  const command = "git clone https://github.com/you/claude-nextjs-starterkit";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="mx-auto max-w-2xl text-center">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">지금 시작하세요</CardTitle>
            <CardDescription className="text-base">
              저장소를 클론하고, 의존성을 설치하면 바로 시작할 수 있습니다.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input
                readOnly
                value={command}
                className="font-mono text-sm bg-muted"
              />
              <Button variant="outline" size="icon" onClick={handleCopy}>
                {copied ? (
                  <Check className="size-4 text-green-500" />
                ) : (
                  <Copy className="size-4" />
                )}
              </Button>
            </div>
            <Button size="lg" className="w-full" asChild>
              <Link href="/docs">
                문서 읽기 <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
