<template>
<!--    <div>-->
<!--        <div style="height: 100%                                                                                                                                                                                                                                                                                                                                               ">-->
<!--            <el-row :gutter="20" style="height: 80px">-->
<!--                <el-col :xs="12" :sm="12" :lg="6" style="margin-bottom: 20px">-->
<!--                    <section class="panel">-->
<!--                        <el-container>-->
<!--                            <div class="symbol" style="background: #6CCAC9">-->
<!--                                <img src="../assets/icon/user.png" class="icon-user" style="width: 57px;height: 57px">-->
<!--                            </div>-->
<!--                            <div class="value" style="padding-top: 10px">-->
<!--                                &lt;!&ndash;<h3 style="font-size: 45px ">{{free_num}}</h3>&ndash;&gt;-->
<!--                                <h3 style="font-size: 30px;margin: 10px">{{free_num}}</h3>-->
<!--                                <p class="myinline" style="margin-top: 2px">空闲会议室</p>-->
<!--                            </div>-->
<!--                        </el-container>-->
<!--                    </section>-->
<!--                </el-col>-->
<!--                <el-col :xs="12" :sm="12" :lg="6" style="margin-bottom: 20px">-->
<!--                    <section class="panel">-->
<!--                        <el-container>-->
<!--                            <div class="symbol" style="background: #FF6C60">-->
<!--                                <img src="../assets/icon/meeting.png" class="icon-meeting"-->
<!--                                     style="height: 67px ; width:67px">-->
<!--                            </div>-->
<!--                            <div class="value" style="padding-top: 10px">-->
<!--                                &lt;!&ndash;页面跳转传参测试&ndash;&gt;-->
<!--                                &lt;!&ndash;<h3 style="font-size: 45px ">{{this.$route.query.orderId}}</h3>&ndash;&gt;-->
<!--                                <h3 style="font-size: 30px;margin: 10px">5</h3>-->
<!--                                <p class="myinline" style="margin-top: 2px">正在召开会议</p>-->
<!--                            </div>-->
<!--                        </el-container>-->
<!--                    </section>-->
<!--                </el-col>-->
<!--                <el-col :xs="12" :sm="12" :lg="6" style="margin-bottom: 20px">-->
<!--                    <section class="panel">-->
<!--                        <el-container>-->
<!--                            <div class="symbol" style="background: #F8D347">-->
<!--                                <img src="../assets/icon/telephone.png" class="icon-telephone"-->
<!--                                     style="height: 62px ; width:62px">-->
<!--                            </div>-->
<!--                            <div class="value" style="padding-top: 10px">-->
<!--                                &lt;!&ndash;<h3 style="font-size: 45px ">2</h3>&ndash;&gt;-->
<!--                                <h3 style="font-size: 30px;margin: 10px">5</h3>-->
<!--                                <p class="myinline" style="margin-top: 2px">电话会议</p>-->
<!--                            </div>-->
<!--                        </el-container>-->
<!--                    </section>-->
<!--                </el-col>-->
<!--                <el-col :xs="12" :sm="12" :lg="6" style="margin-bottom: 20px">-->
<!--                    <section class="panel">-->
<!--                        <el-container>-->
<!--                            <div class="symbol" style="background: #57C8F2">-->
<!--                                <img src="../assets/icon/label.png" class="icon-te"-->
<!--                                     style="height: 57px ; width:57px">-->
<!--                            </div>-->
<!--                            <div class="value" style="padding-top: 10px">-->
<!--                                <h3 style="font-size: 30px;margin: 10px">5</h3>-->
<!--                                <p class="myinline" style="margin-top: 2px">我的会议</p>-->
<!--                            </div>-->
<!--                        </el-container>-->
<!--                    </section>-->
<!--                </el-col>-->

<!--            </el-row>-->

            <div style="width: 80%;margin-left: 10%;margin-top: 2.8%">
            <blockquote style="font-size: 1.83em ; text-align: left ">
            <span style="font-family: 微软雅黑 ; font-style: italic ; margin-left: 6%">
            字典里最重要的三个词，就是意志、工作、等待。<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我将要在这三块基石上建立我成功的金字塔。——巴斯德
            </span>
            </blockquote>
            </div>
<!--        </div>-->
<!--        <el-row>-->
<!--            &lt;!&ndash;:xs="12" :sm="12" :lg="6"&ndash;&gt;-->
<!--            <el-col :xs="24" :sm="24" :lg="11">-->
<!--                <div id="myPie" ref="myPie" style="margin-top: 30px"></div>-->
<!--            </el-col>-->
<!--            <el-col :xs="24" :sm="24" :lg="13">-->
<!--                <div id="myChart" ref="myChart" style="float: left;margin-top: 30px"></div>-->
<!--            </el-col>-->

<!--        </el-row>-->
<!--    </div>-->

</template>

