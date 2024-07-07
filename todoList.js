import todoItem from "./todoItem.js"
export default{
    components:{
        todoItem
    },
    template:/*html*/ `
    <div :class="classType" v-if="todoArray.length">
            <h1>{{title}} ({{todoArray.length}})</h1>
            <ul>
                <todo-item v-for="todo in todoArray" :key="todo.id" :todo="todo"></todo-item>  
            </ul>
        </div>`,
        props:{
            title:String,
            todoArray:Array,
            classType:String,
        }
}