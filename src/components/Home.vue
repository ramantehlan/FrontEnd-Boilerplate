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
            <li v-for="todo in todos">
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
     <div class="col-sm">
          <img src="https://vuejs.org/images/lifecycle.png?_sw-precache=6f2c97f045ba988851b02056c01c8d62" class="center-img">
     </div>
     <div class="col-sm">
        
     </div>
     <div class="col-sm">
        
     </div>
  </div>

       

</div>
</template>

<style scope>

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
        width: 70%;  
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
    color: #13293d;
    text-align: center;
    padding-top:10px;
    padding-bottom:10px;
}


</style>

<script>
import Vue from 'vue'

Vue.component('todo-item', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

export default {
  data: () => ({
    message: 'data.Message',
    seen: true,
    todos: [
        { text: "Learn VueJs" },
        { text: "Learn ReactJs" },
        { text: "Build Something Great" }
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
    }
  }
}
</script>
