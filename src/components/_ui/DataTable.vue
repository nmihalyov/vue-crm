<template>
  <div class="datatable">
    <div class="datatable__wrapper">
      <div class="datatable__head">
        <p
          v-for="cell in headData"
          :key="cell.key"
          :style="`width: ${cell.width}px`"
          class="datatable__cell"
          :data-sort="cell.sorted"
          @click="this.sortData({key: cell.key, value: $event.currentTarget.dataset.sort})">
          <span v-html="cell.name"></span>
        </p>
      </div>
      <div class="datatable__body">
        <template v-for="row in sortedData" :key="row?.id">
          <div class="datatable__row">
            <p v-for="cell in headData" :key="cell.key" :style="`width: ${cell.width}px`" class="datatable__cell">
              {{ cell.separator ? row[cell.key].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : row[cell.key] }}
            </p>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    head: Array,
    data: Array,
    tableId: String
  },
  data() {
    return {
      sortedData: []
    }
  },
  methods: {
    sortData({ key, value }) {
      const sortedData = Array.from(this.sortedData).sort((a, b) => {
        const aValue = a[key];
        const bValue = b[key];

        if (value !== 'asc') {
          return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
        } else {
          return aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
        }
      });

      if (value !== 'asc') {
        this.headData.map(el => {
          el.sorted = el.key === key ? 'asc' : null;
        });

        this.writeSortToLocalStorage(key, 'desc');
      } else {
        this.headData.map(el => {
          el.sorted = el.key === key ? 'desc' : null;
        });

        this.writeSortToLocalStorage(key, 'asc');
      }

      this.sortedData = sortedData;
    },
    writeSortToLocalStorage(key, value) {
      const sort = JSON.parse(localStorage.getItem('tableSort'));
      const newSort = {
        ...sort,
        [this.tableId]: {
          key,
          value
        }
      };

      localStorage.setItem('tableSort', JSON.stringify(newSort));
    }
  },
  created() {
    const sortOptions = JSON.parse(localStorage.getItem('tableSort'))[this.tableId];
    const data = Array.from(this.data);
    data.shift(0, 1);
    this.sortedData = data;
    this.headData = this.head;
    this.sortData(sortOptions);
  }
}
</script>

<style lang="sass">
.datatable
  width: 100%
  display: flex
  overflow-x: scroll
  white-space: nowrap
  &__wrapper
    flex: 1
  &__head
    padding: 10px 20px
    .datatable__cell
      cursor: pointer
      color: #969BA3
      font-size: 12px
      &[data-sort="asc"] span:after
        transform: rotate(-90deg)
      &[data-sort="desc"] span:after
        transform: rotate(90deg)
      &[data-sort="asc"] span,
      &[data-sort="desc"] span
        position: relative
        &:after
          content: ''
          position: absolute
          top: 2px
          right: -15px
          width: 10px
          height: 10px
          background:
            image: url('../../assets/img/icons/sort-arrow.svg')
            size: contain
            position: center
            repeat: no-repeat
  &__row
    padding: 15px 20px
    border-top: 1px solid transparentize(#333, .9)
    &:hover
      background-color: transparentize(#969BA3, .9)
  &__cell
    display: inline-block
    padding-right: 10px
</style>