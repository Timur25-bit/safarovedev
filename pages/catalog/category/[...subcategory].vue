<script setup lang="ts">
import { optionsFiltersCategories } from "~/constants/filtersSubcategories";
import { useFilterCategories } from "~/composables/useFiltersCategories";

const { onApply, subcategories, filters, fullPath } = useFilterCategories()
</script>

<template>
    <div class="filters-category-wrapper">
      <q-select
          v-model="subcategories"
          outlined
          multiple
          emit-value
          label="Subcategory"
          :options="optionsFiltersCategories.subcagegories"
      />
      <q-select
          v-model="filters"
          outlined
          emit-value
          multiple
          label="Filters"
          :options="optionsFiltersCategories.filters"
      />
      <q-btn color="primary" no-caps @click="onApply">
        Apply
      </q-btn>
    </div>
    <div>
      {{ fullPath }}
    </div>
</template>

<style scoped lang="scss">
.filters-category-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 40%) 10%;
  gap: 24px;
  margin-bottom: 24px;

  :deep(.q-btn) {
    width: 100%;
  }
}
</style>