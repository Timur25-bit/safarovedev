export function parseSegments(pathSegments: string[]) {
  const filterIndex = pathSegments.indexOf('filter')
  const applyIndex = pathSegments.indexOf('apply') < 0 ? pathSegments.length : pathSegments.indexOf('apply')

  return {
    subcategories: pathSegments.slice(0, filterIndex >= 0 ? filterIndex : undefined),
    filters: filterIndex >= 0 && applyIndex > filterIndex
      ? pathSegments.slice(filterIndex + 1, applyIndex)
      : [],
    apply: applyIndex >= 0
  }
}