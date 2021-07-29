<template>
  <Loader v-if="loading" />
  <div v-else class="objects">
    <DataTable :head="this.head" :data="objects" tableId="objects" />
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
      {key: 'id', name: 'ID'},
      {key: 'name', name: 'Название'},
      {key: 'type', name: 'Тип'},
      {key: 'square', name: 'Площадь, м<sup>2</sup>', separator: true},
      {key: 'cost', name: 'Стоимость, руб', separator: true},
      {key: 'price', name: 'Цена за м<sup>2</sup>, руб', separator: true}
    ],
    widths: [80, 230, 240, 100, 135, 155],
    objects: null
  }),
  async mounted() {
    this.objects = await this.$store.dispatch('fetchObjects');
    this.head = this.head.map((el, i) => ({...el, width: this.widths[i]}));
    this.loading = false;
  }
}
</script>

<style lang="sass">
.objects
  height: 100%
</style>