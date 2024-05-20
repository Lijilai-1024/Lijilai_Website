<template>
    <div class="title">Todo List</div>
    <div class="todo_board">
        <div class="todo_board__catagory">
            <TodoItem 
            v-for="todo in todos_Emergency"
            @del_todo="delete_todo(todo)" 
            @edit_todo="todo.content = $event"
            :catagory="todo.catagory" 
            :content="todo.content">
            </TodoItem>
        </div>
        <div class="todo_board__catagory">
            <TodoItem 
            v-for="todo in todos_Important" 
            @del_todo="delete_todo(todo)" 
            @edit_todo="todo.content = $event"
            :catagory="todo.catagory" 
            :content="todo.content">
            </TodoItem>
        </div>
        <div class="todo_board__catagory">
            <TodoItem 
            v-for="todo in todos_Safe" 
            @del_todo="delete_todo(todo)" 
            @edit_todo="todo.content = $event"
            :catagory="todo.catagory" 
            :content="todo.content">
            </TodoItem>
        </div>  
    </div>
    <div class="todo_board_mobile">
            <TodoItem 
                v-for="todo in todos_Emergency" 
                @del_todo="todos=todos.filter(item => item !== todo)" 
                @edit_todo="todo.content = $event"
                :catagory="todo.catagory" 
                :content="todo.content">
            </TodoItem>
            <div class="divider" v-if="todos_Important.length > 0"/>
            <TodoItem 
                v-for="todo in todos_Important" 
                @del_todo="todos=todos.filter(item => item !== todo)" 
                @edit_todo="todo.content = $event"
                :catagory="todo.catagory" 
                :content="todo.content">
            </TodoItem>
            <div class="divider" v-if="todos_Safe.length > 0"/>
            <TodoItem 
                v-for="todo in todos_Safe" 
                @del_todo="todos=todos.filter(item => item !== todo)" 
                @edit_todo="todo.content = $event"
                :catagory="todo.catagory" 
                :content="todo.content">
            </TodoItem>

    </div>
    <div class="todo_item__add">
        <el-input 
        v-model="newItem.content" 
        placeholder="Add a Todo"
        type="textarea"
        :rows="2"
        ></el-input>
        <div class="todo_item__add__buttons">
            <!-- <el-select 
            v-model="newItem.catagory" 
            placeholder="Please Select"
        >
            <el-option label="Emergency" value="0"></el-option>
            <el-option label="Important" value="1"></el-option>
            <el-option label="Safe" value="2"></el-option>
        </el-select> -->
        <el-radio-group v-model="newItem.catagory" class="ml-4">
            <el-radio-button  value="0">Emergency</el-radio-button>
            <el-radio-button  value="1">Important</el-radio-button>
            <el-radio-button  value="2">Safe</el-radio-button>
        </el-radio-group>
        <el-button @click="create_todo">Add</el-button>
        </div>
        
    </div>
    
</template>
<style scoped>
.title{
    font-size: 36px;
    font-weight: bold;
    width:100%;
    text-align: center;
    margin: auto;
    padding: 10px;
}
.todo_item__add__buttons{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin:0;
    font-size: 20px;
    text-align: center;
    border-top: none;
}
.todo_item__add{
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    max-width: 100%;
    margin:10px;
    padding: 10px;
    border: 1px solid #909399;
    background-color: #F4F4F5;

}
.todo_board_mobile{
    display: none;
}
.divider{
    width:100%;
    border-top: dashed;
    border-width: 10px,0,0,0;
    margin-top:10px;
}
.todo_board{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width:100%;
    align-items: center;
    padding: 5px;
    margin:10px;
    text-align: center;
    border-top: none;
}
.todo_board__catagory{
    display: flex;
    flex-direction: column;
    gap:5px;
    width:33.3%;
    align-items: center;
    padding:0;
    margin:0;
    text-align: center;
    border-top: none;
}

@media screen and (max-width: 768px){
    .todo_board{
        display: none;
    }
    .todo_board_mobile{
        display: flex;
        flex-direction: column;
        width:80%;
        align-items: center;
        padding: 5px;
        margin:auto;
        text-align: center;
        border-top: none;
    }
    .el-collapse{
        width: 100%;
        background-color: red;
    }

}
</style>
<script>
import { ElMessageBox } from 'element-plus';
import TodoItem from '../components/TodoList/TodoItem.vue'

export default{
    components: {
        TodoItem
    },
    data(){
        return{
            todos:[],
            newItem:{
                catagory: "",
                content: ""
            }
        }
    },
    computed:{
        todos_Emergency(){
            return this.todos.filter(todo => todo.catagory === 0)
        },
        todos_Important(){
            return this.todos.filter(todo => todo.catagory === 1)
        },
        todos_Safe(){
            return this.todos.filter(todo => todo.catagory === 2)
        },
    },
    methods:{
        create_todo(){
            if (this.newItem.content == ""){
                ElMessageBox.alert("Please input content");
                return;
            }
            this.todos.push({
                catagory: Number(this.newItem.catagory),
                content: this.newItem.content
            })
            this.newItem.content = "";
            localStorage.setItem("todos", JSON.stringify(this.todos));
        },
        delete_todo(todo){
            this.todos = this.todos.filter(item => item !== todo);
            localStorage.setItem("todos", JSON.stringify(this.todos));
        }
    },
    mounted(){
        this.todos = JSON.parse(localStorage.getItem("todos")) || [];
    },
    unmounted(){
        localStorage.setItem("todos", JSON.stringify(this.todos));
    }

}
</script>