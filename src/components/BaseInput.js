export default {
  inheritAttrs: false,
  props: ['label', 'value'],
  template: `
    <label>
      {{ label }}
      <input v-bind="$attrs" v-bind:value="value" v-on:input="$emit('input', $event.target.value)" placeholder="Enter your username">
    </label>
  `
}
