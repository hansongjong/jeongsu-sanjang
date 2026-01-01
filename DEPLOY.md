# 정수산장 홈페이지 배포 정보

## Cloudflare Pages 배포 정보

| 항목 | 값 |
|------|-----|
| **프로젝트명** | jeongsu-sanjang |
| **Account ID** | 2d2d412262fa63c0c327c0352f25f60c |
| **API Token** | 8h_7WcCsNz86FRcvYYOOsLY9FlM6Ib85A7zfori5 |
| **Pages URL** | https://jeongsu-sanjang.pages.dev |
| **Production Branch** | master |

## 배포 명령어

```bash
# 빌드
npm run build

# 배포
CLOUDFLARE_API_TOKEN=8h_7WcCsNz86FRcvYYOOsLY9FlM6Ib85A7zfori5 \
CLOUDFLARE_ACCOUNT_ID=2d2d412262fa63c0c327c0352f25f60c \
npx wrangler pages deploy out --project-name jeongsu-sanjang
```

## GitHub 정보

| 항목 | 값 |
|------|-----|
| **레포지토리** | https://github.com/hansongjong/jeongsu-sanjang |
| **브랜치** | master |

## 커스텀 도메인 설정 (선택)

Cloudflare Dashboard → Pages → jeongsu-sanjang → Custom domains에서:
- `jeongsu-sanjang.tgsystem.kr` 추가 가능

## 페이지 구성

| 한국어 | 영어 |
|--------|------|
| `/` | `/en` |
| `/menu` | `/en/menu` |
| `/about` | `/en/about` |
| `/reviews` | `/en/reviews` |
| `/visit` | `/en/visit` |
