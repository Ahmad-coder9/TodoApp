import todoList from "./todoList.js";
export default{
    components:{
        todoList
    },
    template:/*html*/`
    <form @:submit.prevent="addNewTodo">
     <input type="text" v-model="newTodo" placeholder="Add New Todo...">
     <button type="submit">ADD</button>
    </form>
    <todo-list class="InProgress" title="In Progress" :todoArray="filteredArray.inProgress"></todo-list>
    <todo-list class="done" title="Done" :todoArray="filteredArray.done"></todo-list>
        
    `,
        data(){
            return{
            todos:[
                {id:1,title:"Study Introduction Html",isFinish:false},
                {id:2,title:"Study Introduction css",isFinish:false},
                {id:3,title:"Study Introduction bulma",isFinish:true},
                {id:4,title:"Study Introduction JavaScript",isFinish:false},
                {id:5,title:"Study Introduction vue.js 3",isFinish:false},
                {id:6,title:"Study Introduction Vuetify",isFinish:false}
             ],
            }
        },
        computed:{
            filteredArray(){
            return {
                done:this.todos.filter(todo => todo.isFinish),
                inProgress:this.todos.filter(todoItem => ! todoItem.isFinish),
            }
            }
        },
        methods:{
            addNewTodo(){
            if(this.newTodo =='')
            return
        this.todos.push({id:this.todos.length +1,title:this.newTodo,isFinish:false})
        this.newTodo=''
        }
       
    }

}