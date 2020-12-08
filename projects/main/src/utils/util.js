export function genActiveRule (routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix)
}
