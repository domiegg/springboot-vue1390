







<template>
    <div class="main-content">
        <el-dialog :title="xiangmuYesnoTypesVisibleTitle" :visible.sync="xiangmuYesnoTypesVisible">
            <el-form :model="shenheData">
                <input type="hidden" v-model="form.id">
                <el-form-item label="审核" >
                    <el-select v-model="shenheData.shenherenTypes" placeholder="请选择审核类型">
                        <el-option label="通过" value="2"></el-option>
                        <el-option label="拒绝" value="3"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="审核意见" >
                    <el-input type="textarea" style="width: 500px;" v-model="shenheData.shenherenContent" placeholder="审核意见"></el-input>
                </el-form-item>
                
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="xiangmuYesnoTypesVisible = false">取 消</el-button>
                <el-button type="primary" @click="xiangmuYesnoTypesShenhe">提 交</el-button>
            </div>
        </el-dialog>
        <!-- 条件查询 -->
        <div v-if="showFlag">
            <el-form :inline="true" :model="searchForm" class="form-content">
                <el-row :gutter="20" class="slt" :style="{justifyContent:contents.searchBoxPosition=='1'?'flex-start':contents.searchBoxPosition=='2'?'center':'flex-end'}">
                 
                     <el-form-item :label="contents.inputTitle == 1 ? '项目唯一标识' : ''">
                         <el-input prefix-icon="el-icon-search" v-model="searchForm.xiangmuUuidNumber" placeholder="项目唯一标识" clearable></el-input>
                     </el-form-item>
                 
                     <el-form-item :label="contents.inputTitle == 1 ? '项目名称' : ''">
                         <el-input prefix-icon="el-icon-search" v-model="searchForm.xiangmuName" placeholder="项目名称" clearable></el-input>
                     </el-form-item>
                                                 
                     <el-form-item :label="contents.inputTitle == 1 ? '项目管理员审核结果' : ''">
                        <el-select v-model="searchForm.xiangmuYesnoTypes" placeholder="请选择项目管理员审核结果">
                            <el-option label="=-请选择-=" value=""></el-option>
                            <el-option
                               v-for="(item,index) in xiangmuYesnoTypesSelectSearch"
                               v-bind:key="index"
                               :label="item.indexName"
                               :value="item.codeIndex">
                            <!--lable是要展示的名称-->
                            <!--value是值-->
                            </el-option>
                        </el-select>
                     </el-form-item>
                    <el-form-item :label="contents.inputTitle == 1 ? '专家1的唯一标识' : ''">
                        <el-input prefix-icon="el-icon-search" v-model="searchForm.zhuanjia1UuidNumber" placeholder="专家1的唯一标识" clearable></el-input>
                    </el-form-item>
    
                    <el-form-item :label="contents.inputTitle == 1 ? '专家1的审核结果' : ''">
                        <el-select v-model="searchForm.zhuanjia1Types" placeholder="请选择专家1的审核结果">
                            <el-option label="=-请选择-=" value=""></el-option>
                            <el-option
                                    v-for="(item,index) in zhuanjia1TypesSelectSearch"
                                    v-bind:key="index"
                                    :label="item.indexName"
                                    :value="item.codeIndex">
                                <!--lable是要展示的名称-->
                                <!--value是值-->
                            </el-option>
                        </el-select>
                    </el-form-item>


                </el-row>
                <el-row :gutter="20" class="slt" :style="{justifyContent:contents.searchBoxPosition=='1'?'flex-start':contents.searchBoxPosition=='2'?'center':'flex-end'}">
    
                    

                 
                     <el-form-item :label="contents.inputTitle == 1 ? '专家2的唯一标识' : ''">
                         <el-input prefix-icon="el-icon-search" v-model="searchForm.zhuanjia2UuidNumber" placeholder="专家2的唯一标识" clearable></el-input>
                     </el-form-item>
                 
                     <el-form-item :label="contents.inputTitle == 1 ? '专家2的审核结果' : ''">
                        <el-select v-model="searchForm.zhuanjia2Types" placeholder="请选择专家2的审核结果">
                            <el-option label="=-请选择-=" value=""></el-option>
                            <el-option
                               v-for="(item,index) in zhuanjia2TypesSelectSearch"
                               v-bind:key="index"
                               :label="item.indexName"
                               :value="item.codeIndex">
                            <!--lable是要展示的名称-->
                            <!--value是值-->
                            </el-option>
                        </el-select>
                     </el-form-item>

                 
                     <el-form-item :label="contents.inputTitle == 1 ? '专家3的唯一标识' : ''">
                         <el-input prefix-icon="el-icon-search" v-model="searchForm.zhuanjia3UuidNumber" placeholder="专家3的唯一标识" clearable></el-input>
                     </el-form-item>
                 
                     <el-form-item :label="contents.inputTitle == 1 ? '专家3的审核结果' : ''">
                        <el-select v-model="searchForm.zhuanjia3Types" placeholder="请选择专家3的审核结果">
                            <el-option label="=-请选择-=" value=""></el-option>
                            <el-option
                               v-for="(item,index) in zhuanjia3TypesSelectSearch"
                               v-bind:key="index"
                               :label="item.indexName"
                               :value="item.codeIndex">
                            <!--lable是要展示的名称-->
                            <!--value是值-->
                            </el-option>
                        </el-select>
                     </el-form-item>

                 
                     <el-form-item :label="contents.inputTitle == 1 ? '最终审核结果' : ''">
                        <el-select v-model="searchForm.zuizhongTypes" placeholder="请选择最终审核结果">
                            <el-option label="=-请选择-=" value=""></el-option>
                            <el-option
                               v-for="(item,index) in zuizhongTypesSelectSearch"
                               v-bind:key="index"
                               :label="item.indexName"
                               :value="item.codeIndex">
                            <!--lable是要展示的名称-->
                            <!--value是值-->
                            </el-option>
                        </el-select>
                     </el-form-item>

        
                                         
                    <el-form-item :label="contents.inputTitle == 1 ? '项目管理员姓名' : ''">
                        <el-input prefix-icon="el-icon-search" v-model="searchForm.xiangmuguanliyuanName" placeholder="项目管理员姓名" clearable></el-input>
                    </el-form-item>
                     
                    <el-form-item :label="contents.inputTitle == 1 ? '联系电话' : ''">
                        <el-input prefix-icon="el-icon-search" v-model="searchForm.xiangmuguanliyuanPhone" placeholder="联系电话" clearable></el-input>
                    </el-form-item>
                                                                                                                         
                    <el-form-item :label="contents.inputTitle == 1 ? '用户姓名' : ''">
                        <el-input prefix-icon="el-icon-search" v-model="searchForm.yonghuName" placeholder="用户姓名" clearable></el-input>
                    </el-form-item>
                     
                    <el-form-item :label="contents.inputTitle == 1 ? '联系电话' : ''">
                        <el-input prefix-icon="el-icon-search" v-model="searchForm.yonghuPhone" placeholder="联系电话" clearable></el-input>
                    </el-form-item>
                                                                                

                    <el-form-item>
                        <el-button type="success" @click="search()">查询<i class="el-icon-search el-icon--right"/></el-button>
                    </el-form-item>
                </el-row>
                <el-row class="ad" :style="{justifyContent:contents.btnAdAllBoxPosition=='1'?'flex-start':contents.btnAdAllBoxPosition=='2'?'center':'flex-end'}">
                    <el-form-item>
                        <el-button
                                v-if="isAuth('xiangmu','新增')"
                                type="success"
                                icon="el-icon-plus"
                                @click="addOrUpdateHandler()"
                        >新增</el-button>
                        <el-button
                                v-if="isAuth('xiangmu','删除')"
                                :disabled="dataListSelections.length <= 0"
                                type="danger"
                                icon="el-icon-delete"
                                @click="deleteHandler()"
                        >删除</el-button>
                        <el-button
                                v-if="isAuth('xiangmu','报表')"
                                type="success"
                                icon="el-icon-pie-chart"
                                @click="chartDialog()"
                        >报表</el-button>
                        <!-- 导出excel -->
                        <download-excel v-if="isAuth('xiangmu','导出')" class = "export-excel-wrapper" :data = "dataList" :fields = "json_fields" name = "统计.xls">
                            <!-- 导出excel -->
                            <el-button
                                    type="primary"
                                    icon="el-icon-download"
                            >导出</el-button>
                        </download-excel>
                    </el-form-item>
                </el-row>
            </el-form>
            <div class="table-content">
                <el-table class="tables" :size="contents.tableSize" :show-header="contents.tableShowHeader"
                          :header-row-style="headerRowStyle" :header-cell-style="headerCellStyle"
                          :border="contents.tableBorder"
                          :fit="contents.tableFit"
                          :stripe="contents.tableStripe"
                          :row-style="rowStyle"
                          :cell-style="cellStyle"
                          :style="{width: '100%',fontSize:contents.tableContentFontSize,color:contents.tableContentFontColor}"
                          v-if="isAuth('xiangmu','查看')"
                          :data="dataList"
                          v-loading="dataListLoading"
                          @selection-change="selectionChangeHandler">
                    <el-table-column  v-if="contents.tableSelection"
                                      type="selection"
                                      header-align="center"
                                      align="center"
                                      width="50">
                    </el-table-column>
                    <el-table-column label="索引" v-if="contents.tableIndex" type="index" width="50" />
                    <el-table-column  :sortable="contents.tableSortable" :align="contents.tableAlign"
                                      prop="yonghuName"
                                      header-align="center"
                                      label="用户姓名">
                        <template slot-scope="scope">
                            {{scope.row.yonghuName}}
                        </template>
                    </el-table-column>

                    <el-table-column  :sortable="contents.tableSortable" :align="contents.tableAlign"
                                   prop="xiangmuUuidNumber"
                                   header-align="center"
                                   label="项目唯一标识">
                        <template slot-scope="scope">
                            {{scope.row.xiangmuUuidNumber}}
                        </template>
                    </el-table-column>

                    <el-table-column  :sortable="contents.tableSortable" :align="contents.tableAlign"
                                   prop="xiangmuName"
                                   header-align="center"
                                   label="项目名称">
                        <template slot-scope="scope">
                            {{scope.row.xiangmuName}}
                        </template>
                    </el-table-column>
                    <el-table-column :sortable="contents.tableSortable" :align="contents.tableAlign" prop="xiangmuPhoto"
                                     header-align="center"
                                     width="200"
                                     label="项目照片">
                        <template slot-scope="scope">
                            <div v-if="scope.row.xiangmuPhoto">
                                <img :src="scope.row.xiangmuPhoto" width="100" height="100">
                            </div>
                            <div v-else>无图片</div>
                        </template>
                    </el-table-column>
                    <el-table-column  :sortable="contents.tableSortable" :align="contents.tableAlign"
                                      prop="xiangmuTypes"
                                      header-align="center"
                                      label="项目类型">
                        <template slot-scope="scope">
                            {{scope.row.xiangmuValue}}
                        </template>
                    </el-table-column>
                    <el-table-column :sortable="contents.tableSortable" :align="contents.tableAlign" prop="xiangmuFile"
                                     header-align="center"
                                     width="200"
                                     label="验收申请书">
                        <template slot-scope="scope">
                            <div v-if="scope.row.xiangmuFile">
                                <!--<el-button type="text"  @click="download(scope.row.xiangmuFile)">下载</el-button>-->
                                <a type="text" style="text-decoration:none" class="el-button" :href="scope.row.xiangmuFile"  >下载</a>
                            </div>
                            <div v-else>无文件</div>
                        </template>
                    </el-table-column>
                    <el-table-column  :sortable="contents.tableSortable" :align="contents.tableAlign"
                                      prop="xiangmuguanliyuanName"
                                      header-align="center"
                                      label="项目管理员姓名">
                        <template slot-scope="scope">
                            {{scope.row.xiangmuguanliyuanName}}
                        </template>
                    </el-table-column>
                    <el-table-column  :sortable="contents.tableSortable" :align="contents.tableAlign"
                                      prop="xiangmuguanliyuanPhone"
                                      header-align="center"
                                      label="联系电话">
                        <template slot-scope="scope">
                            {{scope.row.xiangmuguanliyuanPhone}}
                        </template>
                    </el-table-column>
                    <el-table-column  :sortable="contents.tableSortable" :align="contents.tableAlign"
                                      prop="xiangmuguanliyuanIdNumber"
                                      header-align="center"
                                      label="项目管理员身份证号">
                        <template slot-scope="scope">
                            {{scope.row.xiangmuguanliyuanIdNumber}}
                        </template>
                    </el-table-column>
                    
                    <el-table-column  :sortable="contents.tableSortable" :align="contents.tableAlign"
                                      prop="xiangmuYesnoTypes"
                                      header-align="center"
                                      label="项目管理员审核结果">
                        <template slot-scope="scope">
                            {{scope.row.xiangmuYesnoValue}}
                        </template>
                    </el-table-column>

                    <el-table-column  :sortable="contents.tableSortable" :align="contents.tableAlign"
                                   prop="zhuanjia1UuidNumber"
                                   header-align="center"
                                   label="专家1的唯一标识">
                        <template slot-scope="scope">
                            {{scope.row.zhuanjia1UuidNumber}}
                        </template>
                    </el-table-column>

                    <el-table-column  :sortable="contents.tableSortable" :align="contents.tableAlign"
                                   prop="zhuanjia1Name"
                                   header-align="center"
                                   label="专家1姓名">
                        <template slot-scope="scope">
                            {{scope.row.zhuanjia1Name}}
                        </template>
                    </el-table-column>
                    <el-table-column  :sortable="contents.tableSortable" :align="contents.tableAlign"
                                      prop="zhuanjia1Types"
                                      header-align="center"
                                      label="专家1的审核结果">
                        <template slot-scope="scope">
                            {{scope.row.zhuanjia1Value}}
                        </template>
                    </el-table-column>

                    <el-table-column  :sortable="contents.tableSortable" :align="contents.tableAlign"
                                   prop="zhuanjia2UuidNumber"
                                   header-align="center"
                                   label="专家2的唯一标识">
                        <template slot-scope="scope">
                            {{scope.row.zhuanjia2UuidNumber}}
                        </template>
                    </el-table-column>

                    <el-table-column  :sortable="contents.tableSortable" :align="contents.tableAlign"
                                   prop="zhuanjia2Name"
                                   header-align="center"
                                   label="专家2姓名">
                        <template slot-scope="scope">
                            {{scope.row.zhuanjia2Name}}
                        </template>
                    </el-table-column>
                    <el-table-column  :sortable="contents.tableSortable" :align="contents.tableAlign"
                                      prop="zhuanjia2Types"
                                      header-align="center"
                                      label="专家2的审核结果">
                        <template slot-scope="scope">
                            {{scope.row.zhuanjia2Value}}
                        </template>
                    </el-table-column>

                    <el-table-column  :sortable="contents.tableSortable" :align="contents.tableAlign"
                                   prop="zhuanjia3UuidNumber"
                                   header-align="center"
                                   label="专家3的唯一标识">
                        <template slot-scope="scope">
                            {{scope.row.zhuanjia3UuidNumber}}
                        </template>
                    </el-table-column>

                    <el-table-column  :sortable="contents.tableSortable" :align="contents.tableAlign"
                                   prop="zhuanjia3Name"
                                   header-align="center"
                                   label="专家3姓名">
                        <template slot-scope="scope">
                            {{scope.row.zhuanjia3Name}}
                        </template>
                    </el-table-column>
                    <el-table-column  :sortable="contents.tableSortable" :align="contents.tableAlign"
                                      prop="zhuanjia3Types"
                                      header-align="center"
                                      label="专家3的审核结果">
                        <template slot-scope="scope">
                            {{scope.row.zhuanjia3Value}}
                        </template>
                    </el-table-column>
                    <el-table-column  :sortable="contents.tableSortable" :align="contents.tableAlign"
                                      prop="zuizhongTypes"
                                      header-align="center"
                                      label="最终审核结果">
                        <template slot-scope="scope">
                            {{scope.row.zuizhongValue}}
                        </template>
                    </el-table-column>

                    <el-table-column width="300" :align="contents.tableAlign"
                                     header-align="center"
                                     label="操作">
                        <template slot-scope="scope">
                            <el-button v-if="isAuth('xiangmu','查看')" type="success" icon="el-icon-tickets" size="mini" @click="addOrUpdateHandler(scope.row.id,'info')">{{ contents.tableBtnFont == 1?'详情':'' }}</el-button>
                            <!--<el-button v-if="isAuth('xiangmu','修改')" type="primary" icon="el-icon-edit" size="mini" @click="addOrUpdateHandler(scope.row.id)">{{ contents.tableBtnFont == 1?'修改':'' }}</el-button>-->
                            <el-button v-if="isAuth('xiangmu','删除')" type="danger" icon="el-icon-delete" size="mini" @click="deleteHandler(scope.row.id)">{{ contents.tableBtnFont == 1?'删除':'' }}</el-button>
                            <el-button v-if="isAuth('xiangmu','修改') && scope.row.xiangmuYesnoTypes == 1 && role == '项目管理员' " type="primary" icon="el-icon-thumb" size="mini" @click="openYesnoTypes(scope.row.id,'1')">项目管理员审核</el-button>
                            <el-button v-if="isAuth('xiangmu','修改') && (scope.row.zhuanjia1Types == 1 || scope.row.zhuanjia2Types == 1 || scope.row.zhuanjia3Types == 1) && role == '专家账户'  &&  scope.row.xiangmuYesnoTypes == 2 " type="primary" icon="el-icon-thumb" size="mini" @click="openYesnoTypes(scope.row.id,'2')">专家审核</el-button>

                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination
                        clsss="pages"
                        :layout="layouts"
                        @size-change="sizeChangeHandle"
                        @current-change="currentChangeHandle"
                        :current-page="pageIndex"
                        :page-sizes="[10, 20, 50, 100]"
                        :page-size="Number(contents.pageEachNum)"
                        :total="totalPage"
                        :small="contents.pageStyle"
                        class="pagination-content"
                        :background="contents.pageBtnBG"
                        :style="{textAlign:contents.pagePosition==1?'left':contents.pagePosition==2?'center':'right'}"
                ></el-pagination>
            </div>
        </div>
        <!-- 添加/修改页面  将父组件的search方法传递给子组件-->
        <add-or-update v-if="addOrUpdateFlag" :parent="this" ref="addOrUpdate"></add-or-update>



        <el-dialog title="统计报表" :visible.sync="chartVisiable" width="800">
            <el-date-picker
                    v-model="echartsDate"
                    type="year"
                    placeholder="选择年">
            </el-date-picker>
            <el-button @click="chartDialog()">查询</el-button>
            <div id="statistic" style="width:100%;height:600px;"></div>
            <span slot="footer" class="dialog-footer">
				<el-button @click="chartVisiable = false">返回</el-button>
			</span>
        </el-dialog>

    </div>
