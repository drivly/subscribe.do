export const api = {
  icon: '💸',
  name: 'subscribe.do',
  description: 'Dynamic Subscription Service Stripe Checkout and Customer Portal',
  url: 'https://subscribe.do/api',
  type: 'https://apis.do/subscriptions',
  endpoints: {
    subscribe: 'https://subscribe.do/subscribe',
    subscribePlan: 'https://subscribe.do/subscribe/:plan',
    account: 'https://subscribe.do/account',
  },
  site: 'https://subscribe.do',
  login: 'https://subscribe.do/login',
  signup: 'https://subscribe.do/signup',
  subscribe: 'https://subscribe.do/subscribe',
  repo: 'https://github.com/drivly/subscribe.do',
}

export default {
  fetch: async (req, env) => {
    const { user, origin, requestId, method, body, time, pathSegments, pathOptions, url, query } = await env.CTX.fetch(req).then(res => res.json())
    if (!user.profile) return Response.redirect(origin + '/login')

    return new Response(JSON.stringify({ api, user }, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
  },
}
