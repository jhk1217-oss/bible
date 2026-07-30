# bible — 「매일 한 장의 말씀」 채널 사이트

유튜브 채널 [매일 한 장의 말씀 (@1189jang)](https://www.youtube.com/@1189jang)의
랜딩페이지·개인정보처리방침·이용약관을 Cloudflare Workers 정적 에셋으로 배포한다.

| 경로 | 내용 |
|---|---|
| `/` | 채널 소개 랜딩페이지 |
| `/privacy.html` | 개인정보처리방침 (YouTube API 심사용) |
| `/terms.html` | 이용약관 (YouTube API 심사용) |

## 배포

```bash
npx wrangler deploy        # wrangler.jsonc의 assets 설정으로 정적 배포
```

자동 배포를 원하면 Cloudflare 대시보드 → Workers & Pages → Create →
**Import a repository**로 이 저장소를 연결한다 (Build command 비움,
Deploy command `npx wrangler deploy`). 이후 main에 push할 때마다 자동 배포된다.