</template>
<script>
    import AddOrUpdate from "./add-or-update";
    import styleJs from "../../../utils/style.js";
    export default {
        data() {
        return {
            searchForm: {
                key: ""
            },
            sessionTable : "",//登录账户所在表名
            role : "",//权限
    //级联表下拉框搜索条件
    //当前表下拉框搜索条件
              xiangmuYesnoTypesSelectSearch : [],
              zhuanjia1TypesSelectSearch : [],
              zhuanjia2TypesSelectSearch : [],
              zhuanjia3TypesSelectSearch : [],
              zuizhongTypesSelectSearch : [],
            form:{
                id : null,
                xiangmuUuidNumber : null,
                yonghuId : null,
                xiangmuName : null,
                xiangmuPhoto : null,
                xiangmuTypes : null,
                xiangmuFile : null,
                xiangmuContent : null,
                xiangmuguanliyuanId : null,
                xiangmuYesnoTypes : null,
                xiangmuguanliyuanContent : null,
                zhuanjia1UuidNumber : null,
                zhuanjia1Name : null,
                zhuanjia1Types : null,
                zhuanjia1YijianContent : null,
                zhuanjia2UuidNumber : null,
                zhuanjia2Name : null,
                zhuanjia2Types : null,
                zhuanjia2YijianContent : null,
                zhuanjia3UuidNumber : null,
                zhuanjia3Name : null,
                zhuanjia3Types : null,
                zhuanjia3YijianContent : null,
                zuizhongTypes : null,
                createTime : null,
            },
            dataList: [],
            pageIndex: 1,
            pageSize: 10,
            totalPage: 0,
            dataListLoading: false,
            dataListSelections: [],
            showFlag: true,
            sfshVisiable: false,
            shForm: {},
            chartVisiable: false,
            addOrUpdateFlag:false,
            contents:null,
            layouts: '',

            echartsDate: new Date(),//echarts的时间查询字段

            xiangmuYesnoTypesVisible : false,
            xiangmuYesnoTypesVisibleTitle : "",
            shenheData:{
                id : null,//被审核的id
                shenherenTypes : "",//审核人审核结果
                shenherenContent : "",//审核意见
            },


            //导出excel
            json_fields: {
                //级联表字段
                     '项目管理员姓名': 'xiangmuguanliyuanName',
                     '联系电话': 'xiangmuguanliyuanPhone',
                     '项目管理员身份证号': 'xiangmuguanliyuanIdNumber',
                     '头像': 'xiangmuguanliyuanPhoto',
                     '电子邮箱': 'xiangmuguanliyuanEmail',
                     '住址': 'xiangmuguanliyuanAddress',
                     '用户姓名': 'yonghuName',
                     '联系电话': 'yonghuPhone',
                     '用户身份证号': 'yonghuIdNumber',
                     '头像': 'yonghuPhoto',
                     '电子邮箱': 'yonghuEmail',
                     '住址': 'yonghuAddress',
                //本表字段
                     '项目唯一标识': "xiangmuUuidNumber",
                     '项目名称': "xiangmuName",
                     '项目照片': "xiangmuPhoto",
                     '项目类型': "xiangmuTypes",
                     '验收申请书': "xiangmuFile",
                     '项目管理员审核结果': "xiangmuYesnoTypes",
                     '专家1的唯一标识': "zhuanjia1UuidNumber",
                     '专家1姓名': "zhuanjia1Name",
                     '专家1的审核结果': "zhuanjia1Types",
                     '专家2的唯一标识': "zhuanjia2UuidNumber",
                     '专家2姓名': "zhuanjia2Name",
                     '专家2的审核结果': "zhuanjia2Types",
                     '专家3的唯一标识': "zhuanjia3UuidNumber",
                     '专家3姓名': "zhuanjia3Name",
                     '专家3的审核结果': "zhuanjia3Types",
                     '最终审核结果': "zuizhongTypes",
            },

            };
        },
        created() {
            this.contents = styleJs.listStyle();
            this.init();
            this.getDataList();
            this.contentStyleChange()
        },
        mounted() {
            //获取当前登录用户的信息
            this.sessionTable = this.$storage.get("sessionTable");
            this.role = this.$storage.get("role");

        },
        filters: {
            htmlfilter: function (val) {
                return val.replace(/<[^>]*>/g).replace(/undefined/g,'');
            }
        },
        components: {
            AddOrUpdate,
        },
        computed: {
        },
        methods: {
            chartDialog() {
                let _this = this;
                let params = {
                    dateFormat :"%Y"
                    ,riqi :_this.echartsDate.getFullYear()
                    ,thisTable : {//当前表
                        tableName :"shangdian_shouyin"//当前表表名
                        ,sumColum : 'shangdian_shouyin_true_price' //求和字段
                        ,date : 'insert_time'//分组日期字段
                        // ,string : 'name,leixing'//分组字符串字段
                        // ,types : 'shangdian_shouyin_types'//分组下拉框字段
                    }
                    // ,joinTable : {//级联表（可以不存在）
                    //     tableName :"yuangong"//级联表表名
                    //     // ,date : 'insert_time'//分组日期字段
                    //     ,string : 'yuangong_name'//分组字符串字段
                    //     // ,types : 'insertTime'//分组下拉框字段
                    // }
                }
                _this.chartVisiable = true;
                _this.$nextTick(() => {
                    var statistic = this.$echarts.init(document.getElementById("statistic"), 'macarons');
                    this.$http({
                        url: "barSum",
                        method: "get",
                        params: params
                    }).then(({data}) => {
                        if(data && data.code === 0){


                            //柱状图 求和 已成功使用
                            //start
                            let series = [];//具体数据值
                            data.data.yAxis.forEach(function (item,index) {
                                let tempMap = {};
                                tempMap.name=data.data.legend[index];
                                tempMap.type='bar';
                                tempMap.data=item;
                                series.push(tempMap);

                            })

                            var option = {
                                tooltip: {
                                    trigger: 'axis',
                                    axisPointer: {
                                        type: 'cross',
                                        crossStyle: {
                                            color: '#999'
                                        }
                                    }
                                },
                                toolbox: {
                                    feature: {
                                        // dataView: { show: true, readOnly: false },  // 数据查看
                                        magicType: { show: true, type: ['line', 'bar'] },//切换图形展示方式
                                        // restore: { show: true }, // 刷新
                                        saveAsImage: { show: true }//保存
                                    }
                                },
                                legend: {
                                    data: data.data.legend//标题  可以点击导致某一列数据消失
                                },
                                xAxis: [
                                    {
                                        type: 'category',
                                        name: '月份',
                                        data: data.data.xAxis,
                                        axisPointer: {
                                            type: 'shadow'
                                        }
                                    }
                                ],
                                yAxis: [
                                    {
                                        type: 'value',//不能改
                                        name: '元',//y轴单位
                                        axisLabel: {
                                            formatter: '{value} 元' // 后缀
                                        }
                                    }
                                ],
                                series:series//具体数据
                            };
                            // 使用刚指定的配置项和数据显示图表。
                            statistic.setOption(option);
                            //根据窗口的大小变动图表
                            window.onresize = function () {
                                statistic.resize();
                            };
                            //end



                            //饼状图 原先自带的 未修改过
                            //start
                            /*let res = data.data;
                            let xAxis = [];
                            let yAxis = [];
                            let pArray = []
                            for (let i = 0; i < res.length; i++) {
                                xAxis.push(res[i].xinzi);
                                yAxis.push(res[i].total);
                                pArray.push({
                                    value: res[i].total,
                                    name: res[i].xinzi
                                })
                                var option = {};
                                option = {
                                    title: {
                                        text: '统计',
                                        left: 'center'
                                    },
                                    tooltip: {
                                        trigger: 'item',
                                        formatter: '{b} : {c} ({d}%)'
                                    },
                                    series: [{
                                        type: 'pie',
                                        radius: '55%',
                                        center: ['50%', '60%'],
                                        data: pArray,
                                        emphasis: {
                                            itemStyle: {
                                                shadowBlur: 10,
                                                shadowOffsetX: 0,
                                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                                            }
                                        }
                                    }]
                                };
                                // 使用刚指定的配置项和数据显示图表。
                                statistic.setOption(option);
                                //根据窗口的大小变动图表
                                window.onresize = function () {
                                    statistic.resize();
                                };
                            }*/

                            //end
                        }else {
                            this.$message({
                                message: "报表未查询到数据",
                                type: "success",
                                duration: 1500,
                                onClose: () => {
                                    this.search();
                                }
                            });
                        }
                    });
                });
                this.chartVisiable = !this.chartVisiable;
                this.$nextTick(() => {
                    var statistic = this.$echarts.init(document.getElementById("statistic"), 'macarons');
                    this.$http({
                        url: "group/xinzitongji/xinzi",
                        method: "get",
                    }).then(({data}) => {
                        if(data && data.code === 0){
                            let res = data.data;
                            let xAxis = [];
                            let yAxis = [];
                            let pArray = []
                            for (let i = 0; i < res.length; i++) {
                                xAxis.push(res[i].xinzi);
                                yAxis.push(res[i].total);
                                pArray.push({
                                    value: res[i].total,
                                    name: res[i].xinzi
                                })
                                var option = {};
                                option = {
                                    title: {
                                        text: '统计',
                                        left: 'center'
                                    },
                                    tooltip: {
                                        trigger: 'item',
                                        formatter: '{b} : {c} ({d}%)'
                                    },
                                    series: [{
                                        type: 'pie',
                                        radius: '55%',
                                        center: ['50%', '60%'],
                                        data: pArray,
                                        emphasis: {
                                            itemStyle: {
                                                shadowBlur: 10,
                                                shadowOffsetX: 0,
                                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                                            }
                                        }
                                    }]
                                };
                                // 使用刚指定的配置项和数据显示图表。
                                statistic.setOption(option);
                                //根据窗口的大小变动图表
                                window.onresize = function () {
                                    statistic.resize();
                                };
                            }
                        }
                    });
                // xcolumn ycolumn
                });
            },
            contentStyleChange() {
                this.contentSearchStyleChange()
                this.contentBtnAdAllStyleChange()
                this.contentSearchBtnStyleChange()
                this.contentTableBtnStyleChange()
                this.contentPageStyleChange()
            },
            contentSearchStyleChange() {
                this.$nextTick(() => {
                    document.querySelectorAll('.form-content .slt .el-input__inner').forEach(el => {
                        let textAlign = 'left'
                        if(this.contents.inputFontPosition == 2)
                            textAlign = 'center'
                            if (this.contents.inputFontPosition == 3) textAlign = 'right'
                                el.style.textAlign = textAlign
                            el.style.height = this.contents.inputHeight
                            el.style.lineHeight = this.contents.inputHeight
                            el.style.color = this.contents.inputFontColor
                            el.style.fontSize = this.contents.inputFontSize
                            el.style.borderWidth = this.contents.inputBorderWidth
                            el.style.borderStyle = this.contents.inputBorderStyle
                            el.style.borderColor = this.contents.inputBorderColor
                            el.style.borderRadius = this.contents.inputBorderRadius
                            el.style.backgroundColor = this.contents.inputBgColor
                    })
                    if (this.contents.inputTitle) {
                        document.querySelectorAll('.form-content .slt .el-form-item__label').forEach(el => {
                            el.style.color = this.contents.inputTitleColor
                            el.style.fontSize = this.contents.inputTitleSize
                            el.style.lineHeight = this.contents.inputHeight
                        })
                    }
                    setTimeout(() => {
                        document.querySelectorAll('.form-content .slt .el-input__prefix').forEach(el => {
                            el.style.color = this.contents.inputIconColor
                            el.style.lineHeight = this.contents.inputHeight
                        })
                        document.querySelectorAll('.form-content .slt .el-input__suffix').forEach(el => {
                            el.style.color = this.contents.inputIconColor
                            el.style.lineHeight = this.contents.inputHeight
                        })
                        document.querySelectorAll('.form-content .slt .el-input__icon').forEach(el => {
                            el.style.lineHeight = this.contents.inputHeight
                        })
                    }, 10 )
                })
            },
            // 搜索按钮
            contentSearchBtnStyleChange() {
                this.$nextTick(() => {
                    document.querySelectorAll('.form-content .slt .el-button--success').forEach(el => {
                        el.style.height = this.contents.searchBtnHeight
                        el.style.color = this.contents.searchBtnFontColor
                        el.style.fontSize = this.contents.searchBtnFontSize
                        el.style.borderWidth = this.contents.searchBtnBorderWidth
                        el.style.borderStyle = this.contents.searchBtnBorderStyle
                        el.style.borderColor = this.contents.searchBtnBorderColor
                        el.style.borderRadius = this.contents.searchBtnBorderRadius
                        el.style.backgroundColor = this.contents.searchBtnBgColor
                    })
                })
            },
            // 新增、批量删除
            contentBtnAdAllStyleChange() {
                this.$nextTick(() => {
                    document.querySelectorAll('.form-content .ad .el-button--success').forEach(el => {
                        el.style.height = this.contents.btnAdAllHeight
                        el.style.color = this.contents.btnAdAllAddFontColor
                        el.style.fontSize = this.contents.btnAdAllFontSize
                        el.style.borderWidth = this.contents.btnAdAllBorderWidth
                        el.style.borderStyle = this.contents.btnAdAllBorderStyle
                        el.style.borderColor = this.contents.btnAdAllBorderColor
                        el.style.borderRadius = this.contents.btnAdAllBorderRadius
                        el.style.backgroundColor = this.contents.btnAdAllAddBgColor
                    })
                    document.querySelectorAll('.form-content .ad .el-button--danger').forEach(el => {
                        el.style.height = this.contents.btnAdAllHeight
                        el.style.color = this.contents.btnAdAllDelFontColor
                        el.style.fontSize = this.contents.btnAdAllFontSize
                        el.style.borderWidth = this.contents.btnAdAllBorderWidth
                        el.style.borderStyle = this.contents.btnAdAllBorderStyle
                        el.style.borderColor = this.contents.btnAdAllBorderColor
                        el.style.borderRadius = this.contents.btnAdAllBorderRadius
                        el.style.backgroundColor = this.contents.btnAdAllDelBgColor
                    })
                    document.querySelectorAll('.form-content .ad .el-button--warning').forEach(el => {
                        el.style.height = this.contents.btnAdAllHeight
                        el.style.color = this.contents.btnAdAllWarnFontColor
                        el.style.fontSize = this.contents.btnAdAllFontSize
                        el.style.borderWidth = this.contents.btnAdAllBorderWidth
                        el.style.borderStyle = this.contents.btnAdAllBorderStyle
                        el.style.borderColor = this.contents.btnAdAllBorderColor
                        el.style.borderRadius = this.contents.btnAdAllBorderRadius
                        el.style.backgroundColor = this.contents.btnAdAllWarnBgColor
                    })
                })
            },
            // 表格
            rowStyle({row, rowIndex}) {
                if (rowIndex % 2 == 1) {
                    if (this.contents.tableStripe) {
                        return {color: this.contents.tableStripeFontColor}
                    }
                } else {
                    return ''
                }
            },
            cellStyle({row, rowIndex}) {
                if (rowIndex % 2 == 1) {
                    if (this.contents.tableStripe) {
                        return {backgroundColor: this.contents.tableStripeBgColor}
                    }
                } else {
                    return ''
                }
            },
            headerRowStyle({row, rowIndex}) {
                return {color: this.contents.tableHeaderFontColor}
            },
            headerCellStyle({row, rowIndex}) {
                return {backgroundColor: this.contents.tableHeaderBgColor}
            },
            // 表格按钮
            contentTableBtnStyleChange() {
                // this.$nextTick(()=>{
                //   setTimeout(()=>{
                //     document.querySelectorAll('.table-content .tables .el-table__body .el-button--success').forEach(el=>{
                //       el.style.height = this.contents.tableBtnHeight
                //       el.style.color = this.contents.tableBtnDetailFontColor
                //       el.style.fontSize = this.contents.tableBtnFontSize
                //       el.style.borderWidth = this.contents.tableBtnBorderWidth
                //       el.style.borderStyle = this.contents.tableBtnBorderStyle
                //       el.style.borderColor = this.contents.tableBtnBorderColor
                //       el.style.borderRadius = this.contents.tableBtnBorderRadius
                //       el.style.backgroundColor = this.contents.tableBtnDetailBgColor
                //     })
                //     document.querySelectorAll('.table-content .tables .el-table__body .el-button--primary').forEach(el=>{
                //       el.style.height = this.contents.tableBtnHeight
                //       el.style.color = this.contents.tableBtnEditFontColor
                //       el.style.fontSize = this.contents.tableBtnFontSize
                //       el.style.borderWidth = this.contents.tableBtnBorderWidth
                //       el.style.borderStyle = this.contents.tableBtnBorderStyle
                //       el.style.borderColor = this.contents.tableBtnBorderColor
                //       el.style.borderRadius = this.contents.tableBtnBorderRadius
                //       el.style.backgroundColor = this.contents.tableBtnEditBgColor
                //     })
                //     document.querySelectorAll('.table-content .tables .el-table__body .el-button--danger').forEach(el=>{
                //       el.style.height = this.contents.tableBtnHeight
                //       el.style.color = this.contents.tableBtnDelFontColor
                //       el.style.fontSize = this.contents.tableBtnFontSize
                //       el.style.borderWidth = this.contents.tableBtnBorderWidth
                //       el.style.borderStyle = this.contents.tableBtnBorderStyle
                //       el.style.borderColor = this.contents.tableBtnBorderColor
                //       el.style.borderRadius = this.contents.tableBtnBorderRadius
                //       el.style.backgroundColor = this.contents.tableBtnDelBgColor
                //     })

                //   }, 50)
                // })
            },
            // 分页
            contentPageStyleChange() {
                let arr = []
                if (this.contents.pageTotal) arr.push('total')
                if (this.contents.pageSizes) arr.push('sizes')
                if (this.contents.pagePrevNext) {
                    arr.push('prev')
                    if (this.contents.pagePager) arr.push('pager')
                    arr.push('next')
                }
                if (this.contents.pageJumper) arr.push('jumper')
                this.layouts = arr.join()
                this.contents.pageEachNum = 10
            },

            init() {
            },
            search() {
                this.pageIndex = 1;
                this.getDataList();
            },
            // 获取数据列表
            getDataList() {
                this.dataListLoading = true;
                let params = {
                    page: this.pageIndex,
                    limit: this.pageSize,
                    sort: 'id',
                }

                                         
                if (this.searchForm.xiangmuguanliyuanName!= '' && this.searchForm.xiangmuguanliyuanName!= undefined) {
                    params['xiangmuguanliyuanName'] = '%' + this.searchForm.xiangmuguanliyuanName + '%'
                }
                     
                if (this.searchForm.xiangmuguanliyuanPhone!= '' && this.searchForm.xiangmuguanliyuanPhone!= undefined) {
                    params['xiangmuguanliyuanPhone'] = '%' + this.searchForm.xiangmuguanliyuanPhone + '%'
                }
                     
                if (this.searchForm.xiangmuguanliyuanIdNumber!= '' && this.searchForm.xiangmuguanliyuanIdNumber!= undefined) {
                    params['xiangmuguanliyuanIdNumber'] = '%' + this.searchForm.xiangmuguanliyuanIdNumber + '%'
                }
                                                                                
                if (this.searchForm.createTimeStartSearch != '' && this.searchForm.createTimeStartSearch != undefined) {
                    params['createTimeStartSearch'] = this.searchForm.createTimeStartSearch
                }
                if (this.searchForm.createTimeEndSearch != '' && this.searchForm.createTimeEndSearch != undefined) {
                    params['createTimeEndSearch'] = this.searchForm.createTimeEndSearch
                }
                                         
                if (this.searchForm.yonghuName!= '' && this.searchForm.yonghuName!= undefined) {
                    params['yonghuName'] = '%' + this.searchForm.yonghuName + '%'
                }
                     
                if (this.searchForm.yonghuPhone!= '' && this.searchForm.yonghuPhone!= undefined) {
                    params['yonghuPhone'] = '%' + this.searchForm.yonghuPhone + '%'
                }
                     
                if (this.searchForm.yonghuIdNumber!= '' && this.searchForm.yonghuIdNumber!= undefined) {
                    params['yonghuIdNumber'] = '%' + this.searchForm.yonghuIdNumber + '%'
                }
                                                                                
                if (this.searchForm.createTimeStartSearch != '' && this.searchForm.createTimeStartSearch != undefined) {
                    params['createTimeStartSearch'] = this.searchForm.createTimeStartSearch
                }
                if (this.searchForm.createTimeEndSearch != '' && this.searchForm.createTimeEndSearch != undefined) {
                    params['createTimeEndSearch'] = this.searchForm.createTimeEndSearch
                }
                 
                if (this.searchForm.xiangmuUuidNumber!= '' && this.searchForm.xiangmuUuidNumber!= undefined) {
                    params['xiangmuUuidNumber'] = '%' + this.searchForm.xiangmuUuidNumber + '%'
                }
                 
                if (this.searchForm.xiangmuName!= '' && this.searchForm.xiangmuName!= undefined) {
                    params['xiangmuName'] = '%' + this.searchForm.xiangmuName + '%'
                }
                                                 
                if (this.searchForm.xiangmuYesnoTypes!= '' && this.searchForm.xiangmuYesnoTypes!= undefined) {
                    params['xiangmuYesnoTypes'] = this.searchForm.xiangmuYesnoTypes
                }
                 
                if (this.searchForm.zhuanjia1UuidNumber!= '' && this.searchForm.zhuanjia1UuidNumber!= undefined) {
                    params['zhuanjia1UuidNumber'] = '%' + this.searchForm.zhuanjia1UuidNumber + '%'
                }
                 
                if (this.searchForm.zhuanjia1Types!= '' && this.searchForm.zhuanjia1Types!= undefined) {
                    params['zhuanjia1Types'] = this.searchForm.zhuanjia1Types
                }
                 
                if (this.searchForm.zhuanjia2UuidNumber!= '' && this.searchForm.zhuanjia2UuidNumber!= undefined) {
                    params['zhuanjia2UuidNumber'] = '%' + this.searchForm.zhuanjia2UuidNumber + '%'
                }
                 
                if (this.searchForm.zhuanjia2Types!= '' && this.searchForm.zhuanjia2Types!= undefined) {
                    params['zhuanjia2Types'] = this.searchForm.zhuanjia2Types
                }
                 
                if (this.searchForm.zhuanjia3UuidNumber!= '' && this.searchForm.zhuanjia3UuidNumber!= undefined) {
                    params['zhuanjia3UuidNumber'] = '%' + this.searchForm.zhuanjia3UuidNumber + '%'
                }
                 
                if (this.searchForm.zhuanjia3Types!= '' && this.searchForm.zhuanjia3Types!= undefined) {
                    params['zhuanjia3Types'] = this.searchForm.zhuanjia3Types
                }
                 
                if (this.searchForm.zuizhongTypes!= '' && this.searchForm.zuizhongTypes!= undefined) {
                    params['zuizhongTypes'] = this.searchForm.zuizhongTypes
                }
        
                params['xiangmuDelete'] = 1// 逻辑删除字段 1 未删除 2 删除


                this.$http({
                    url: "xiangmu/page",
                    method: "get",
                    params: params
                }).then(({data}) => {
                    if(data && data.code === 0){
                        this.dataList = data.data.list;
                        this.totalPage = data.data.total;
                    }else{
                        this.dataList = [];
                        this.totalPage = 0;
                    }
                    this.dataListLoading = false;
                });

                //查询级联表搜索条件所有列表
                //查询当前表搜索条件所有列表
                //填充下拉框选项
                this.$http({
                    url: "dictionary/page?dicCode=xiangmu_yesno_types&page=1&limit=100",
                    method: "get",
                }).then(({data}) => {
                    if(data && data.code === 0){
                        this.xiangmuYesnoTypesSelectSearch = data.data.list;
                    }
                });
                //填充下拉框选项
                this.$http({
                    url: "dictionary/page?dicCode=zhuanjia1_types&page=1&limit=100",
                    method: "get",
                }).then(({data}) => {
                    if(data && data.code === 0){
                        this.zhuanjia1TypesSelectSearch = data.data.list;
                    }
                });
                //填充下拉框选项
                this.$http({
                    url: "dictionary/page?dicCode=zhuanjia2_types&page=1&limit=100",
                    method: "get",
                }).then(({data}) => {
                    if(data && data.code === 0){
                        this.zhuanjia2TypesSelectSearch = data.data.list;
                    }
                });
                //填充下拉框选项
                this.$http({
                    url: "dictionary/page?dicCode=zhuanjia3_types&page=1&limit=100",
                    method: "get",
                }).then(({data}) => {
                    if(data && data.code === 0){
                        this.zhuanjia3TypesSelectSearch = data.data.list;
                    }
                });
                //填充下拉框选项
                this.$http({
                    url: "dictionary/page?dicCode=zuizhong_types&page=1&limit=100",
                    method: "get",
                }).then(({data}) => {
                    if(data && data.code === 0){
                        this.zuizhongTypesSelectSearch = data.data.list;
                    }
                });
            },
            //每页数
            sizeChangeHandle(val) {
                this.pageSize = val;
                this.pageIndex = 1;
                this.getDataList();
            },
            // 当前页
            currentChangeHandle(val) {
                this.pageIndex = val;
                this.getDataList();
            },
            // 多选
            selectionChangeHandler(val) {
                this.dataListSelections = val;
            },
            // 添加/修改
            addOrUpdateHandler(id, type) {
                this.showFlag = false;
                this.addOrUpdateFlag = true;
                this.crossAddOrUpdateFlag = false;
                if (type != 'info') {
                    type = 'else';
                }
                this.$nextTick(() => {
                    this.$refs.addOrUpdate.init(id, type);
                });
            },
            // 下载
            download(file) {
                window.open(" ${file} ")
            },
            // 删除
            deleteHandler(id) {
                var ids = id ? [Number(id)] : this.dataListSelections.map(item => {
                    return Number(item.id);
                });

                this.$confirm(`确定进行[${id ? "删除" : "批量删除"}]操作?`, "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                }).then(() => {
                    this.$http({
                        url: "xiangmu/delete",
                        method: "post",
                        data: ids
                    }).then(({data}) => {
                        if(data && data.code === 0){
                            this.$message({
                                message: "操作成功",
                                type: "success",
                                duration: 1500,
                                onClose: () => {
                                    this.search();
                                }
                            });
                        }else{
                            this.$message.error(data.msg);
                        }
                    });
                });
            },
            openYesnoTypes(id,type) {
                let _this = this;
                _this.shenheData.id = id;
                _this.shenheData.shenherenTypes = "请选择审核结果";
                if(type == '1'){
                    _this.xiangmuYesnoTypesVisibleTitle = "项目管理员审核";
                }else if(type == '2'){
                    _this.xiangmuYesnoTypesVisibleTitle = "专家审核";
                }else{
                    _this.xiangmuYesnoTypesVisibleTitle = "专家审核";
                }
                _this.shenheData.shenherenContent = "";
                _this.xiangmuYesnoTypesVisible = true;
            },

            xiangmuYesnoTypesShenhe() {
                let _this = this;
                if(_this.shenheData.shenherenTypes == "请选择审核结果"){
                    alert("请选择审核结果");
                    return false;
                }
                let params1 = {
                    id: _this.shenheData.id,
                    shenherenTypes: _this.shenheData.shenherenTypes,
                    shenherenContent: _this.shenheData.shenherenContent,
                }
                this.$http({
                    url:`xiangmu/shenhe`,
                    method: "post",
                    params: params1
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.$message({
                            message: "审核成功",
                            type: "success",
                            duration: 1500,
                            onClose: () => {
                                _this.xiangmuYesnoTypesVisible = false;
                                _this.search();
                            }
                        });
                    } else {
                        this.$message.error(data.msg);
                        _this.xiangmuYesnoTypesVisible = false;
                    }
                });
            },
        }
    };
