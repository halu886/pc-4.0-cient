<template>
    <div>
        <template v-for="(menuItem,$index) in menuItems">
            <el-menu-item :key="$index" v-if="menuItem.subItems.length" :index="pre+$index">{{menuItem.name}}</el-menu-item>
            <el-submenu :key="$index" v-else :index="$index">
                <template slot="title">{{menuItem.name}}</template>
                <memu-item :menuItems="menuItem.subItems" :pre="pre+$index+'-'"></memu-item>
            </el-submenu>
        </template>
    </div>
</template>
<script>
export default {
   name:'menu-item', 
   props:{
       'menuItems':Object,
       'pre':{
           type:String,
           default:''
       }
   }
}
</script>