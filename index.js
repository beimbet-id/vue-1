
//пример-1

	 var app = new Vue({
		el: '#app',
		data: {
		  message: 'Привет, Vue!'
		}
	 })
//пример-2
	 var app2 = new Vue({
		el: '#app-2',
		data: {
		  message: 'новое сообщение: ' + new Date().toLocaleString()
		}
	 })
//пример-3
	 var app3=new Vue({
		 el: '#app-3',
		 data:{
			 seen:true
		 }
	 })

//пример-4

	 var app4=new Vue ({
		 el:'#app-4',
		 data:{
			 todos:[
				 {text:"изучить java script"},
				 {text:'изучить Vue'},
				 {text:'создать что ниудь классное'},
				 {text:'Profit'}
				]
			}
	 })
//пример-5
	 var app5 = new Vue({
		el: '#app-5',
		data: {
		  message: 'Привет, Vue.js!'
		},
		methods: {
		  reverseMessage: function () {
			 this.message = this.message.split('').reverse().join('')
		  }
		}
	 })
//пример-6
	 var app6 = new Vue({
		 el:'#app-6',
		 data:{
			 message: 'helloo, vue!'
		 }
	 })
//пример-7
	 Vue.component('todo-item', {
		template: '<li>Это одна задача в списке</li>'
	 })


//пример-8
	 Vue.component('todo-item', {
		// Компонент todo-item теперь принимает
		// "prop", то есть входной параметр.
		// Имя входного параметра todo.
		props: ['todo'],
		template: '<li>{{ todo.text }}</li>'
	 })
//пример-9
	 Vue.component('todo-item', {
		props: ['todo'],
		template: '<li>{{ todo.text }}</li>'
	 })
//пример-10
	 var app7 = new Vue({
		el: '#app-7',
		data: {
		  groceryList: [
			 { id: 0, text: 'Овощи' },
			 { id: 1, text: 'Сыр' },
			 { id: 2, text: 'Что там ещё люди едят?' }
		  ]
		}
	 })
//пример-11
	 var vm = new Vue({
		 el: '#example',
		 data: {
			 message: 'Привет'
		 },
		 computed: {
			 // геттер вычисляемого значения
			 reversedMessage: function () {
				 // `this` указывает на экземпляр vm
				 return this.message.split('').reverse().join('')
			 }
		 }
	 })
//пример-12
	 var vm = new Vue({
		 el: '#demo',
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
//пример-13
var app10 = new Vue({
		 el:'#app-10',
	data:{
		 	visible:true,
		number: 1
	}
	 })
//пример-14

	 var example1 = new Vue({
		 el: '#example-1',
		 data: {
			 items: [
				 { message: 'Foo' },
				 { message: 'Bar' }
			 ]
		 }
	 })
//пример-15

	 var example2 = new Vue({
		 el: '#example-2',
		 data: {
			 parentMessage: 'Родитель',
			 items: [
				 { message: 'Foo' },
				 { message: 'Bar' }
			 ]
		 }
	 })
//пример-16

	 new Vue({
		 el: '#v-for-object',
		 data: {
			 object: {
				 title: 'How to do lists in Vue',
				 author: 'Jane Doe',
				 publishedAt: '2016-04-10-10'
			 }
		 }
	 })
//пример-17

	 var watchExampleVM = new Vue({
		 el: '#watch-example',
		 data: {
			 question: '',
			 answer: 'Пока вы не зададите вопрос, я не могу ответить!'
		 },
		 watch: {

			 question: function (newQuestion, oldQuestion) {
				 this.answer = 'Ожидаю, когда вы закончите печатать...'
				 this.debouncedGetAnswer()
			 }
		 },
		 created: function () {

			 this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
		 },
		 methods: {
			 getAnswer: function () {
				 if (this.question.indexOf('?') === -1) {
					 this.answer = 'Вопросы обычно заканчиваются вопросительным знаком. ;-)'
					 return
				 }
				 this.answer = 'Думаю...'
				 var vm = this
				 axios.get('https://yesno.wtf/api')
					 .then(function (response) {
						 vm.answer = _.capitalize(response.data.answer)
					 })
					 .catch(function (error) {
						 vm.answer = 'Ошибка! Не могу связаться с API. ' + error
					 })
			 }
		 }
	 })

//пример-18
var app9 = new Vue({
	el: "#app-9",
	data: {isActive : false, isBounded: false}
})