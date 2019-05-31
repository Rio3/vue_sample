import Vue from 'vue'
import axios from 'axios'
import lodash from 'lodash'

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
