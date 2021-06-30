<template>
  <Loader v-if="loading" />
  <div v-else class="clients">
    <DataTable :head="this.head" :data="clients" tableId="clients" />
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
      {key: 'name', name: 'Клиент'},
      {key: 'phone', name: 'Телефон'},
      {key: 'deals', name: 'Сделок'},
      {key: 'active_sales', name: 'Активные продажи'}
    ],
    widths: [280, 175, 130, 175],
    clients: null
  }),
  async mounted() {
    this.clients = await this.$store.dispatch('fetchClients');
    this.head = this.head.map((el, i) => ({...el, width: this.widths[i]}));
    this.loading = false;
  }
}
</script>