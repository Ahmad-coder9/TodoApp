export default{
    template:/*html*/`
    <label>
    <li>
     {{ todo.title }}
     <input type="checkbox" v-model="todo.isFinish">
    </li>
    </label>   
 
    `,
    props:{
        todo:Object
    }
}