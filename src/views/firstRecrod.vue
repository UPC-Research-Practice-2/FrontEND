<template>
    <el-table
            element-loading-text="Loading"
            :data="tableData"
            style="width: 100% "
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
                prop="zhusu"
                label="主诉"
                align="center">
            <template slot-scope="scope">
                <el-button
                        size="mini"
                        @click="zhusuBtn(scope.$index)">查看 / 编辑
                </el-button>
                <!--修改表单-->
                <el-dialog title="主诉记录" :visible.sync="zhusuDialog" width="450px">
                    <el-form ref="zhusuForm" :model="zhusuForm" label-width="80px">
                        <el-form-item label="主诉记录" prop="zhusu">
                            <el-input
                                    type="textarea"
                                    :autosize="{ minRows: 5, maxRows: 15}"
                                    placeholder="主诉"
                                    v-model="zhusuForm.description">
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary"
                                       @click="zhusu(zhusuForm.patientNumber, zhusuForm.description)">修改
                            </el-button>
                            <el-button @click="zhusuDialog = false">关闭</el-button>
                        </el-form-item>
                    </el-form>
                </el-dialog>
            </template>
        </el-table-column>

        <el-table-column
                prop="current"
                label="现病史"
                align="center">
            <template slot-scope="scope">
                <el-button
                        size="mini"
                        @click="currentBtn(scope.$index)">查看 / 编辑
                </el-button>
                <!--修改表单-->
                <el-dialog title="现病史" :visible.sync="currentDialog" width="450px">
                    <el-form ref="currentForm" :model="currentForm" label-width="80px">
                        <el-form-item label="现病史" prop="current">
                            <el-input
                                    type="textarea"
                                    :autosize="{ minRows: 5, maxRows: 15}"
                                    placeholder="现病史"
                                    v-model="currentForm.description">
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary"
                                       @click="current(currentForm.patientNumber, currentForm.description)">修改
                            </el-button>
                            <el-button @click="currentDialog = false">关闭</el-button>
                        </el-form-item>
                    </el-form>
                </el-dialog>
            </template>
        </el-table-column>

        <el-table-column
                prop="history"
                label="既往史"
                align="center">
            <template slot-scope="scope">
                <el-button
                        size="mini"
                        @click="historyBtn(scope.$index)">查看 / 编辑
                </el-button>
                <!--修改表单-->
                <el-dialog title="既往史" :visible.sync="historyDialog" width="450px">
                    <el-form ref="historyForm" :model="historyForm" label-width="80px">
                        <el-form-item label="既往史" prop="history">
                            <el-input
                                    type="textarea"
                                    :autosize="{ minRows: 5, maxRows: 15}"
                                    placeholder="既往史"
                                    v-model="historyForm.description">
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary"
                                       @click="history(historyForm.patientNumber, historyForm.description)">修改
                            </el-button>
                            <el-button @click="historyDialog = false">关闭</el-button>
                        </el-form-item>
                    </el-form>
                </el-dialog>
            </template>
        </el-table-column>

        <el-table-column
                prop="personal"
                label="个人情况"
                align="center">
            <template slot-scope="scope">
                <el-button
                        size="mini"
                        @click="personalBtn(scope.$index)">查看 / 编辑
                </el-button>
                <!--修改表单-->
                <el-dialog title="个人情况" :visible.sync="personalDialog" width="450px">
                    <el-form ref="personalForm" :model="personalForm" label-width="80px">
                        <el-form-item label="个人史" prop="personalHistory">
                            <el-input
                                    type="textarea"
                                    :autosize="{ minRows: 5, maxRows: 10}"
                                    placeholder="个人史"
                                    v-model="personalForm.personalHistory">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="婚育史" prop="marriageHistory">
                            <el-input
                                    type="textarea"
                                    :autosize="{ minRows: 3, maxRows: 5}"
                                    placeholder="婚育史"
                                    v-model="personalForm.marriageHistory">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="家族史" prop="familyHistory">
                            <el-input
                                    type="textarea"
                                    :autosize="{ minRows: 3, maxRows: 5}"
                                    placeholder="家族史"
                                    v-model="personalForm.familyHistory">
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary"
                                       @click="personal(personalForm.patientNumber, personalForm.personalHistory, personalForm.marriageHistory,personalForm.familyHistory )">
                                修改
                            </el-button>
                            <el-button @click="personalDialog = false">关闭</el-button>
                        </el-form-item>
                    </el-form>
                </el-dialog>
            </template>
        </el-table-column>

    </el-table>

