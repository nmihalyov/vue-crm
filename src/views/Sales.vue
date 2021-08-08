<template>
  <section class="sales">
    <p class="sales__heading">{{$filters.localize('Sales:Heading')}} {{Intl.DateTimeFormat($store.getters.locale, {month: 'long'}).format(new Date())}}</p>
    <div class="sales__chart">
      <canvas ref="canvas"></canvas>
    </div>
  </section>
</template>

<script>
import { Line } from 'vue-chartjs';
import localize from '@/filters/localize.filter';

export default {
  extends: Line,
  data: () => ({
    chartData: {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
      datasets: [
        {
          label: localize('Sales:Amount'),
          data: [1, 1, 3, 4, 8, 9, 2, 0, 5, 0, 6, 2, 1, 4, 2, 8, 2, 9, 0, 2, 6, 3, 5, 0, 6, 3, 0, 1, 4, 2],
          borderColor: '#f46385',
          backgroundColor: 'transparent'
        },
        {
          label: localize('Sales:Revenue'),
          data: [4.44, 4.4, 11.15, 26.85, 52.51, 0.75, 5.22, 0, 9.91, 0, 21.45, 0.33, 6.93, 1.35, 2.05, 14.14, 4.27, 6.06, 0, 7.24, 14.56, 15.72, 43.77, 0, 2.22, 8.89, 0, 0.05, 19.23, 6.88],
          borderColor: '#3da2eb',
          backgroundColor: 'transparent'
        }
      ]
    },
    chartOptions: {
    }
  }),
  mounted() {
    this.renderChart(this.chartData, this.chartOptions);
  }
}
</script>

<style lang="sass">
.sales
  &__heading
    margin: 50px 0 20px
    text-align: center
    color: #333
    font-size: 24px
  &__chart
    max-width: 700px
    width: 80%
    margin: 0 auto
</style>