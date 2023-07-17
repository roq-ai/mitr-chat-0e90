const mapping: Record<string, string> = {
  advertisements: 'advertisement',
  companies: 'company',
  contents: 'content',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
