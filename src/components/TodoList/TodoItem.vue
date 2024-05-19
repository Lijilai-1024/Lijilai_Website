<template>
    <div id="todo_item" :class="item_color">
        <div class="todo_catagory" :class="catagory_color">
           {{ catagory_string }}
        </div>
        <div class="todo_content">
            <div v-if="!isEdit" class="todo_content__content" style="width:70%;flex:1;margin:0;padding:0;">
            {{ content }}
            </div>
            <div v-if="isEdit" class="todo_content__editing" style="width:70%;flex:1;margin:0;padding:0;">
                <el-input
                    v-model="this.content"
                    type="textarea"
                    placeholder="Please input"
                    :autosize="{ minRows: 2, maxRows: 114514 }"
                    style="font-size:16px;"
                />
            </div>
            <div class="todo_content__buttons" style="display: flex;flex-direction:column;align-items: center;justify-content: center;margin:0;padding:0;width: auto;gap:5px;">
                <el-button circle size="medium" style="margin:0;padding:0;" @click="isEdit=!isEdit;">
                    <el-icon>
                        <Edit/>
                    </el-icon>
                </el-button>
                <el-button @click="del_todo" circle size="medium" style="margin:0;padding:0;">
                    <el-icon>
                        <Check/>
                    </el-icon>
                </el-button>
            </div>
            
        </div>
    </div>
</template>
<style scoped>
.todo_catagory{
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    padding:0;
    margin:0;
    border-radius: 10px 10px 0 0;
}
.todo_catagory__Emergency{background-color: #F56C6C;}
.todo_catagory__Important{background-color: #E6A23C;}
.todo_catagory__Safe{background-color: #67C23A;}
.todo_catagory__Unknown{background-color: #909399;}
.todo_content{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    align-items: center;
    padding: 10px;
    margin:0;
    font-size: 16px;
    text-align: center;
    border-top: none;
    gap:5px;
}
#todo_item{
    width:100%;
    min-width:30%;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    max-width: 80%;
    margin-top:10px;
    margin-left:auto;
    margin-right:auto;
}
.todo_item__Emergency{border: 1px solid #F56C6C;background-color: #FAD8D6;}
.todo_item__Important{border: 1px solid #E6A23C;background-color: #FAE1D7;}
.todo_item__Safe{border: 1px solid #67C23A;background-color: #F0F9EB;}
.todo_item__Unknown{border: 1px solid #909399;background-color: #F4F4F5;}
.todo_content__content{
    width: 80%;
    padding: 10px;
    margin:0;
    font-size: 16px;
    word-wrap: break-word;
    white-space: normal;
}
</style>
<script>
export default {
    props: {
        catagory: {
            type: Number,
            default:0,
            required: true,
        },
        content: {
            type: String,
            default:"",
            required: true,
        },
    },
    data(){
        return {
            isEdit: false,
        }
    },
    computed:{
        catagory_string(){
            switch(this.catagory){
                case 0:
                    return "Emergency";
                case 1:
                    return "Important";
                case 2:
                    return "Safe";
                default:
                    return "Unknown";
            }
        },
        catagory_color(){
            return {
                "todo_catagory__Emergency": this.catagory === 0,
                "todo_catagory__Important": this.catagory === 1,
                "todo_catagory__Safe": this.catagory === 2,
                "todo_catagory__Unknown": this.catagory !== 0 && this.catagory !== 1 && this.catagory !== 2,
            }
        },
        item_color(){
            return {
                "todo_item__Emergency": this.catagory === 0,
                "todo_item__Important": this.catagory === 1,
                "todo_item__Safe": this.catagory === 2,
                "todo_item__Unknown": this.catagory !== 0 && this.catagory !== 1 && this.catagory !== 2,
            }
        }
    },
    
    mounted(){
    },
    emits:['del_todo'],
    methods:{
        del_todo(){
            if(!this.isEdit)
                this.$emit('del_todo');
        }
    }
}
</script>