<script>
    // import {getFreeRoom} from '../api/room'
    // import echarts from '@/util/echarts'
    // import {getFormData,getPieData} from '../api/form';
    // // import {getUserGroup} from '../api/user'
    // // import {formatDate} from "../util/formatDate";
    //
    // export default {
    //     name: "Card",
    //     data() {
    //         return {
    //             free_num: 0,
    //             timer: null,
    //             date: new Date(),
    //             test: [320, 302, 301, 334, 390, 330, 320],
    //             cancelList: [],
    //             nameList: [],
    //             partList: [],
    //             rejectList: [],
    //             passList: [],
    //             apply: {
    //                 value: '',
    //                 name: ''
    //             },
    //             pass: {
    //                 value: '',
    //                 name: ''
    //             },
    //             reject: {
    //                 value: '',
    //                 name: ''
    //             },
    //             cancel: {
    //                 value: '',
    //                 name: ''
    //             },
    //             part: {
    //                 value: '',
    //                 name: ''
    //             },
    //         }
    //     },
    //     mounted(){
    //         getFormData().then(res => {
    //             // console.log(res.data.cancelList);
    //             // this.cancelList = [].concat(res.data.cancelList);
    //             this.cancelList = res.data.cancelList;
    //             this.nameList = res.data.nameList;
    //             this.partList = res.data.partList;
    //             this.rejectList = res.data.rejectList;
    //             this.passList = res.data.passList;
    //         }).then(() => {
    //             // console.log(this.cancelList)
    //             this.draw();
    //         });
    //         getPieData().then(res => {
    //             // console.log(res.data);
    //             this.apply = res.data.apply;
    //             this.pass = res.data.pass;
    //             this.reject = res.data.reject;
    //             this.cancel = res.data.cancel;
    //             this.part = res.data.part;
    //         }).then(() => {
    //             this.drawPie();
    //         })
    //     },
    //     created() {
    //         // getUserGroup().then(res =>{
    //         //     console.log(res.data)
    //         // });
    //         // console.log('角色');
    //         // console.log( this.$store.state.roles);
    //         this.getList();
    //         this.timer = setInterval(() => {
    //             this.getList()
    //         }, 1000 * 20);
    //
    //     },
    //     methods: {
    //         getList() {
    //             getFreeRoom().then(response => {
    //                 this.free_num = response.data;
    //                 // console.log(response.data);
    //             })
    //         }
    //     }
    // }
</script>

<style scoped>

    .shadow {
        -webkit-box-shadow: #666 0px 0px 10px;
        -moz-box-shadow: #666 0px 0px 10px;
        box-shadow: #666 0px 0px 10px;
    }

    .icon-user {

        margin-top: 19px;
        /*margin-left: 25%;*/
    }

    .icon-meeting {

        margin-top: 16px;
        /*margin-left: 16%;*/
    }

    .icon-telephone {

        margin-top: 19px;
        /*margin-left: 23%;*/
    }

    .icon-te {
        margin-top: 21px;
    }

    .panel {
        background-color: white;
        margin-bottom: 0;
        border-radius: 4px;
        height: 100%;
        width: 100%;
    }

    .symbol {
        width: 40%;
        padding: 2px 1px;
        border-radius: 4px 0px 0px 4px;
        display: inline-block;
        text-align: center;
        height: 100px;
    }

    .terques {
        background: #6CCAC9;
    }

    .red {
        background: #FE8D84;
    }

    .yellow {
        background: #6CCAC9;
    }

    .blue {
        background: #6CCAC9;
    }

    .value {
        width: 58%;;
        padding-top: 0;
        float: right;
        display: inline-block;
        text-align: center;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 480px;
    }

    span:hover {
        color: darkcyan;
    }

    .myinline {
        display:block;
        word-break: keep-all; /* 不换行 */
        white-space: nowrap; /* 不换行 */
        overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
        text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    }

    /*!*@import url(https://fonts.googleapis.com/css?family=Roboto);*!*/
    /*blockquote {*/
    /*color: darkgrey;*/
    /*!*background-color: #eae6f3;*!*/
    /*!*border-left: 1em solid #5236a0;*!*/
    /*padding: 1em 1.5em 1em 1.5em;*/
    /*position: relative;*/
    /*!*font-family: 'Roboto', sans-serif;*!*/
    /**/
    /*line-height: 150%;*/
    /*text-indent: 35px;*/
    /*}*/

    /*blockquote:before {*/
    /*color: lightgrey;*/
    /*content: "\201C";*/
    /*font-size: 5em;*/
    /*position: absolute;*/
    /*left: -15px;*/
    /*top: 40px;*/
    /*line-height: 0.1em;*/
    /*}*/

    /*blockquote:after {*/
    /*color: lightgray;*/
    /*content: "\201D";*/
    /*font-size: 5em;*/
    /*position: absolute;*/
    /*right: 15px;*/
    /*bottom: 0em;*/
    /*line-height: 0.1em;*/
    /*}*/
    #myChart {
        width: 100%;
        height: 500px;
        /*margin: 20px auto;*/
        /*border: 1px solid #CCC*/
    }
    #myPie {
        width: 100%;
        height: 500px;
        /*margin: 20px auto;*/
        /*border: 1px solid #CCC*/
    }
</style>
