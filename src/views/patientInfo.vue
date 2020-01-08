<template>
    <div>

        <div>
            <el-button type="success" style="float: right;margin-right: 20px" @click="addButton()">添加病人信息</el-button>
            <el-dialog title="添加病人信息" :visible.sync="addDialog" width="450px">

                <el-form ref="addForm" :model="addForm" label-width="80px">
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="addForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="性别" prop="gender">
                        <el-input v-model="addForm.gender"></el-input>
                    </el-form-item>
                    <el-form-item label="年龄" prop="age">
                        <el-input v-model="addForm.age"></el-input>
                    </el-form-item>
                    <el-form-item label="民族" prop="nation">
                        <el-input v-model="addForm.nation"></el-input>
                    </el-form-item>
                    <el-form-item label="婚姻状况" prop="isMarried">
                        <el-radio-group v-model="addForm.isMarried">
                            <el-radio label="已婚" value=true></el-radio>
                            <el-radio label="未婚" value=false></el-radio>
                        </el-radio-group>
                    </el-form-item>

                    <el-form-item label="出生地" prop="birthPlace">
                        <el-input v-model="addForm.birthPlace"></el-input>
                    </el-form-item>

                    <el-form-item label="入院日期" prop="inPatientDate">
                        <el-input v-model="addForm.inPatientDate"></el-input>
                    </el-form-item>

                    <el-form-item label="记录日期" prop="recordDate">
                        <el-input v-model="addForm.recordDate"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="add()">添加</el-button>
                        <el-button @click="addDialog = false">取消</el-button>
                    </el-form-item>
                </el-form>
            </el-dialog>
        </div>

        <el-table
                element-loading-text="Loading"
                :data="tableData"
                style="positon:fixed; top:20px; width: 100% "
                ref="Table"
                fit
        >
            <el-table-column
                    prop="number"
                    label="住院号"
                    align="center"
                    width="100px"
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
                            <el-form-item label="住院号" prop="number">
                                <el-input v-model="modifyForm.number" :disabled="true"></el-input>
                            </el-form-item>
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

    </div>
</template>

<script>
    import {delPatient, initPatient, listPatients, modifyPatient} from "../api/patient";

    export default {
        name: "patientInfo",
        data() {
            return {
                // 修改对话框
                modifyDialog: false,
                modifyForm: {
                    number: '',
                    name: '',
                    gender: '',
                    age: '',
                    nation: '',
                    isMarried: '',
                    birthPlace: '',
                    inPatientDate: '',
                    recordDate: ''
                },
                addDialog: false,
                addForm: {
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
            this.showDetails(); // 加载所有数据
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
                // 布尔值格式转换
                if (this.modifyForm.isMarried === "已婚") {
                    this.modifyForm.isMarried = true;
                } else {
                    this.modifyForm.isMarried = false;
                }
                // 向后端发送请求
                modifyPatient(this.modifyForm.number, this.modifyForm.name, this.modifyForm.birthPlace, this.modifyForm.gender, this.modifyForm.age, this.modifyForm.nation, this.modifyForm.isMarried, this.modifyForm.inPatientDate, this.modifyForm.recordDate).then(res => {
                    if (res.status === 0) {
                        //如果成功返回成功信息
                        this.$message({
                            type: 'success',
                            message: '修改成功!'
                        });
                        this.showDetails();//加载所有数据
                    }
                    this.modifyDialog = false;
                })
            },
            // 新增按钮
            addButton() {
                this.addDialog = true;
            },
            // 新增内容
            add() {
                // 布尔值格式转换
                if (this.addForm.isMarried === "已婚") {
                    this.addForm.isMarried = true;
                } else {
                    this.addForm.isMarried = false;
                }
                // 向后端发送请求
                initPatient(this.addForm.name, this.addForm.birthPlace, this.addForm.gender, this.addForm.age, this.addForm.nation, this.addForm.isMarried, this.addForm.inPatientDate, this.addForm.recordDate).then(res => {
                    if (res.status === 0) {
                        //如果成功返回成功信息
                        this.$message({
                            type: 'success',
                            message: '创建成功!'
                        });
                        this.showDetails();//加载所有数据
                    }
                    this.addDialog = false;
                })
            },
            // 删除
            deleteItem(patientNumber) {
                //利用修改表格，将行索引号改为病人数据库中的实际id.
                this.modifyForm = this.tableData[patientNumber];
                patientNumber = this.modifyForm.number;
                //删除处理
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

