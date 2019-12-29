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
                label="阶段"
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
                prop="description"
                label="病情描述"
                align="center">
            <template slot-scope="scope">
                <el-button
                        size="mini"
                        type="primary"
                        @click="descriptionBtn(scope.$index)">查看 / 编辑
                </el-button>
                <!--修改表单-->
                <el-dialog title="病情描述" :visible.sync="descriptionDialog" width="450px">
                    <el-form ref="descriptionForm" :model="descriptionForm" label-width="80px">
                        <el-form-item label="病情描述" prop="description">
                            <el-input
                                    type="textarea"
                                    :autosize="{ minRows: 3, maxRows: 10}"
                                    placeholder="病情描述"
                                    v-model="descriptionForm.description">
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary"
                                       @click="modifyDescription(scope.$index, descriptionForm.description)">修改
                            </el-button>
                            <el-button @click="descriptionDialog = false">取消</el-button>
                        </el-form-item>
                    </el-form>
                </el-dialog>
            </template>
        </el-table-column>
        <el-table-column
                prop="comparison"
                label="病情对比"
                align="center">
            <template slot-scope="scope">
                <el-button
                        size="mini"
                        type="primary"
                        @click="comparisonBtn(scope.$index)">查看 / 编辑
                </el-button>
                <!--修改表单-->
                <el-dialog title="病情对比" :visible.sync="comparisonDialog" width="450px">
                    <el-form ref="comparisonForm" :model="comparisonForm" label-width="80px">
                        <el-form-item label="病情对比" prop="comparison">
                            <el-input
                                    type="textarea"
                                    :autosize="{ minRows: 3, maxRows: 10}"
                                    placeholder="病情对比"
                                    v-model="comparisonForm.comparison">
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary"
                                       @click="modifyComparison(scope.$index, comparisonForm.comparison)">修改
                            </el-button>
                            <el-button @click="comparisonDialog = false">取消</el-button>
                        </el-form-item>
                    </el-form>
                </el-dialog>
            </template>
        </el-table-column>
        <el-table-column
                prop="recoverySituation"
                label="恢复情况"
                align="center">
            <template slot-scope="scope">
                <el-button
                        size="mini"
                        type="primary"
                        @click="recoverySituationBtn(scope.$index)">查看 / 编辑
                </el-button>
                <!--修改表单-->
                <el-dialog title="恢复情况" :visible.sync="recoverySituationDialog" width="450px">
                    <el-form ref="recoverySituationForm" :model="recoverySituationForm" label-width="80px">
                        <el-form-item label="恢复情况" prop="recoverySituation">
                            <el-input
                                    type="textarea"
                                    :autosize="{ minRows: 3, maxRows: 10}"
                                    placeholder="病情对比"
                                    v-model="recoverySituationForm.recoverySituation">
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary"
                                       @click="modifyRecoverySituation(scope.$index, recoverySituationForm.recoverySituation)">修改
                            </el-button>
                            <el-button @click="recoverySituationDialog = false">取消</el-button>
                        </el-form-item>
                    </el-form>
                </el-dialog>
            </template>
        </el-table-column>
        <el-table-column
                prop="createTime"
                label="记录日期"
                align="center"
                min-width="150px"
                sortable
        >
        </el-table-column>
    </el-table>
</template>

<script>
    import {setRecord, getDescription, getComparison, listRecords, getRecoverySituation} from "../api/record";
    import {rejectConference} from "../api/conference";

    export default {
        name: "RecordInfo",
        data() {
            return {
                // 主表格
                loading: false,
                tableData: [{
                    number: '',
                    name: '',
                    createTime: ''
                }],
                descriptionDialog: false,
                descriptionForm: {
                    description: ''
                },
                comparisonDialog: false,
                comparisonForm: {
                    comparison: ''
                },
                recoverySituationDialog: false,
                recoverySituationForm: {
                    recoverySituation: ''
                }
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
                listRecords().then(res => {
                    // console.log(res);
                    this.tableData = res.data;
                })
            },
            descriptionBtn(Number) {
                var stageID = this.tableData[Number].number
                this.descriptionDialog = true;
                getDescription(stageID).then(res => {
                    // console.log(res);
                    this.descriptionForm.description = res.data;
                })
            },
            modifyDescription(Number, desc) {
                var stageID = this.tableData[Number].number;
                setRecord('description', stageID, desc).then(res => {
                    if (res.status === 0) {
                        this.$message({
                            message: '修改成功！',
                            type: 'success'
                        });
                    }
                });
                this.descriptionDialog = false;
            },
            comparisonBtn(Number) {
                var stageID = this.tableData[Number].number;
                this.comparisonDialog = true;
                getComparison(stageID).then(res => {
                    // console.log(res);
                    this.comparisonForm.comparison = res.data;
                })
            },
            modifyComparison(Number, desc) {
                var stageID = this.tableData[Number].number;
                setRecord('comparison', stageID, desc).then(res => {
                    if (res.status === 0) {
                        this.$message({
                            message: '修改成功！',
                            type: 'success'
                        });
                    }
                });
                this.comparisonDialog = false;
            },
            recoverySituationBtn(Number) {
                var stageID = this.tableData[Number].number;
                this.recoverySituationDialog = true;
                getRecoverySituation(stageID).then(res => {
                    // console.log(res);
                    this.recoverySituationForm.recoverySituation = res.data;
                })
            },
            modifyRecoverySituation(Number, desc) {
                var stageID = this.tableData[Number].number;
                setRecord('recoverySituation', stageID, desc).then(res => {
                    if (res.status === 0) {
                        this.$message({
                            message: '修改成功！',
                            type: 'success'
                        });
                    }
                });
                this.comparisonDialog = false;
            }

        }
    }
</script>

<style scoped>

</style>