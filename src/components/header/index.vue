<template>
    <div>
        <el-avatar :size="50" :src="defaultAvatar"></el-avatar>
        <el-menu :default-active="activeIndex"  mode="horizontal">
            <menu-item :menuItems="menuItems"></menu-item>
        </el-menu>
    </div>
</template>
<script>
import {defaultAvatar} from "../../config/index";
import menuItem from "./menuItem/index.vue"
export default {
   name:'defined-header', 
   data(){
       return{
        activeIndex:0,
        /**
         * {name:string,subItems:[]:item[]} item[]
         */
        menuItems:[]
       }
   },
   components:{
       "menu-item":menuItem
   }
}
</script>