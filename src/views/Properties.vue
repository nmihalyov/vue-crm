<template>
  <Loader v-if="loading" />
  <div v-else class="properties">
    <DataTable :head="this.head" :data="properties" tableId="properties" />
  </div>
</template>

<script>
import DataTable from '@/components/_ui/DataTable';

export default {
  components: {
    DataTable
  },
  data: () => ({
    loading: true,
    head: [
      {key: 'id', name: 'Properties:ID'},
      {key: 'name', name: 'Properties:Name'},
      {key: 'type', name: 'Properties:Type'},
      {key: 'square', name: 'Properties:Square', separator: true},
      {key: 'price', name: 'Properties:Price', separator: true},
      {key: 'cost', name: 'Properties:Cost', separator: true}
    ],
    widths: [80, 230, 240, 100, 135, 155],
    properties: null
  }),
  async mounted() {
    this.properties = await this.$store.dispatch('fetchProperties');
    this.head = this.head.map((el, i) => ({...el, width: this.widths[i]}));
    this.loading = false;
  }
}
</script>

<style lang="sass">
.properties
  height: 100%
</style>