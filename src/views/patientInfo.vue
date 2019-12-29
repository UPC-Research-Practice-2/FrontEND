<template>
    <el-table
            element-loading-text="Loading"
            :data="tableData"
            style="width: 100%"
            ref="Table"
            fit
    >
        <el-table-column
                prop="number"
                label="ID"
                align="center"
                width="60px"
                sortable>
        </el-table-column>
        <el-table-column
                prop="name"
                label="姓名"
                align="center"
                sortable>
        </el-table-column>
        <el-table-column
                prop="gender"
                label="性别"
                align="center"
                sortable>
        </el-table-column>
        <el-table-column
                prop="age"
                label="年龄"
                align="center"
                sortable>
        </el-table-column>
        <el-table-column
                prop="nation"
                label="民族"
                align="center"
                sortable>
        </el-table-column>
        <el-table-column
                prop="isMarried"
                label="婚姻状况"
                align="center">
        </el-table-column>
        <el-table-column
                prop="birthPlace"
                label="出生地"
                align="center"
                min-width="200px"
        >
        </el-table-column>
        <el-table-column
                prop="inPatientDate"
                label="入院日期"
                align="center"
                min-width="150px"
                sortable
        >
        </el-table-column>
        <el-table-column
                prop="recordDate"
                label="记录日期"
                align="center"
                min-width="150px"
                sortable
        >
        </el-table-column>
        <el-table-column
                width="300"
                align="center"
                label="操作">
            <template slot-scope="scope">
                <el-button
                        size="mini"
                        type="success"
                        @click="modifyButton(scope.$index)">修改
                </el-button>

                <el-button
                        size="mini"
                        type="danger"
                        @click="deleteItem(scope.$index)">删除
                </el-button>

                <!--修改表单-->
                <el-dialog title="修改病人信息" :visible.sync="modifyDialog" width="450px">

                    <el-form ref="modifyForm" :model="modifyForm" label-width="80px">
                        <el-form-item label="姓名" prop="name">
                            <el-input v-model="modifyForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="性别" prop="gender">
                            <el-input v-model="modifyForm.gender"></el-input>
                        </el-form-item>
                        <el-form-item label="年龄" prop="age">
                            <el-input v-model="modifyForm.age"></el-input>
                        </el-form-item>
                        <el-form-item label="民族" prop="nation">
                            <el-input v-model="modifyForm.nation"></el-input>
                        </el-form-item>
                        <el-form-item label="婚姻状况" prop="isMarried">
                            <el-radio-group v-model="modifyForm.isMarried">
                                <el-radio label="已婚" value=true></el-radio>
                                <el-radio label="未婚" value=false></el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="出生地" prop="birthPlace">
                            <el-input v-model="modifyForm.birthPlace"></el-input>
                        </el-form-item>

                        <el-form-item label="入院日期" prop="inPatientDate">
                            <el-input v-model="modifyForm.inPatientDate"></el-input>
                        </el-form-item>

                        <el-form-item label="记录日期" prop="recordDate">
                            <el-input v-model="modifyForm.recordDate"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="modify()">修改</el-button>
                            <el-button @click="modifyDialog = false">取消</el-button>
                        </el-form-item>
                    </el-form>
                </el-dialog>

            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    import {delPatient, listPatients} from "../api/patient";

    export default {
        name: "patientInfo",
        data() {
            return {
                // 修改对话框
                modifyDialog: false,
                modifyForm: {
                    name: '',
                    gender: '',
                    age: '',
                    nation: '',
                    isMarried: '',
                    birthPlace: '',
                    inPatientDate: '',
                    recordDate: ''
                },
                loading: false,
                // 主表格
                tableData: [{
                    number: '',
                    name: '',
                    gender: '',
                    age: '',
                    nation: '',
                    isMarried: '',
                    birthPlace: '',
                    inPatientDate: '',
                    recordDate: ''
                }]
            }

        },
        created() {
            this.showDetails();//获取我的会议列表
        },
        methods: {

            //加载所有数据
            showDetails() {
                this.loading = true;
                //获取resData
                listPatients().then(res => {
                    // console.log(res);
                    this.tableData = res.data;
                })
            },
            // 修改按钮
            modifyButton(patientNumber) {
                this.modifyDialog = true;
                this.modifyForm = this.tableData[patientNumber];
            },
            // 修改内容
            modify() {

            },
            // 删除
            deleteItem(patientNumber) {
                this.$confirm('此操作将永久删除该病人信息，是否继续？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    delPatient(patientNumber).then(res => {
                        if (res.status === 0) {
                            //如果成功返回成功信息
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                            this.showDetails();//获取我的会议列表
                            this.showPage();
                        }
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除。'
                    });
                });
                //重新加载表格
            }
        }
    }
</script>

