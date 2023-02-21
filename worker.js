// 部署於 Cloudflare Worker 版本

export default {
  async fetch(request) {
    const ipv4Regex = /^::ffff:(\d+\.\d+\.\d+\.\d+)$/;

    async function handleRequest(request) {
      const ip = request.headers.get('x-forwarded-for') || request.headers.get('CF-Connecting-IP') || request.headers.get('X-Real-IP') || request.headers.get('X-Forwarded-For') || request.headers.get('X-Forwarded') || request.headers.get('Forwarded-For') || request.headers.get('Forwarded');
      const ipv4Match = ipv4Regex.exec(ip);
      const ipv4 = ipv4Match ? ipv4Match[1] : ip;
      return new Response(ipv4, { status: 200 });
    }

    return handleRequest(request);
  },
};
