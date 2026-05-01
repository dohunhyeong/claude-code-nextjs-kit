# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 개발 명령어

```bash
npm run dev      # Turbopack 개발 서버 시작
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버 시작
npm run lint     # ESLint 실행
```

## 아키텍처 개요

**Next.js 15 App Router** 기반 프론트엔드 전용 스타터킷. 백엔드/API 라우트/인증/DB 없음.

**핵심 스택:**
- React 19 + TypeScript (strict)
- TailwindCSS v4 (CSS-first, `tailwind.config` 없음 — `globals.css`의 `@theme` 블록에서 모든 토큰 정의)
- shadcn/ui (스타일: "new-york", 기본 색상: neutral) + Radix UI primitives
- next-themes (light/dark/system)

**디렉토리 구조:**
- `app/` — 레이아웃, 페이지, 전역 CSS
- `components/ui/` — shadcn/ui 컴포넌트 (CVA + Radix)
- `components/landing/` — Hero, Features, CTA 섹션
- `components/layout/` — Header, Footer, Sidebar
- `hooks/` — `useIsMobile` (768px 브레이크포인트)
- `lib/utils.ts` — `cn()` (clsx + tailwind-merge)

## 주요 패턴

**서버 vs 클라이언트 컴포넌트:** `app/` 내 페이지·레이아웃은 서버 컴포넌트. 인터랙션이 필요한 컴포넌트만 `"use client"` 추가 (theme-provider, theme-toggle, cta-section, sidebar).

**TailwindCSS v4:** `globals.css`의 `@theme` 블록에서 CSS 변수로 색상 토큰 정의. `.dark` 클래스 기반 다크 모드. shadcn 색상 변수(`--background`, `--foreground`, `--primary` 등) 활용.

**컴포넌트 추가:** shadcn/ui 컴포넌트는 `npx shadcn@latest add <component>`로 추가. 설정은 `components.json` 참조.

**경로 별칭:** `@/*`는 프로젝트 루트를 가리킴 (`tsconfig.json`).
