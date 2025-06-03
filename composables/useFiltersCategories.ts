import { parseSegments } from '~/utils/parseParamsRoute'

export const useFilterCategories = () => {
  const route = useRoute();
  const router = useRouter();

  const paramsSubcategories = computed(() => route.params?.subcategory ?? [])

  const filters = computed({
    get() {
      return parseSegments(route.params?.subcategory as string[] || []).filters
    },
    async set(value) {
      const filterIndex = paramsSubcategories.value?.indexOf('filter')
      const resFilters = filterIndex >= 0
        ? [...paramsSubcategories.value.slice(0, filterIndex + 1), ...value]
        : [...paramsSubcategories.value, 'filter', ...value]
      await router.replace({
        name: 'catalog-category-subcategory',
        params: {
          subcategory: value.length ? resFilters : paramsSubcategories.value.slice(0, filterIndex)
        }
      })
    }
  })

  const fullPath = computed(() => route.fullPath)

  const subcategories = computed({
    get() {
      return parseSegments(route.params?.subcategory as string[] || []).subcategories
    },
    async set(value) {
      const filterIndex = paramsSubcategories.value?.indexOf('filter')
      const resFilter = filterIndex >= 0 ? paramsSubcategories.value.slice(filterIndex) : []

      await router.replace({
        name: 'catalog-category-subcategory',
        params: {
          subcategory: [...value, ...resFilter].filter(item => item !== 'apply')
        }
      })
    }
  })

  const onApply = async () => {
    const resParams = [...paramsSubcategories.value, 'apply']
    await router.replace({ params: { subcategory: resParams } })
  }

  return {
    filters,
    subcategories,
    onApply,
    fullPath,
  }
}