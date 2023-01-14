# cloudflare-pages-etude

~Minimal repro for a question in Discord.~
Solved and see cloudflare/cloudflare-docs#7240.

This repository showcases a tiny example of Hono-powered Cloudflare Pages Functions without [Module Worker syntax](https://developers.cloudflare.com/pages/platform/functions/advanced-mode/) a.k.a. `_worker.js`.

## Why Hono, instead of filesystem-based routing?

Filesystem-based routing is not type-safe.

```ts
// functions/api/user/[userId].ts
export const onRequest: PagesFunction = ({ params }) => {
  // typos cannot be caught
  const { user_id } = params;
  // inferred to be string | string[] although we know that
  // the path parameter is not [[userId]]
  const { userId } = params;
  return new Response("Greeting from Function!");
};
```

## Why `functions`, instead of `_worker.js`?

Using `functions` directory has some benefits, e.g., auto-configuration of [function invocation routes](https://developers.cloudflare.com/pages/platform/functions/routing/#function-invocation-routes).

## Development setup

```console
$ git clone https://github.com/yudai-nkt/cloudflare-pages-etude.git
$ cd cloudflare-pages-etude
$ npm ci
$ npm start
```

## License

MIT
