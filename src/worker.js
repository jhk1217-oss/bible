// 구글 사이트 소유권 확인 파일은 리다이렉트 없이 정확한 경로에서 200을 줘야 한다.
// 에셋 레이어의 .html 정규화(307)를 우회하기 위해 이 경로만 워커가 직접 응답한다.
// 보안: 등록된 토큰만 허용 — 임의 google*.html에 응답하면 제3자가 소유권을 주장할 수 있다.
const GOOGLE_VERIFICATIONS = new Set([
  "google8b658b74694c11d8.html",
  "google23303cb205b68b12.html",
]);

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const name = url.pathname.slice(1);
    if (GOOGLE_VERIFICATIONS.has(name)) {
      return new Response(`google-site-verification: ${name}`, {
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
    return env.ASSETS.fetch(request);
  },
};
