<template>
    <el-col :span="24">
        <!--:default-active="$route.path"-->
        <el-menu
                :default-active="activeMenuIndex()"
                :default-openeds="openeds"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                active-text-color="#008080"
                mode="vertical"
                router>
            <el-menu-item index="/index">
                <i class="el-icon-menu"></i>
                <span slot="title">主页</span>
            </el-menu-item>
            <el-menu-item index="/patientInfo">
                <i class="el-icon-location"></i>
                <span slot="title">病人基本信息&nbsp;</span>
            </el-menu-item>

            <el-menu-item index="/firstRecrod">
                <i class="el-icon-edit"></i>
                <span slot="title">病人初诊记录&nbsp;</span>
            </el-menu-item>


            <el-menu-item index="/recordInfo">
                <i class="el-icon-view"></i>
                <span slot="title">康复阶段管理&nbsp;</span>
            </el-menu-item>

            <!--<el-menu-item index="/Form">-->
                <!--<i class="el-icon-menu"></i>-->
                <!--<span slot="title">数据统计</span>-->
            <!--</el-menu-item>-->



<!--            <el-submenu index="3" v-show="$store.state.roles === 0">-->
<!--                <template slot="title">-->
<!--                    <i class="el-icon-view"></i>-->
<!--                    <span>系统管理</span>-->
<!--                </template>-->
<!--                <el-menu-item index="/manageroom">会议室管理</el-menu-item>-->
<!--                <el-menu-item index="/managepeople">用户管理</el-menu-item>-->
<!--            </el-submenu>-->
<!--            <el-menu-item index="/hide" style="visibility: hidden">-->
<!--            </el-menu-item>-->



            <!--<el-submenu index="4">-->
            <!--<template slot="title">-->
            <!--<i class="el-icon-edit"></i>-->
            <!--<span>个人中心</span>-->
            <!--</template>-->
            <!--<el-menu-item index="/mymeeting">我的会议</el-menu-item>-->
            <!--<el-menu-item index="/notification">查看消息</el-menu-item>-->
            <!--<el-menu-item index="/profile">修改资料</el-menu-item>-->
            <!--</el-submenu>-->
        </el-menu>
    </el-col>
</template>

<script>
    export default {
        name: "Aside.vue",
        data(){
            return{
                openeds:['1']
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            activeMenuIndex() {
                if (this.$route.path === '/mymeeting' || this.$route.path === '/notification') {
                    return '/hide';
                } else {
                    return this.$route.path;
                }
            }
        }
    }
</script>

<style scoped>

</style>
