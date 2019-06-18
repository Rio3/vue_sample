import Vue from 'vue'
import axios from 'axios'
import lodash from 'lodash'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import css from './stylesheet/app.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)

Vue.use(BootstrapVue)
Vue.component('font-awesome-icon', FontAwesomeIcon)

const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
    camelCase(
      fileName.split('/').pop().replace(/\.\w+$/, '')
    )
  )
  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    rawHtml: '<span style="color: red">This should be red.</span>',
    dynamicId: 'dynamic',
    isButtonDisabled: true,
    seen: true,
    url: 'https://qiita.com/hashimoto-1202/items/c81f5d4c271eef16d957'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})

var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    },
    now: function () {
      return Date.now()
    }
  },
  methods: {
    reverseMessage: function () {
      return this.message.split('').reverse().join('')
    }
  }
})

// 監視プロパティ
var vm = new Vue({
  el: '#demo1',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
})
// 算出プロパティ
var vm = new Vue({
  el: '#demo2',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: {
      //getter関数
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      // setter 関数
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
})

var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
  },
  watch: {
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  created: function () {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
      var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function (error) {
          vm.answer = 'Error! Could not reach the API. ' + error
        })
    }
  }
})

Vue.component('my-component', {
  template: '<p class="foo bar">Hi</p>'
})
var vm = new Vue({
  el: '#class-bind-example',
  data: {
    isActive: true,
    hasError: false,
    classObject: {
      active: true,
      'text-danger': false
    },
    activeClass: 'active',
    errorClass: 'text-danger'
  },
})

var vm = new Vue({
  el: '#style-bind-example',
  data: {
    activeColor: 'red',
    fontSize: 30,
    styleObject: {
      color: 'red',
      fontSize: '13px'
    },
    baseStyles: {
      color: 'blue'
    },
    overridingStyles: {
      fontSize: 20
    }
  }
})

var vm = new Vue({
  el: '#rendering_example',
  data: {
    awesome: true,
    ok: true,
    type: 'A',
    loginType: 'username'
  },
  methods: {
    toggleLoginType: function () {
      if (this.loginType === 'username') {
        return this.loginType = 'email'
      }
      else {
        return this.loginType = 'username'
      }
    }
  }
})

var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
var example2 = new Vue({
  el: '#example-2',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
new Vue ({
  el: '#v-for-object',
  data: {
    object: {
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2019/05/31'
    }
  }
})
var user_example = new Vue({
  el: '#user_example',
  data: {
    userProfile: {
      name: 'Anika'
    }
  }
})
Vue.set(user_example.userProfile, 'age', 27)
user_example.$set(user_example.userProfile, 'favoriteColor', '赤')
user_example.userProfile = Object.assign({}, user_example.userProfile, {
  height: 160,
  weight: 50
})
var sort_example = new Vue({
  el: '#sort_example',
  data: {
    numbers: [ 1, 2, 3, 4, 5 ],
    items: [
      { msg: 'message1' },
      { msg: 'message2' }
    ],
    todos:[]
  },
  computed: {
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  },
  methods: {
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  }
})

Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
  ',
  props: ['title']
})
new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'Do the dishes',
      },
      {
        id: 2,
        title: 'Take out the trash',
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
})

var example3 = new Vue({
  el: '#example-3',
  data: {
    counter: 0
  }
})
var example4 = new Vue({
  el: '#example-4',
  data: {
    name: 'Vue.js'
  },
  methods: {
    greet: function (event) {
      alert('Hello ' + this.name + '!')
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})
var example5 = new Vue({
  el: '#example-5',
  methods: {
    say: function (message) {
      alert(message)
    },
    warn: function (message, event) {
      if (event) event.preventDefault()
      alert(message)
    }
  }
})

var form_example = new Vue({
  el: '#form_example',
  data: {
    message: "",
    checked: false,
    picked: "",
    selected: 'A',
    options: [
      { text:'One', value: 'A' },
      { text:'Two', value: 'B' },
      { text:'Three', value: 'C' }
    ],
    toggle: "yes",
    age: ""
  }
})
var example6 = new Vue({
  el: '#example-6',
  data: {
    checkedNames: []
  }
})

Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
new Vue({ el: '#components-demo' })
Vue.component('blog-post', {
    props: ['post'],
    template: `
      <div class="blog-post">
        <h3>{{ post.title }}</h3>
        <div v-html="post.countent"></div>
      </div>
    `
  }
)
new Vue({
  el: '#blog-post-demo',
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue' },
      { id: 2, title: 'Blogging with Vue' },
      { id: 3, title: 'Why Vue is so fun' }
    ]
  }
})
Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text', 0.1)">
        Enlarge text
      </button>
      <div v-html="post.content"></div>
    </div>
  `
})
Vue.component('custom-input', {
  props: ['value'],
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `
})
Vue.component('alert-box', {
  template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
})
new Vue({
  el: '#blog-posts-events-demo',
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue' },
      { id: 2, title: 'Blogging with Vue' },
      { id: 3, title: 'Why Vue is so fun' }
    ],
    postFontSize: 1,
    searchText: ""
  },
  methods: {
    onEnlargeText: function (enlargeAmount) {
      this.postFontSize += enlargeAmount
    }
  }
})
Vue.component('tab-home', {
  template: '<div>Home component</div>'
})
Vue.component('tab-posts', {
  template: `
    <div class="posts-tab">
      <ul class="posts-sidebar">
        <li
          v-for="post in posts"
          v-bind:key="post.id"
          v-bind:class="{ selected: post === selectedPost }"
					v-on:click="selectedPost = post"
        >
          {{ post.title }}
        </li>
      </ul>
      <div class="selected-post-container">
      	<div 
        	v-if="selectedPost"
          class="selected-post"
        >
          <h3>{{ selectedPost.title }}</h3>
          <div v-html="selectedPost.content"></div>
        </div>
        <strong v-else>
          Click on a blog title to the left to view it.
        </strong>
      </div>
    </div>
  `,
  data: function () {
    return {
      posts: [
        { title: "Cat Ipsum", content: "<p>Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around</p>" },
        { title: "Hipster Ipsum", content: "<p>Bushwick blue bottle scenester helvetica ugh, meh four loko. Put a bird on it lumbersexual franzen shabby chic, street art knausgaard trust fund shaman scenester live-edge mixtape taxidermy viral yuccie succulents. Keytar poke bicycle rights, crucifix street art neutra air plant PBR&B hoodie plaid venmo. Tilde swag art party fanny pack vinyl letterpress venmo jean shorts offal mumblecore. Vice blog gentrify mlkshk tattooed occupy snackwave, hoodie craft beer next level migas 8-bit chartreuse. Trust fund food truck drinking vinegar gochujang.</p>" }
      ],
      selectedPost: null
    }
  }
})
Vue.component('tab-archive', {
  template: '<div>Archive component</div>'
})
new Vue({
  el: '#dynamic-component-demo',
  data: {
    currentTab: 'Home',
    tabs: ['Home', 'Posts', 'Archive']
  },
  computed: {
    currentTabComponent: function () {
      return 'tab-' +
        this.currentTab.toLowerCase()
    }
  }
})

