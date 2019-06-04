import ComponentA from './ComponentA'
import ComponentC from './ComponentC'

export default {
  components: {
    ComponentA,
    ComponentC
  },
  template: `
    <div>
      <p>ComponentB</p>
      <ComponentA></ComponentA>
      <ComponentC></ComponentC>
    </div>
  `
}
