export default {
  inheritAttrs: false,
  props: ['label', 'value'],
  template: `
    <label>
      {{ label }}
      <input v-bind="$attrs" v-bind:value="value" v-on="inputListeners" placeholder="Enter your username">
    </label>
  `,
  computed: {
    inputListeners: function () {
      var vm = this
      return Object.assign({},
        this.$listeners,
        {
          input: function (event) {
            vm.$emit('input', event.target.value)
          }
        }
      )
    }
  }
}
