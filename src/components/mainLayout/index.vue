<template>
    <el-container>
        <el-aside width="200px">
            <el-menu :default-active="activeIndex">
                <menu-item :menuItems="menuItems"></menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="(b,$bIndex) in breadcrumbs" :key="'bc'+$bIndex" :to="b.path">{{b.name}}</el-breadcrumb-item>
            </el-breadcrumb>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>
<script>
import defineAside from "";
export default {
    name:'main-layout',
    data(){
        return {
            activeIndex:0,
            menuItems:[]
        }
    }
}
</script>