</template>

<script>
    import {listPatients} from "../api/patient";
    import {getPFRDetail, setPFRDetail} from "../api/pfr";

    export default {
        name: "firstRecrod",
        data() {
            return {
                zhusuDialog: false,
                zhusuForm: {
                    description: '',
                    patientNumber: ''
                },
                currentDialog: false,
                currentForm: {
                    description: '',
                    patientNumber: ''
                },
                historyDialog: false,
                historyForm: {
                    description: '',
                    patientNumber: ''
                },
                personalDialog: false,
                personalForm: {
                    personalHistory: '',
                    marriageHistory: '',
                    familyHistory: '',
                    patientNumber: ''
                },
                loading: false,
                // 主表格
                tableData: [{
                    number: '',
                    name: ''
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
            zhusuBtn(index) {
                var patientNumber = this.tableData[index].number;
                this.zhusuForm.patientNumber = patientNumber;
                this.zhusuDialog = true;

                getPFRDetail(patientNumber).then(res => {
                    // console.log(res);
                    this.zhusuForm.description = res.data.zhusu;
                })
            },
            zhusu(patientNumber, desc) {
                setPFRDetail(patientNumber, 'zhusu', desc).then(res => {
                    if (res.status === 0) {
                        this.$message({
                            message: '修改成功！',
                            type: 'success'
                        });
                    }
                });
                this.zhusuDialog = false;
            },
            currentBtn(index) {
                var patientNumber = this.tableData[index].number;
                this.currentForm.patientNumber = patientNumber;
                this.currentDialog = true;

                getPFRDetail(patientNumber).then(res => {
                    // console.log(res);
                    this.currentForm.description = res.data.current;
                })
            },
            current(patientNumber, desc) {
                setPFRDetail(patientNumber, 'current', desc).then(res => {
                    if (res.status === 0) {
                        this.$message({
                            message: '修改成功！',
                            type: 'success'
                        });
                    }
                });
                this.currentDialog = false;
            },
            historyBtn(index) {
                var patientNumber = this.tableData[index].number;
                this.historyForm.patientNumber = patientNumber;
                this.historyDialog = true;

                getPFRDetail(patientNumber).then(res => {
                    // console.log(res);
                    this.historyForm.description = res.data.history;
                })
            },
            history(patientNumber, desc) {
                setPFRDetail(patientNumber, 'history', desc).then(res => {
                    if (res.status === 0) {
                        this.$message({
                            message: '修改成功！',
                            type: 'success'
                        });
                    }
                });
                this.historyDialog = false;
            },
            personalBtn(index) {
                var patientNumber = this.tableData[index].number;
                this.personalForm.patientNumber = patientNumber;
                this.personalDialog = true;

                getPFRDetail(patientNumber).then(res => {
                    // console.log(res);
                    this.personalForm.personalHistory = res.data.personalHistory;
                    this.personalForm.marriageHistory = res.data.marriageHistory;
                    this.personalForm.familyHistory = res.data.familyHistory;
                })
            },
            personal(patientNumber, personalHistory, marriageHistory, familyHistory) {
                var flag = true;
                setPFRDetail(patientNumber, 'personalHistory', personalHistory).then(res => {
                    if (res.status != 0) {
                        flag = false;
                    }
                });
                setPFRDetail(patientNumber, 'marriageHistory', marriageHistory).then(res => {
                    if (res.status != 0) {
                        flag = false;
                    }
                });
                setPFRDetail(patientNumber, 'familyHistory', familyHistory).then(res => {
                    if (res.status != 0) {
                        flag = false;
                    }
                });

                if (flag === true) {
                    this.$message({
                        message: '修改成功！',
                        type: 'success'
                    });
                }
                flag = true;
                this.personalDialog = false;
            }
        }

    }
</script>

<style scoped>

</style>