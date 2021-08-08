<template>
  <div class="datatable">
    <div class="datatable__wrapper">
      <div class="datatable__head">
        <p
          v-for="cell, i in headData"
          :key="cell.key"
          :style="`width: ${cell.width}px`"
          class="datatable__cell"
          :data-sort="cell.sorted"
          @click="this.sortData({key: cell.key, value: $event.currentTarget.dataset.sort})">
          <span v-html="$filters.localize(cell.name)"></span>
          <div v-if="i === 0 && !this.tooltipIsHidden" class="datatable__tooltip">
            <span>{{$filters.localize('DataTable:Hint')}}</span>
            <button class="datatable__tooltip-btn" @click.stop="hideTooltip">{{$filters.localize('DataTable:Understand')}}</button>
          </div>
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
      sortedData: [],
      tooltipIsHidden: false
    }
  },
  methods: {
    sortData({ key, value }) {
      const sortedData = Array.from(this.sortedData).sort((a, b) => {
        const aValue = a[key]
        const bValue = b[key]

        if (value !== 'asc') {
          return aValue > bValue ? 1 : aValue < bValue ? -1 : 0
        } else {
          return aValue < bValue ? 1 : aValue > bValue ? -1 : 0
        }
      })

      if (value !== 'asc') {
        this.headData.map(el => {
          el.sorted = el.key === key ? 'asc' : null
        })

        this.writeSortToLocalStorage(key, 'desc')
      } else {
        this.headData.map(el => {
          el.sorted = el.key === key ? 'desc' : null
        })

        this.writeSortToLocalStorage(key, 'asc')
      }

      this.sortedData = sortedData
    },
    writeSortToLocalStorage(key, value) {
      const sort = JSON.parse(localStorage.getItem('vue-crm:tableSort'))
      const newSort = {
        ...sort,
        [this.tableId]: {
          key,
          value
        }
      }

      localStorage.setItem('vue-crm:tableSort', JSON.stringify(newSort))
    },
    hideTooltip() {
      this.tooltipIsHidden = true;
      localStorage.setItem('vue-crm:tooltipIsHidden', 'true');
    }
  },
  created() {
    const sortOptions = localStorage.getItem('vue-crm:tableSort') ? JSON.parse(localStorage.getItem('vue-crm:tableSort'))[this.tableId] : null
    const data = Array.from(this.data)

    data.shift(0, 1)
    this.sortedData = data
    this.headData = this.head

    if (sortOptions) {
      this.sortData(sortOptions)
    }
  },
  mounted() {
    this.tooltipIsHidden = JSON.parse(localStorage.getItem('vue-crm:tooltipIsHidden'));
  }
}
</script>

<style lang="sass">
.datatable
  min-height: 100%
  width: 100%
  display: flex
  overflow-x: scroll
  white-space: nowrap
  &__wrapper
    flex: 1
  &__head
    padding: 10px 20px
    .datatable__cell
      position: relative
      cursor: pointer
      color: #969BA3
      font-size: 12px
      &[data-sort="asc"] span:after
        transform: rotate(-90deg)
      &[data-sort="desc"] span:after
        transform: rotate(90deg)
      &[data-sort="asc"] > span,
      &[data-sort="desc"] > span
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
  &__tooltip
    position: absolute
    pointer-events: none
    bottom: 0
    left: -10px
    padding: 5px 10px
    background-color: rgba(0, 0, 0, 0.8)
    transform: translateY(120%)
    cursor: default
    font-size: 13px
    &:before
      position: absolute
      content: ''
      top: -6px
      left: 20px
      border-style: solid
      border-width: 0 4px 6px 4px
      border-color: transparent transparent rgba(0, 0, 0, 0.8) transparent
    span
      color: #fff
    &-btn
      pointer-events: all
      margin-left: 10px
      padding: 0
      border: none
      color: #fff
      cursor: pointer
      text-decoration: underline
  &__row
    padding: 15px 20px
    border-top: 1px solid transparentize(#333, .9)
    &:hover
      background-color: transparentize(#969BA3, .9)
  &__cell
    display: inline-block
    padding-right: 10px
</style>