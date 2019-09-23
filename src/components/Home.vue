<template>
<div id='home'>
    <header class='header'>Frontend Boilerpate</header>

  <div class="row">
    <div class="col-sm">
      
      <h5> Declarative Rendering</h5>

        {{ message }}


    </div>
    <div class="col-sm">
     
      <h5> Conditionals and Loops </h5>

        <span v-if="seen">Now you see me</span>
        
        <ol>
            <li v-for="todo in todos" 
                v-bind:todo="todo" 
                v-bind:key="todo.id">
            {{ todo.text }}
            </li>
        </ol>


    </div>
    <div class="col-sm">
      
      <h5> Handling User Input </h5>

          <p>{{ message }}</p>
          <input v-model="message">
          <button class="btn-primary" v-on:click="reverseMessage">Reverse Message</button>


    </div>
        <div class="col-sm">
      
      <h5> Composing with Components</h5>

      <ol>
        <!-- Create an instance of the todo-item component -->
        <!--
            Now we provide each todo-item with the todo object
            it's representing, so that its content can be dynamic.
            We also need to provide each component with a "key",
            which will be explained later.
        -->
        <todo-item
            v-for="item in groceryList"
            v-bind:todo="item"
            v-bind:key="item.id"
            ></todo-item>
      </ol>

    </div>
    <div class="w-100"></div>
        <h5>Lifecycle Diagram</h5>
        <img src="https://vuejs.org/images/lifecycle.png?_sw-precache=6f2c97f045ba988851b02056c01c8d62" class="center-img">
     <div class="w-100"></div>
     <div class="col-sm">
        <h5>Instance Lifecycle Hooks</h5>
        {{createdMessage}} 
        <br>
        You can use `created`, `mounted`, `updated`, and `destroyed`
     </div>
     <div class="col-sm">
       <h5>Template Syntax</h5><br>
       <span v-once>{{message}}</span>
       {{ rawHTML }}
       <p>Using v-html directive: <span v-html="rawHTML"></span></p>
       <br>
       v-bind:disabled="isButtonDisabled"
       <br/> 
       {{ 5 + 5 }}
       <br>
       v-bind:[nameOfArgument]='url'
       <br>
       v-on:submit.prevent='onSubmit'
     </div>
     <div class="col-sm">
        <h5>Shorthand</h5>
        v-bind:href='url' = :href='url' <br>
        v-on:click='doSomething' = @click='doSomething'
     </div>
     <div class="col-sm">
        <h5> Computer Properties </h5>
        It is cached.<br>
        {{ reverseMsg    }}
     </div>
     <div class="w-100"></div>
     <div class='col-sm'>
         <h5>Watched properties</h5> 
         When you have some data that needs to change based on some other data <br><br>
           <input v-model="firstName">  <input v-model="lastName">
         {{fullName}}
     </div>
     <div class='col-sm'>
       <h5>Computted Setter</h5>
       Computed properties are by default getter-only, but you can also provide a setter when you need it: <br><br>
        <input v-model="fullName">
     </div>
     <div class='col-sm'>
       <h5>Watchers</h5>
        <p>
            Ask a yes/no question:
            <input v-model="question">
        </p>
        <p>{{ answer }}</p>
     </div>
     <div class='col-sm'>
      <h5> Binding HTML Classes </h5>

      <div v-bind:class="{active: isActive}">Hi, class of this div will toggle</div>
      <div v-bind:class="classObject">Hi, class of this div will toggle because of the objects</div>
      <div v-bind:class="classObjectCompute">Hi, class of this div will toggle because of the computed Property</div>
      <div v-bind:class="[activeClass, errorClass]">Array of class</div>
      <div v-bind:class="[{ active: isActive }, errorClass]">Object in array</div>
     </div>
    <div class="w-100"></div>
     <div class='col-sm'>
        
        <h5>Classes with components</h5>
        <my-component class="baz boo"></my-component>

     </div>
     <div class='col-sm'>

        <h5>Conditional Rendering</h5>
        <b v-if="awesome">Vue is awesome!</b>
        <b v-else>Oh no 😢</b>       

     </div>
     <div class='col-sm'>
       
       <h5>List Rendering</h5> 
        <li v-for="(item, index) in todos" 
            v-bind:key="index">
            {{ index }} - {{ item.text }}
        </li>

     </div>
     <div class='col-sm'>
        <h5>Event Modifiers</h5>
        <!-- the click event's propagation will be stopped -->
