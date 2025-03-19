







<template>
    <div class="addEdit-block">
        <el-form
                class="detail-form-content"
                ref="ruleForm"
                :model="ruleForm"
                :rules="rules"
                label-width="80px"
                :style="{backgroundColor:addEditForm.addEditBoxColor}">
            <el-row>
                <el-col :span="12"  v-if="sessionTable !='yonghu'">
                    <el-form-item class="select" v-if="type!='info'"  label="项目管理员" prop="xiangmuguanliyuanId">
                        <el-select v-model="ruleForm.xiangmuguanliyuanId" filterable placeholder="请选择项目管理员" @change="xiangmuguanliyuanChange">
                            <el-option
                                    v-for="(item,index) in xiangmuguanliyuanOptions"
                                    v-bind:key="item.id"
                                    :label="item.xiangmuguanliyuanName"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>

                <el-col :span="12"  v-if="sessionTable !='yonghu'">
                    <el-form-item class="input" v-if="type!='info'"  label="项目管理员姓名" prop="xiangmuguanliyuanName">
                        <el-input v-model="xiangmuguanliyuanForm.xiangmuguanliyuanName"
                                  placeholder="项目管理员姓名" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="项目管理员姓名" prop="xiangmuguanliyuanName">
                            <el-input v-model="ruleForm.xiangmuguanliyuanName"
                                      placeholder="项目管理员姓名" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='yonghu'">
                    <el-form-item class="input" v-if="type!='info'"  label="联系电话" prop="xiangmuguanliyuanPhone">
                        <el-input v-model="xiangmuguanliyuanForm.xiangmuguanliyuanPhone"
                                  placeholder="联系电话" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="联系电话" prop="xiangmuguanliyuanPhone">
                            <el-input v-model="ruleForm.xiangmuguanliyuanPhone"
                                      placeholder="联系电话" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='yonghu'">
                    <el-form-item class="input" v-if="type!='info'"  label="项目管理员身份证号" prop="xiangmuguanliyuanIdNumber">
                        <el-input v-model="xiangmuguanliyuanForm.xiangmuguanliyuanIdNumber"
                                  placeholder="项目管理员身份证号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="项目管理员身份证号" prop="xiangmuguanliyuanIdNumber">
                            <el-input v-model="ruleForm.xiangmuguanliyuanIdNumber"
                                      placeholder="项目管理员身份证号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="24" v-if="sessionTable !='yonghu'">
                    <el-form-item class="upload" v-if="type!='info' && !ro.xiangmuguanliyuanPhoto" label="头像" prop="xiangmuguanliyuanPhoto">
                        <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (xiangmuguanliyuanForm.xiangmuguanliyuanPhoto || '').split(',')" :src="item" width="100" height="100">
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.xiangmuguanliyuanPhoto" label="头像" prop="xiangmuguanliyuanPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.xiangmuguanliyuanPhoto || '').split(',')" :src="item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='yonghu'">
                    <el-form-item class="input" v-if="type!='info'"  label="电子邮箱" prop="xiangmuguanliyuanEmail">
                        <el-input v-model="xiangmuguanliyuanForm.xiangmuguanliyuanEmail"
                                  placeholder="电子邮箱" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="电子邮箱" prop="xiangmuguanliyuanEmail">
                            <el-input v-model="ruleForm.xiangmuguanliyuanEmail"
                                      placeholder="电子邮箱" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='yonghu'">
                    <el-form-item class="input" v-if="type!='info'"  label="住址" prop="xiangmuguanliyuanAddress">
                        <el-input v-model="xiangmuguanliyuanForm.xiangmuguanliyuanAddress"
                                  placeholder="住址" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="住址" prop="xiangmuguanliyuanAddress">
                            <el-input v-model="ruleForm.xiangmuguanliyuanAddress"
                                      placeholder="住址" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='yonghu'">
                    <el-form-item class="select" v-if="type!='info'"  label="用户" prop="yonghuId">
                        <el-select v-model="ruleForm.yonghuId" filterable placeholder="请选择用户" @change="yonghuChange">
                            <el-option
                                    v-for="(item,index) in yonghuOptions"
                                    v-bind:key="item.id"
                                    :label="item.yonghuName"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>

                <el-col :span="12"  v-if="sessionTable !='yonghu'">
                    <el-form-item class="input" v-if="type!='info'"  label="用户姓名" prop="yonghuName">
                        <el-input v-model="yonghuForm.yonghuName"
                                  placeholder="用户姓名" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="用户姓名" prop="yonghuName">
                            <el-input v-model="ruleForm.yonghuName"
                                      placeholder="用户姓名" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='yonghu'">
                    <el-form-item class="input" v-if="type!='info'"  label="联系电话" prop="yonghuPhone">
                        <el-input v-model="yonghuForm.yonghuPhone"
                                  placeholder="联系电话" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="联系电话" prop="yonghuPhone">
                            <el-input v-model="ruleForm.yonghuPhone"
                                      placeholder="联系电话" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='yonghu'">
                    <el-form-item class="input" v-if="type!='info'"  label="用户身份证号" prop="yonghuIdNumber">
                        <el-input v-model="yonghuForm.yonghuIdNumber"
                                  placeholder="用户身份证号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="用户身份证号" prop="yonghuIdNumber">
                            <el-input v-model="ruleForm.yonghuIdNumber"
                                      placeholder="用户身份证号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="24" v-if="sessionTable !='yonghu'">
                    <el-form-item class="upload" v-if="type!='info' && !ro.yonghuPhoto" label="头像" prop="yonghuPhoto">
                        <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (yonghuForm.yonghuPhoto || '').split(',')" :src="item" width="100" height="100">
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.yonghuPhoto" label="头像" prop="yonghuPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.yonghuPhoto || '').split(',')" :src="item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='yonghu'">
                    <el-form-item class="input" v-if="type!='info'"  label="电子邮箱" prop="yonghuEmail">
                        <el-input v-model="yonghuForm.yonghuEmail"
                                  placeholder="电子邮箱" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="电子邮箱" prop="yonghuEmail">
                            <el-input v-model="ruleForm.yonghuEmail"
                                      placeholder="电子邮箱" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='yonghu'">
                    <el-form-item class="input" v-if="type!='info'"  label="住址" prop="yonghuAddress">
                        <el-input v-model="yonghuForm.yonghuAddress"
                                  placeholder="住址" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="住址" prop="yonghuAddress">
                            <el-input v-model="ruleForm.yonghuAddress"
                                      placeholder="住址" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <input id="updateId" name="id" type="hidden">
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="项目唯一标识" prop="xiangmuUuidNumber">
                       <el-input v-model="ruleForm.xiangmuUuidNumber"
                                 placeholder="项目唯一标识" clearable  :readonly="ro.xiangmuUuidNumber"></el-input>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="项目唯一标识" prop="xiangmuUuidNumber">
                           <el-input v-model="ruleForm.xiangmuUuidNumber"
                                     placeholder="项目唯一标识" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
            <input id="yonghuId" name="yonghuId" type="hidden">
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="项目名称" prop="xiangmuName">
                       <el-input v-model="ruleForm.xiangmuName"
                                 placeholder="项目名称" clearable  :readonly="ro.xiangmuName"></el-input>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="项目名称" prop="xiangmuName">
                           <el-input v-model="ruleForm.xiangmuName"
                                     placeholder="项目名称" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="24">
                    <el-form-item class="upload" v-if="type!='info' && !ro.xiangmuPhoto" label="项目照片" prop="xiangmuPhoto">
                        <file-upload
                            tip="点击上传项目照片"
                            action="file/upload"
                            :limit="3"
                            :multiple="true"
                            :fileUrls="ruleForm.xiangmuPhoto?ruleForm.xiangmuPhoto:''"
                            @change="xiangmuPhotoUploadChange"
                        ></file-upload>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.xiangmuPhoto" label="项目照片" prop="xiangmuPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.xiangmuPhoto || '').split(',')" :src="item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="项目类型" prop="xiangmuTypes">
                        <el-select v-model="ruleForm.xiangmuTypes" placeholder="请选择项目类型">
                            <el-option
                                v-for="(item,index) in xiangmuTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="项目类型" prop="xiangmuValue">
                        <el-input v-model="ruleForm.xiangmuValue"
                            placeholder="项目类型" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="24">
                    <el-form-item class="upload" v-if="type!='info' && !ro.xiangmuFile" label="验收申请书" prop="xiangmuFile">
                        <file-upload
                                tip="点击上传验收申请书"
                                action="file/upload"
                                :limit="3"
                                :multiple="true"
                                :fileUrls="ruleForm.xiangmuFile?ruleForm.xiangmuFile:''"
                                @change="xiangmuFileUploadChange"
                        ></file-upload>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.xiangmuFile" label="验收申请书" prop="xiangmuFile">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.xiangmuFile || '').split(',')" :src="item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="24">
                    <el-form-item v-if="type!='info'"  label="项目简介" prop="xiangmuContent">
                        <editor style="min-width: 200px; max-width: 600px;"
                                v-model="ruleForm.xiangmuContent"
                                class="editor"
                                action="file/upload">
                        </editor>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.xiangmuContent" label="项目简介" prop="xiangmuContent">
                            <span v-html="ruleForm.xiangmuContent"></span>
                        </el-form-item>
                    </div>
                </el-col>
            <input id="xiangmuguanliyuanId" name="xiangmuguanliyuanId" type="hidden">
                <el-col :span="24" v-if="sessionTable !='yonghu'">
                    <el-form-item v-if="type!='info'"  label="项目管理员审核意见" prop="xiangmuguanliyuanContent">
                        <editor style="min-width: 200px; max-width: 600px;"
                                v-model="ruleForm.xiangmuguanliyuanContent"
                                class="editor"
                                action="file/upload">
                        </editor>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.xiangmuguanliyuanContent" label="项目管理员审核意见" prop="xiangmuguanliyuanContent">
                            <span v-html="ruleForm.xiangmuguanliyuanContent"></span>
                        </el-form-item>
                    </div>
                </el-col>
               <el-col :span="12" v-if="sessionTable !='yonghu'">
                   <el-form-item class="input" v-if="type!='info'"  label="专家1的唯一标识" prop="zhuanjia1UuidNumber">
                       <el-input v-model="ruleForm.zhuanjia1UuidNumber"
                                 placeholder="专家1的唯一标识" clearable  :readonly="ro.zhuanjia1UuidNumber"></el-input>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="专家1的唯一标识" prop="zhuanjia1UuidNumber">
                           <el-input v-model="ruleForm.zhuanjia1UuidNumber"
                                     placeholder="专家1的唯一标识" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12" v-if="sessionTable !='yonghu'">
                   <el-form-item class="input" v-if="type!='info'"  label="专家1姓名" prop="zhuanjia1Name">
                       <el-input v-model="ruleForm.zhuanjia1Name"
                                 placeholder="专家1姓名" clearable  :readonly="ro.zhuanjia1Name"></el-input>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="专家1姓名" prop="zhuanjia1Name">
                           <el-input v-model="ruleForm.zhuanjia1Name"
                                     placeholder="专家1姓名" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="12" v-if="sessionTable !='yonghu'">
                    <el-form-item class="select" v-if="type!='info'"  label="专家1的审核结果" prop="zhuanjia1Types">
                        <el-select v-model="ruleForm.zhuanjia1Types" placeholder="请选择专家1的审核结果">
                            <el-option
                                v-for="(item,index) in zhuanjia1TypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="专家1的审核结果" prop="zhuanjia1Value">
                        <el-input v-model="ruleForm.zhuanjia1Value"
                            placeholder="专家1的审核结果" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="24" v-if="sessionTable !='yonghu'">
                    <el-form-item v-if="type!='info'"  label="专家1的审核意见" prop="zhuanjia1YijianContent">
                        <editor style="min-width: 200px; max-width: 600px;"
                                v-model="ruleForm.zhuanjia1YijianContent"
                                class="editor"
                                action="file/upload">
                        </editor>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.zhuanjia1YijianContent" label="专家1的审核意见" prop="zhuanjia1YijianContent">
                            <span v-html="ruleForm.zhuanjia1YijianContent"></span>
                        </el-form-item>
                    </div>
                </el-col>
               <el-col :span="12" v-if="sessionTable !='yonghu'">
                   <el-form-item class="input" v-if="type!='info'"  label="专家2的唯一标识" prop="zhuanjia2UuidNumber">
                       <el-input v-model="ruleForm.zhuanjia2UuidNumber"
                                 placeholder="专家2的唯一标识" clearable  :readonly="ro.zhuanjia2UuidNumber"></el-input>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="专家2的唯一标识" prop="zhuanjia2UuidNumber">
                           <el-input v-model="ruleForm.zhuanjia2UuidNumber"
                                     placeholder="专家2的唯一标识" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12" v-if="sessionTable !='yonghu'">
                   <el-form-item class="input" v-if="type!='info'"  label="专家2姓名" prop="zhuanjia2Name">
                       <el-input v-model="ruleForm.zhuanjia2Name"
                                 placeholder="专家2姓名" clearable  :readonly="ro.zhuanjia2Name"></el-input>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="专家2姓名" prop="zhuanjia2Name">
                           <el-input v-model="ruleForm.zhuanjia2Name"
                                     placeholder="专家2姓名" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="12" v-if="sessionTable !='yonghu'">
                    <el-form-item class="select" v-if="type!='info'"  label="专家2的审核结果" prop="zhuanjia2Types">
                        <el-select v-model="ruleForm.zhuanjia2Types" placeholder="请选择专家2的审核结果">
                            <el-option
                                v-for="(item,index) in zhuanjia2TypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="专家2的审核结果" prop="zhuanjia2Value">
                        <el-input v-model="ruleForm.zhuanjia2Value"
                            placeholder="专家2的审核结果" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="24" v-if="sessionTable !='yonghu'">
                    <el-form-item v-if="type!='info'"  label="专家2的审核意见" prop="zhuanjia2YijianContent">
                        <editor style="min-width: 200px; max-width: 600px;"
                                v-model="ruleForm.zhuanjia2YijianContent"
                                class="editor"
                                action="file/upload">
                        </editor>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.zhuanjia2YijianContent" label="专家2的审核意见" prop="zhuanjia2YijianContent">
                            <span v-html="ruleForm.zhuanjia2YijianContent"></span>
                        </el-form-item>
                    </div>
                </el-col>
               <el-col :span="12" v-if="sessionTable !='yonghu'">
                   <el-form-item class="input" v-if="type!='info'"  label="专家3的唯一标识" prop="zhuanjia3UuidNumber">
                       <el-input v-model="ruleForm.zhuanjia3UuidNumber"
                                 placeholder="专家3的唯一标识" clearable  :readonly="ro.zhuanjia3UuidNumber"></el-input>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="专家3的唯一标识" prop="zhuanjia3UuidNumber">
                           <el-input v-model="ruleForm.zhuanjia3UuidNumber"
                                     placeholder="专家3的唯一标识" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12" v-if="sessionTable !='yonghu'">
                   <el-form-item class="input" v-if="type!='info'"  label="专家3姓名" prop="zhuanjia3Name">
                       <el-input v-model="ruleForm.zhuanjia3Name"
                                 placeholder="专家3姓名" clearable  :readonly="ro.zhuanjia3Name"></el-input>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="专家3姓名" prop="zhuanjia3Name">
                           <el-input v-model="ruleForm.zhuanjia3Name"
                                     placeholder="专家3姓名" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="12" v-if="sessionTable !='yonghu'">
                    <el-form-item class="select" v-if="type!='info'"  label="专家3的审核结果" prop="zhuanjia3Types">
                        <el-select v-model="ruleForm.zhuanjia3Types" placeholder="请选择专家3的审核结果">
                            <el-option
                                v-for="(item,index) in zhuanjia3TypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="专家3的审核结果" prop="zhuanjia3Value">
                        <el-input v-model="ruleForm.zhuanjia3Value"
                            placeholder="专家3的审核结果" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="24" v-if="sessionTable !='yonghu'">
                    <el-form-item v-if="type!='info'"  label="专家3的审核意见" prop="zhuanjia3YijianContent">
                        <editor style="min-width: 200px; max-width: 600px;"
                                v-model="ruleForm.zhuanjia3YijianContent"
                                class="editor"
                                action="file/upload">
                        </editor>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.zhuanjia3YijianContent" label="专家3的审核意见" prop="zhuanjia3YijianContent">
                            <span v-html="ruleForm.zhuanjia3YijianContent"></span>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12" v-if="sessionTable !='yonghu'">
                    <el-form-item class="select" v-if="type!='info'"  label="最终审核结果" prop="zuizhongTypes">
                        <el-select v-model="ruleForm.zuizhongTypes" placeholder="请选择最终审核结果">
                            <el-option
                                v-for="(item,index) in zuizhongTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="最终审核结果" prop="zuizhongValue">
                        <el-input v-model="ruleForm.zuizhongValue"
                            placeholder="最终审核结果" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
            </el-row>
            <el-form-item class="btn">
                <el-button v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
                <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
                <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import styleJs from "../../../utils/style.js";
    // 数字，邮件，手机，url，身份证校验
    import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
    export default {
        data() {
            return {


                fileList:[{name: '1637045583686.xls', url: 'http://localhost:8080/xiangmuyanshou/upload'}],
				
				
                addEditForm:null,
                id: '',
                type: '',
                sessionTable : "",//登录账户所在表名
                role : "",//权限
                xiangmuguanliyuanForm: {},
                yonghuForm: {},
                ro:{
                    xiangmuUuidNumber: true,
                    yonghuId: false,
                    xiangmuName: false,
                    xiangmuPhoto: false,
                    xiangmuTypes: false,
                    xiangmuFile: false,
                    xiangmuContent: false,
                    xiangmuguanliyuanId: false,
                    xiangmuYesnoTypes: false,
                    xiangmuguanliyuanContent: false,
                    zhuanjia1UuidNumber: false,
                    zhuanjia1Name: false,
                    zhuanjia1Types: false,
                    zhuanjia1YijianContent: false,
                    zhuanjia2UuidNumber: false,
                    zhuanjia2Name: false,
                    zhuanjia2Types: false,
                    zhuanjia2YijianContent: false,
                    zhuanjia3UuidNumber: false,
                    zhuanjia3Name: false,
                    zhuanjia3Types: false,
                    zhuanjia3YijianContent: false,
                    zuizhongTypes: false,
                },
                ruleForm: {
                    xiangmuUuidNumber: new Date().getTime(),
                    yonghuId: '',
                    xiangmuName: '',
                    xiangmuPhoto: '',
                    xiangmuTypes: '',
                    xiangmuFile: '',
                    xiangmuContent: '',
                    xiangmuguanliyuanId: '',
                    xiangmuYesnoTypes: '',
                    xiangmuguanliyuanContent: '',
                    zhuanjia1UuidNumber: '',
                    zhuanjia1Name: '',
                    zhuanjia1Types: '',
                    zhuanjia1YijianContent: '',
                    zhuanjia2UuidNumber: '',
                    zhuanjia2Name: '',
                    zhuanjia2Types: '',
                    zhuanjia2YijianContent: '',
                    zhuanjia3UuidNumber: '',
                    zhuanjia3Name: '',
                    zhuanjia3Types: '',
                    zhuanjia3YijianContent: '',
                    zuizhongTypes: '',
                },
                xiangmuTypesOptions : [],
                xiangmuYesnoTypesOptions : [],
                zhuanjia1TypesOptions : [],
                zhuanjia2TypesOptions : [],
                zhuanjia3TypesOptions : [],
                zuizhongTypesOptions : [],
                xiangmuguanliyuanOptions : [],
                yonghuOptions : [],
                rules: {
                   xiangmuUuidNumber: [
                              { required: true, message: '项目唯一标识不能为空', trigger: 'blur' },
                          ],
                   yonghuId: [
                              { required: true, message: '用户不能为空', trigger: 'blur' },
                          ],
                   xiangmuName: [
                              { required: true, message: '项目名称不能为空', trigger: 'blur' },
                          ],
                   xiangmuPhoto: [
                              { required: true, message: '项目照片不能为空', trigger: 'blur' },
                          ],
                   xiangmuTypes: [
                              { required: true, message: '项目类型不能为空', trigger: 'blur' },
                          ],
                   xiangmuFile: [
                              { required: true, message: '验收申请书不能为空', trigger: 'blur' },
                          ],
                   xiangmuContent: [
                              { required: true, message: '项目简介不能为空', trigger: 'blur' },
                          ],
                   xiangmuguanliyuanId: [
                              { required: true, message: '项目管理员不能为空', trigger: 'blur' },
                          ],
                   xiangmuYesnoTypes: [
                              { required: true, message: '项目管理员审核结果不能为空', trigger: 'blur' },
                          ],
                   xiangmuguanliyuanContent: [
                              { required: true, message: '项目管理员审核意见不能为空', trigger: 'blur' },
                          ],
                   zhuanjia1UuidNumber: [
                              { required: true, message: '专家1的唯一标识不能为空', trigger: 'blur' },
                          ],
                   zhuanjia1Name: [
                              { required: true, message: '专家1姓名不能为空', trigger: 'blur' },
                          ],
                   zhuanjia1Types: [
                              { required: true, message: '专家1的审核结果不能为空', trigger: 'blur' },
                          ],
                   zhuanjia1YijianContent: [
                              { required: true, message: '专家1的审核意见不能为空', trigger: 'blur' },
                          ],
                   zhuanjia2UuidNumber: [
                              { required: true, message: '专家2的唯一标识不能为空', trigger: 'blur' },
                          ],
                   zhuanjia2Name: [
                              { required: true, message: '专家2姓名不能为空', trigger: 'blur' },
                          ],
                   zhuanjia2Types: [
                              { required: true, message: '专家2的审核结果不能为空', trigger: 'blur' },
                          ],
                   zhuanjia2YijianContent: [
                              { required: true, message: '专家2的审核意见不能为空', trigger: 'blur' },
                          ],
                   zhuanjia3UuidNumber: [
                              { required: true, message: '专家3的唯一标识不能为空', trigger: 'blur' },
                          ],
                   zhuanjia3Name: [
                              { required: true, message: '专家3姓名不能为空', trigger: 'blur' },
                          ],
                   zhuanjia3Types: [
                              { required: true, message: '专家3的审核结果不能为空', trigger: 'blur' },
                          ],
                   zhuanjia3YijianContent: [
                              { required: true, message: '专家3的审核意见不能为空', trigger: 'blur' },
                          ],
                   zuizhongTypes: [
                              { required: true, message: '最终审核结果不能为空', trigger: 'blur' },
                          ],
                }
            };
        },
        props: ["parent"],
        computed: {
        },
        created() {
            //获取当前登录用户的信息
            this.sessionTable = this.$storage.get("sessionTable");
            this.role = this.$storage.get("role");

            if (this.role != "管理员"){
            }
            this.addEditForm = styleJs.addStyle();
            this.addEditStyleChange()
            this.addEditUploadStyleChange()
            //获取下拉框信息
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=xiangmu_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.xiangmuTypesOptions = data.data.list;
                    }
                });
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=xiangmu_yesno_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.xiangmuYesnoTypesOptions = data.data.list;
                    }
                });
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=zhuanjia1_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.zhuanjia1TypesOptions = data.data.list;
                    }
                });
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=zhuanjia2_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.zhuanjia2TypesOptions = data.data.list;
                    }
                });
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=zhuanjia3_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.zhuanjia3TypesOptions = data.data.list;
                    }
                });
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=zuizhong_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.zuizhongTypesOptions = data.data.list;
                    }
                });

         this.$http({
             url: `xiangmuguanliyuan/page?page=1&limit=100`,
             method: "get"
         }).then(({ data }) => {
             if (data && data.code === 0) {
                this.xiangmuguanliyuanOptions = data.data.list;
            }
         });
         this.$http({
             url: `yonghu/page?page=1&limit=100`,
             method: "get"
         }).then(({ data }) => {
             if (data && data.code === 0) {
                this.yonghuOptions = data.data.list;
            }
         });

        },
        mounted() {
        },
        methods: {
            // 下载
            download(file){
                window.open(`${file}`)
            },
            // 初始化
            init(id,type) {
                if (id) {
                    this.id = id;
                    this.type = type;
                }
                if(this.type=='info'||this.type=='else'){
                    this.info(id);
                }else if(this.type=='cross'){
                    var obj = this.$storage.getObj('crossObj');
                    for (var o in obj){

                      if(o=='xiangmuUuidNumber'){
                          this.ruleForm.xiangmuUuidNumber = obj[o];
                          this.ro.xiangmuUuidNumber = true;
                          continue;
                      }
                      if(o=='yonghuId'){
                          this.ruleForm.yonghuId = obj[o];
                          this.ro.yonghuId = true;
                          continue;
                      }
                      if(o=='xiangmuName'){
                          this.ruleForm.xiangmuName = obj[o];
                          this.ro.xiangmuName = true;
                          continue;
                      }
                      if(o=='xiangmuPhoto'){
                          this.ruleForm.xiangmuPhoto = obj[o];
                          this.ro.xiangmuPhoto = true;
                          continue;
                      }
                      if(o=='xiangmuTypes'){
                          this.ruleForm.xiangmuTypes = obj[o];
                          this.ro.xiangmuTypes = true;
                          continue;
                      }
                      if(o=='xiangmuFile'){
                          this.ruleForm.xiangmuFile = obj[o];
                          this.ro.xiangmuFile = true;
                          continue;
                      }
                      if(o=='xiangmuContent'){
                          this.ruleForm.xiangmuContent = obj[o];
                          this.ro.xiangmuContent = true;
                          continue;
                      }
                      if(o=='xiangmuguanliyuanId'){
                          this.ruleForm.xiangmuguanliyuanId = obj[o];
                          this.ro.xiangmuguanliyuanId = true;
                          continue;
                      }
                      if(o=='xiangmuYesnoTypes'){
                          this.ruleForm.xiangmuYesnoTypes = obj[o];
                          this.ro.xiangmuYesnoTypes = true;
                          continue;
                      }
                      if(o=='xiangmuguanliyuanContent'){
                          this.ruleForm.xiangmuguanliyuanContent = obj[o];
                          this.ro.xiangmuguanliyuanContent = true;
                          continue;
                      }
                      if(o=='zhuanjia1UuidNumber'){
                          this.ruleForm.zhuanjia1UuidNumber = obj[o];
                          this.ro.zhuanjia1UuidNumber = true;
                          continue;
                      }
                      if(o=='zhuanjia1Name'){
                          this.ruleForm.zhuanjia1Name = obj[o];
                          this.ro.zhuanjia1Name = true;
                          continue;
                      }
                      if(o=='zhuanjia1Types'){
                          this.ruleForm.zhuanjia1Types = obj[o];
                          this.ro.zhuanjia1Types = true;
                          continue;
                      }
                      if(o=='zhuanjia1YijianContent'){
                          this.ruleForm.zhuanjia1YijianContent = obj[o];
                          this.ro.zhuanjia1YijianContent = true;
                          continue;
                      }
                      if(o=='zhuanjia2UuidNumber'){
                          this.ruleForm.zhuanjia2UuidNumber = obj[o];
                          this.ro.zhuanjia2UuidNumber = true;
                          continue;
                      }
                      if(o=='zhuanjia2Name'){
                          this.ruleForm.zhuanjia2Name = obj[o];
                          this.ro.zhuanjia2Name = true;
                          continue;
                      }
                      if(o=='zhuanjia2Types'){
                          this.ruleForm.zhuanjia2Types = obj[o];
                          this.ro.zhuanjia2Types = true;
                          continue;
                      }
                      if(o=='zhuanjia2YijianContent'){
                          this.ruleForm.zhuanjia2YijianContent = obj[o];
                          this.ro.zhuanjia2YijianContent = true;
                          continue;
                      }
                      if(o=='zhuanjia3UuidNumber'){
                          this.ruleForm.zhuanjia3UuidNumber = obj[o];
                          this.ro.zhuanjia3UuidNumber = true;
                          continue;
                      }
                      if(o=='zhuanjia3Name'){
                          this.ruleForm.zhuanjia3Name = obj[o];
                          this.ro.zhuanjia3Name = true;
                          continue;
                      }
                      if(o=='zhuanjia3Types'){
                          this.ruleForm.zhuanjia3Types = obj[o];
                          this.ro.zhuanjia3Types = true;
                          continue;
                      }
                      if(o=='zhuanjia3YijianContent'){
                          this.ruleForm.zhuanjia3YijianContent = obj[o];
                          this.ro.zhuanjia3YijianContent = true;
                          continue;
                      }
                      if(o=='zuizhongTypes'){
                          this.ruleForm.zuizhongTypes = obj[o];
                          this.ro.zuizhongTypes = true;
                          continue;
                      }
                    }
                }
                // 获取用户信息
                this.$http({
                    url:`${this.$storage.get("sessionTable")}/session`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        var json = data.data;
                    } else {
                        this.$message.error(data.msg);
                    }
                });
            },
            xiangmuguanliyuanChange(id){
                this.$http({
                    url: `xiangmuguanliyuan/info/`+id,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.xiangmuguanliyuanForm = data.data;
                    }
                });
            },
            yonghuChange(id){
                this.$http({
                    url: `yonghu/info/`+id,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.yonghuForm = data.data;
                    }
                });
            },
            // 多级联动参数
            info(id) {
                this.$http({
                    url: `xiangmu/info/${id}`,
                    method: 'get'
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.ruleForm = data.data;
                        this.xiangmuguanliyuanChange(data.data.xiangmuguanliyuanId)
                        this.yonghuChange(data.data.yonghuId)
                        //解决前台上传图片后台不显示的问题
                        let reg=new RegExp('../../../upload','g')//g代表全部
                    } else {
                        this.$message.error(data.msg);
                    }
                });
            },
            // 提交
            onSubmit() {
                this.$refs["ruleForm"].validate(valid => {
                    if (valid) {
                        this.$http({
                            url:`xiangmu/${!this.ruleForm.id ? "save" : "update"}`,
                            method: "post",
                            data: this.ruleForm
                        }).then(({ data }) => {
                            if (data && data.code === 0) {
                                this.$message({
                                    message: "操作成功",
                                    type: "success",
                                    duration: 1500,
                                    onClose: () => {
                                        this.parent.showFlag = true;
                                        this.parent.addOrUpdateFlag = false;
                                        this.parent.xiangmuCrossAddOrUpdateFlag = false;
                                        this.parent.search();
                                        this.parent.contentStyleChange();
                                    }
                                });
                            } else {
                                this.$message.error(data.msg);
                            }
                        });
                    }
                });
            },
            // 获取uuid
            getUUID () {
                return new Date().getTime();
            },
            // 返回
            back() {
                this.parent.showFlag = true;
                this.parent.addOrUpdateFlag = false;
                this.parent.xiangmuCrossAddOrUpdateFlag = false;
                this.parent.contentStyleChange();
            },
            //图片
            xiangmuPhotoUploadChange(fileUrls){
                this.ruleForm.xiangmuPhoto = fileUrls;
                this.addEditUploadStyleChange()
            },
            xiangmuFileUploadChange(fileUrls){
                this.ruleForm.xiangmuFile = fileUrls;
                this.addEditUploadStyleChange()
            },

            addEditStyleChange() {
                this.$nextTick(()=>{
                    // input
                    document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputFontColor
                        el.style.fontSize = this.addEditForm.inputFontSize
                        el.style.borderWidth = this.addEditForm.inputBorderWidth
                        el.style.borderStyle = this.addEditForm.inputBorderStyle
                        el.style.borderColor = this.addEditForm.inputBorderColor
                        el.style.borderRadius = this.addEditForm.inputBorderRadius
                        el.style.backgroundColor = this.addEditForm.inputBgColor
                    })
                    document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputLableColor
                        el.style.fontSize = this.addEditForm.inputLableFontSize
                    })
                    // select
                    document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectFontColor
                        el.style.fontSize = this.addEditForm.selectFontSize
                        el.style.borderWidth = this.addEditForm.selectBorderWidth
                        el.style.borderStyle = this.addEditForm.selectBorderStyle
                        el.style.borderColor = this.addEditForm.selectBorderColor
                        el.style.borderRadius = this.addEditForm.selectBorderRadius
                        el.style.backgroundColor = this.addEditForm.selectBgColor
                    })
                    document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectLableColor
                        el.style.fontSize = this.addEditForm.selectLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el=>{
                        el.style.color = this.addEditForm.selectIconFontColor
                        el.style.fontSize = this.addEditForm.selectIconFontSize
                    })
                    // date
                    document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateFontColor
                        el.style.fontSize = this.addEditForm.dateFontSize
                        el.style.borderWidth = this.addEditForm.dateBorderWidth
                        el.style.borderStyle = this.addEditForm.dateBorderStyle
                        el.style.borderColor = this.addEditForm.dateBorderColor
                        el.style.borderRadius = this.addEditForm.dateBorderRadius
                        el.style.backgroundColor = this.addEditForm.dateBgColor
                    })
                    document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateLableColor
                        el.style.fontSize = this.addEditForm.dateLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el=>{
                        el.style.color = this.addEditForm.dateIconFontColor
                        el.style.fontSize = this.addEditForm.dateIconFontSize
                        el.style.lineHeight = this.addEditForm.dateHeight
                    })
                    // upload
                    let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
                    document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.uploadHeight
                        el.style.color = this.addEditForm.uploadLableColor
                        el.style.fontSize = this.addEditForm.uploadLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el=>{
                        el.style.color = this.addEditForm.uploadIconFontColor
                        el.style.fontSize = this.addEditForm.uploadIconFontSize
                        el.style.lineHeight = iconLineHeight
                        el.style.display = 'block'
                    })
                    // 多文本输入框
                    document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el=>{
                        el.style.height = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaFontColor
                        el.style.fontSize = this.addEditForm.textareaFontSize
                        el.style.borderWidth = this.addEditForm.textareaBorderWidth
                        el.style.borderStyle = this.addEditForm.textareaBorderStyle
                        el.style.borderColor = this.addEditForm.textareaBorderColor
                        el.style.borderRadius = this.addEditForm.textareaBorderRadius
                        el.style.backgroundColor = this.addEditForm.textareaBgColor
                    })
                    document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el=>{
                        // el.style.lineHeight = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaLableColor
                        el.style.fontSize = this.addEditForm.textareaLableFontSize
                    })
                    // 保存
                    document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el=>{
                        el.style.width = this.addEditForm.btnSaveWidth
                        el.style.height = this.addEditForm.btnSaveHeight
                        el.style.color = this.addEditForm.btnSaveFontColor
                        el.style.fontSize = this.addEditForm.btnSaveFontSize
                        el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
                        el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
                        el.style.borderColor = this.addEditForm.btnSaveBorderColor
                        el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnSaveBgColor
                    })
                    // 返回
                    document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el=>{
                        el.style.width = this.addEditForm.btnCancelWidth
                        el.style.height = this.addEditForm.btnCancelHeight
                        el.style.color = this.addEditForm.btnCancelFontColor
                        el.style.fontSize = this.addEditForm.btnCancelFontSize
                        el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
                        el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
                        el.style.borderColor = this.addEditForm.btnCancelBorderColor
                        el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnCancelBgColor
                    })
                })
            },
            addEditUploadStyleChange() {
                this.$nextTick(()=>{
                    document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                })
            },
        }
    };
</script>
<style lang="scss">
.editor{
        height: 500px;

    & /deep/ .ql-container {
          height: 310px;
      }
    }
    .amap-wrapper {
        width: 100%;
        height: 500px;
    }
    .search-box {
        position: absolute;
    }
    .addEdit-block {
        margin: -10px;
    }
    .detail-form-content {
        padding: 12px;
    }
    .btn .el-button {
        padding: 0;
    }</style>

