# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 개발 명령어

```bash
npm run dev      # Turbopack 개발 서버 시작
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버 시작
npm run lint     # ESLint 실행
```

테스트 프레임워크 없음. 브라우저 자동화는 `.mcp.json`에 구성된 Playwright MCP 서버 사용.

## 아키텍처 개요

**Next.js 15 App Router** 기반 프론트엔드 전용 스타터킷. 백엔드/API 라우트/인증/DB 없음.

**핵심 스택:**
- React 19 + TypeScript (strict)
- TailwindCSS v4 (CSS-first, `tailwind.config` 없음 — `globals.css`의 `@theme inline` 블록에서 모든 토큰 정의)
- shadcn/ui (스타일: "new-york", 기본 색상: neutral) + Radix UI primitives
- next-themes (light/dark/system), lucide-react (아이콘)

**디렉토리 구조:**
- `app/` — 레이아웃, 페이지, 전역 CSS (`globals.css`)
- `components/ui/` — shadcn/ui 컴포넌트 (CVA + Radix, CLI로 생성)
- `components/landing/` — Hero, Features, CTA 섹션
- `components/layout/` — Header, Footer, Sidebar, MobileNav
- `components/theme-provider.tsx`, `theme-toggle.tsx` — next-themes 래퍼
- `hooks/use-mobile.ts` — 768px 브레이크포인트 (matchMedia, SSR 안전)
- `lib/utils.ts` — `cn()` (clsx + tailwind-merge)

## 주요 패턴

**서버 vs 클라이언트 컴포넌트:** `app/` 내 페이지·레이아웃은 서버 컴포넌트. 인터랙션이 필요한 컴포넌트만 `"use client"` 추가 (ThemeProvider, ThemeToggle, MobileNav, CtaSection, Sidebar).

**TailwindCSS v4:**
- `tailwind.config` 파일 없음 — 모든 커스텀 토큰은 `app/globals.css`의 `@theme inline` 블록에 CSS 변수로 정의
- 다크 모드: `@custom-variant dark (&:is(.dark *))` 패턴, `.dark` 클래스 기반
- 색상은 OKLch 색공간 사용. 반경 스케일은 `--radius: 0.625rem` 기준 오프셋 계산
- shadcn 색상 변수(`--background`, `--foreground`, `--primary` 등)는 `:root`와 `.dark` 블록 양쪽에 정의됨

**컴포넌트 추가:** shadcn/ui 컴포넌트는 `npx shadcn@latest add <component>`로 추가. 설정은 `components.json` 참조.

**asChild 패턴:** Button 등 UI 컴포넌트는 `asChild` prop으로 Next.js `<Link>`와 합성 가능.

**경로 별칭:** `@/*`는 프로젝트 루트를 가리킴 (`tsconfig.json`).

**폰트:** Geist Sans + Geist Mono (`--font-geist-sans`, `--font-geist-mono` CSS 변수로 주입).
