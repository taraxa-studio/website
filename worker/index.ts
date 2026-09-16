/**
 * Edge entry for taraxa.studio. Sends www to the apex domain, then hands
 * every other request to the static assets built by Astro.
 */
interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.hostname === "www.taraxa.studio") {
      url.hostname = "taraxa.studio";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