import ComponentB from './components/ComponentB'
new Vue({
  el: '#local-component-example',
  components: {
    'component-b': ComponentB
  }
})

Vue.component('props-component', {
  props: {
    title: String,
    likes: [Number, String],
    isPublished: {
      type: Boolean,
      require: true
    },
    commentIds: {
      type: Array,
      default: function () {
        return [1, 2, 3]
      }
    },
    author: {
      type: Object,
      default: function () {
        return { name: '四郎', company: '虫歯建設株式会社' }
      }
    },
    status: {
      validator: function (value) {
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  },
  template: `
    <div>
      <h3>{{ title }}</h3>
      <p>author: {{ author.name }} ({{ author.company }})</p>
      <p>likes: {{ likes }} comment: {{ commentIds }}</p>
      <p>published: {{ isPublished ? "◯" : "×" }} status: {{ status }}</p>
    </div>
  `
})
function Person (firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}
new Vue({
  el: '#props-example',
  data: {
    posts:[
      { title: 'タイトル1', likes: 5, isPublished: true, commentIds: [112, 113, 114], author: { name: '三郎', company: '山田書店' }, status: 'success' },
      { title: 'タイトル2', likes: 10, isPublished: true, author: { name: '三郎', company: '山田書店' }, status: 'danger' }
    ]
  }
})

import { BFormInput } from 'bootstrap-vue'
import BaseInput from "./components/BaseInput";
var BootstrapDateInput = {
  components: {
    'b-form-input': BFormInput
  },
  template: '<b-form-input type="date"></b-form-input>',
}
new Vue ({
  el: '#bootstrap-example',
  data: {
    username: ""
  },
  components: {
    'bootstrap-date-input': BootstrapDateInput
  }
})

Vue.component('base-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  template: `
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
  `
})
new Vue ({
  el: '#event-example',
  data: {
    lovingVue: true,
    username: "",
    focusText: "",
  },
  methods: {
    onFocus: function () {
      this.focusText = "focus now"
    }
  },
})

var NavigationLink = {
  template: `
    <a class="nav-link">
      <slot></slot>
    </a>
  `
}
var SubmitButton = {
  template: `
    <button type="submit">
      <slot>Submit</slot>
    </button>
  `
}
var BaseLayout = {
  template: `
    <div class="container">
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  `
}
var CurrentUser = {
  data: function () {
    return {
      current_user: {
        firstName: "ミミカ",
        lastName: "味楽る"
      }
    }
  },
  template: `
    <span>
      <slot v-bind:current_user="current_user">
        {{ current_user.lastName }}
      </slot>
    </span>
  `
}
new Vue ({
  el: '#slot-example',
  data: {
    user: {
      name: '味楽るミミカ'
    }
  },
  components: {
    'navigation-link': NavigationLink,
    'submit-button': SubmitButton,
    'base-layout': BaseLayout,
    'current-user': CurrentUser
  }
})

Vue.component('async-example', function (resolve, reject) {
  setTimeout(function () {
    resolve({
      template: '<div>I am async!</div>'
    })
  }, 10000)
})
Vue.component('async-webpack-example', function (resolve) {
  require(['./components/my-async-component'], resolve)
})
new Vue ({
  el: '#async-example'
})

