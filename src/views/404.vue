<template>
    <div class="error-panel animated fadeInUp">
        <h1 class="error-code">404</h1>
        <p class="error-description">Page Not Found</p>
        <div class="error-ctrl">
            <el-button type="success" @click="$router.push({name: 'index'})" round><i class="el-icon-menu"></i>&nbsp;主页
            </el-button>
            <el-button type="success" @click="$router.back()" round plain><i class="el-icon-back"></i>&nbsp;返回
            </el-button>
        </div>
    </div>
</template>
<script>
    export default {
        name: "404"
    }
</script>
<style type="text/css" scoped>
    .error-panel {
        position: relative;
        width: 250px;
        background: #fff;
        margin: 0 auto;
        margin-top: 150px;
        padding: 15px;
        border-radius: 4px;
        /*font-family: Roboto, Segoe UI, "Microsoft YaHei";*/
        font-family: 微软雅黑;
    }

    .error-panel:after {
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height: 20px;
        overflow: hidden;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
    }

    .error-panel .error-code {
        font-size: 4rem;
        font-weight: 100;
        text-align: center;
        margin: 0;
    }

    .error-panel .error-description {
        text-align: center;
        margin-bottom: 30px;
    }

    .error-panel .error-ctrl {
        text-align: center;
        margin-bottom: 30px;
    }

    .error-panel .copyright {
        text-align: center;
        color: #bfbfbf;
        font-size: 10px;
        text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
    }
</style>