<a v-on:click.stop="doThis">stop</a>

<!-- the submit event will no longer reload the page -->
<form v-on:submit.prevent="onSubmit">.prevent</form>

<!-- modifiers can be chained -->
<a v-on:click.stop.prevent="doThat">.stop.prevent</a>

<!-- just the modifier -->
<form v-on:submit.prevent>.prevent</form>

<!-- use capture mode when adding the event listener -->
<!-- i.e. an event targeting an inner element is handled here before being handled by that element -->
<div v-on:click.capture="doThis">.capture</div>

<!-- only trigger handler if event.target is the element itself -->
<!-- i.e. not from a child element -->
<div v-on:click.self="doThat">.self</div>
<a v-on:click.once="doThis">.once</a>
<input v-on:keyup.enter="submit" placeholder=".enter">
     </div>
</div>

       

</div>
</template>


<script>
import Vue from 'vue'

Vue.component('todo-item', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

Vue.component('my-component', {
  template: '<p class="foo bar">Hi</p>'
})

export default {
  data: () => ({
    message: 'data.Message',
    createdMessage: 'Not Created',
    rawHTML: '<span style="color:red">This should be red</span>',
    seen: true,
    firstName: 'First',
    lastName: 'Last',
    question: '',
    isActive: true,
    error:false,
    awesome: false,
    activeClass: 'active',
    errorClass: 'text-danger',
    classObject: {
      active: true
    },
    answer: 'I cannot give you an answer until you ask a question!',
    todos: [
        { id: 0, text: "Learn VueJs" },
        { id: 1, text: "Learn ReactJs" },
        { id: 2, text: "Build Something Great" }
    ],
    groceryList: [ 
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }),
  methods: {
    reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
    },
    getAnswer: function(){
      if (this.question.indexOf('?') === -1){
        this.answer = 'Questions usually contain a question mark. ;-)'
        return 
      }
      this.answer = "Thinking..."
      var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function (response){
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function (error){
          vm.answer = 'Error! Could not reach the API: ' + error
        })
    }
  },
  created: function () {
    this.createdMessage = "Created!"

    // _.debounce is a function provided by lodash to limit how
    // often a particularly expensive operation can be run.
    // In this case, we want to limit how often we access
    // yesno.wtf/api, waiting until the user has completely
    // finished typing before making the ajax request. To learn
    // more about the _.debounce function (and its cousin
    // _.throttle), visit: https://lodash.com/docs#debounce
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  computed: {
    reverseMsg: function() {
       return this.message.split('').reverse().join('')
    },
    fullName:{
      get: function() {
        return this.firstName + ' ' + this.lastName
      },
      set: function(newValue){
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    },
    classObjectCompute: function () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  },
  watch: {
    firstName: function(val){
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function(val){
      this.fullName = this.firstName + ' ' + val 
    },
    question: function(newQuestion, oldQuestion){
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  }
}
</script>


<style scope>

.active{
  color: green
}

.center-img{
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

@media only screen and (min-width: 550px){
    .center-img{
        width: 90%;  
    }
}

@media only screen and (min-width: 950px){
    .center-img{
        width: 40%;  
    }
}

.code{
    font-size: var(--subtitle-size);
    background-color:#3f3f3f;
    color:#ffffff;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 10px;
    border-radius:5px;
}

.row{
    padding:20px;
}

.col-sm{
    margin:10px;
    padding:10px;
    background-color: lightcyan;
    border:1px solid lightgrey;
}

h5{
    width: 100%;
    color: #13293d;
    text-align: center;
    justify-content: center;
    padding-top:10px;
    padding-bottom:10px;
}


</style>