</script>
<style lang="scss" scoped>
.slt {
        margin: 0 !important;
        display: flex;
    }

    .ad {
        margin: 0 !important;
        display: flex;
    }

    .pages {
    & /deep/ el-pagination__sizes{
    & /deep/ el-input__inner {
          height: 22px;
          line-height: 22px;
      }
    }
    }


    .el-button+.el-button {
        margin:0;
    }

    .tables {
    & /deep/ .el-button--success {
          height: 36px;
          color: rgba(40, 167, 69, 1);
          font-size: 10px;
          border-width: 0px;
          border-style: solid;
          border-color: #DCDFE6;
          border-radius: 0px;
          background-color: rgba(255, 255, 255, 1);
      }

    & /deep/ .el-button--primary {
          height: 36px;
          color: rgba(255, 193, 7, 1);
          font-size: 10px;
          border-width: 0px;
          border-style: solid;
          border-color: #DCDFE6;
          border-radius: 0px;
          background-color: #fff;
      }

    & /deep/ .el-button--danger {
          height: 36px;
          color: rgba(220, 53, 69, 1);
          font-size: 10px;
          border-width: 0px;
          border-style: solid;
          border-color: #DCDFE6;
          border-radius: 0px;
          background-color: #fff;
      }

    & /deep/ .el-button {
          margin: 4px;
      }
    }</style>


