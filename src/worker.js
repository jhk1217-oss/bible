// 구글 사이트 소유권 확인 파일은 리다이렉트 없이 정확한 경로에서 200을 줘야 한다.
// 에셋 레이어의 .html 정규화(307)를 우회하기 위해 이 경로만 워커가 직접 응답한다.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/google8b658b74694c11d8.html") {
      return new Response("google-site-verification: google8b658b74694c11d8.html", {
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
    return env.ASSETS.fetch(request);
  },
};
