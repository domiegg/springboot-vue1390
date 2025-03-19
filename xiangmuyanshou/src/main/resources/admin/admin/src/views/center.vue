<template>
  <div>
    <el-form
      class="detail-form-content"
      ref="ruleForm"
      :model="ruleForm"
      label-width="80px"
    >  
     <el-row>
                                     <el-col :span="12">
                              <el-form-item v-if="flag=='xiangmuguanliyuan'"  label='项目管理员姓名' prop="xiangmuguanliyuanName">
                                  <el-input v-model="ruleForm.xiangmuguanliyuanName"  placeholder='项目管理员姓名' clearable></el-input>
                              </el-form-item>
                          </el-col>

                          <el-col :span="12">
                              <el-form-item v-if="flag=='xiangmuguanliyuan'"  label='联系电话' prop="xiangmuguanliyuanPhone">
                                  <el-input v-model="ruleForm.xiangmuguanliyuanPhone"  placeholder='联系电话' clearable></el-input>
                              </el-form-item>
                          </el-col>

                          <el-col :span="12">
                              <el-form-item v-if="flag=='xiangmuguanliyuan'"  label='项目管理员身份证号' prop="xiangmuguanliyuanIdNumber">
                                  <el-input v-model="ruleForm.xiangmuguanliyuanIdNumber"  placeholder='项目管理员身份证号' clearable></el-input>
                              </el-form-item>
                          </el-col>

                        <el-col :span="24">
                            <el-form-item v-if="flag=='xiangmuguanliyuan'" label='头像' prop="xiangmuguanliyuanPhoto">
                                <file-upload
                                        tip="点击上传照片"
                                        action="file/upload"
                                        :limit="3"
                                        :multiple="true"
                                        :fileUrls="ruleForm.xiangmuguanliyuanPhoto?ruleForm.xiangmuguanliyuanPhoto:''"
                                        @change="xiangmuguanliyuanPhotoUploadChange"
                                ></file-upload>
                            </el-form-item>
                        </el-col>
                          <el-col :span="12">
                              <el-form-item v-if="flag=='xiangmuguanliyuan'"  label='电子邮箱' prop="xiangmuguanliyuanEmail">
                                  <el-input v-model="ruleForm.xiangmuguanliyuanEmail"  placeholder='电子邮箱' clearable></el-input>
                              </el-form-item>
                          </el-col>

                          <el-col :span="12">
                              <el-form-item v-if="flag=='xiangmuguanliyuan'"  label='住址' prop="xiangmuguanliyuanAddress">
                                  <el-input v-model="ruleForm.xiangmuguanliyuanAddress"  placeholder='住址' clearable></el-input>
                              </el-form-item>
                          </el-col>

                          <el-col :span="12">
                              <el-form-item v-if="flag=='yonghu'"  label='用户姓名' prop="yonghuName">
                                  <el-input v-model="ruleForm.yonghuName"  placeholder='用户姓名' clearable></el-input>
                              </el-form-item>
                          </el-col>

                          <el-col :span="12">
                              <el-form-item v-if="flag=='yonghu'"  label='联系电话' prop="yonghuPhone">
                                  <el-input v-model="ruleForm.yonghuPhone"  placeholder='联系电话' clearable></el-input>
                              </el-form-item>
                          </el-col>

                          <el-col :span="12">
                              <el-form-item v-if="flag=='yonghu'"  label='用户身份证号' prop="yonghuIdNumber">
                                  <el-input v-model="ruleForm.yonghuIdNumber"  placeholder='用户身份证号' clearable></el-input>
                              </el-form-item>
                          </el-col>

                        <el-col :span="24">
                            <el-form-item v-if="flag=='yonghu'" label='头像' prop="yonghuPhoto">
                                <file-upload
                                        tip="点击上传照片"
                                        action="file/upload"
                                        :limit="3"
                                        :multiple="true"
                                        :fileUrls="ruleForm.yonghuPhoto?ruleForm.yonghuPhoto:''"
                                        @change="yonghuPhotoUploadChange"
                                ></file-upload>
                            </el-form-item>
                        </el-col>
                          <el-col :span="12">
                              <el-form-item v-if="flag=='yonghu'"  label='电子邮箱' prop="yonghuEmail">
                                  <el-input v-model="ruleForm.yonghuEmail"  placeholder='电子邮箱' clearable></el-input>
                              </el-form-item>
                          </el-col>

                          <el-col :span="12">
                              <el-form-item v-if="flag=='yonghu'"  label='住址' prop="yonghuAddress">
                                  <el-input v-model="ruleForm.yonghuAddress"  placeholder='住址' clearable></el-input>
                              </el-form-item>
                          </el-col>

                          <el-col :span="12">
                              <el-form-item v-if="flag=='zhuanjia'"  label='专家唯一标识' prop="zhuanjiaUuidNumber">
                                  <el-input v-model="ruleForm.zhuanjiaUuidNumber"  placeholder='专家唯一标识' clearable></el-input>
                              </el-form-item>
                          </el-col>

                          <el-col :span="12">
                              <el-form-item v-if="flag=='zhuanjia'"  label='专家姓名' prop="zhuanjiaName">
                                  <el-input v-model="ruleForm.zhuanjiaName"  placeholder='专家姓名' clearable></el-input>
                              </el-form-item>
                          </el-col>

                          <el-col :span="12">
                              <el-form-item v-if="flag=='zhuanjia'"  label='专家联系电话' prop="zhuanjiaPhone">
                                  <el-input v-model="ruleForm.zhuanjiaPhone"  placeholder='专家联系电话' clearable></el-input>
                              </el-form-item>
                          </el-col>

                          <el-col :span="12">
                              <el-form-item v-if="flag=='zhuanjia'"  label='专家身份证号' prop="zhuanjiaIdNumber">
                                  <el-input v-model="ruleForm.zhuanjiaIdNumber"  placeholder='专家身份证号' clearable></el-input>
                              </el-form-item>
                          </el-col>

                        <el-col :span="24">
                            <el-form-item v-if="flag=='zhuanjia'" label='头像' prop="zhuanjiaPhoto">
                                <file-upload
                                        tip="点击上传照片"
                                        action="file/upload"
                                        :limit="3"
                                        :multiple="true"
                                        :fileUrls="ruleForm.zhuanjiaPhoto?ruleForm.zhuanjiaPhoto:''"
                                        @change="zhuanjiaPhotoUploadChange"
                                ></file-upload>
                            </el-form-item>
                        </el-col>
         <el-form-item v-if="flag=='users'" label="用户名" prop="username">
             <el-input v-model="ruleForm.username"
                       placeholder="用户名"></el-input>
         </el-form-item>
         <el-col :span="12">
             <el-form-item v-if="flag!='users'"  label="性别" prop="sexTypes">
                 <el-select v-model="ruleForm.sexTypes" placeholder="请选择性别">
                     <el-option
                             v-for="(item,index) in sexTypesOptions"
                             v-bind:key="item.codeIndex"
                             :label="item.indexName"
                             :value="item.codeIndex">
                     </el-option>
                 </el-select>
             </el-form-item>
         </el-col>
         <el-col :span="24">
             <el-form-item>
                 <el-button type="primary" @click="onUpdateHandler">修 改</el-button>
             </el-form-item>
         </el-col>
     </el-row>
    </el-form>
  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isMobile,isPhone,isURL,checkIdCard } from "@/utils/validate";

export default {
  data() {
    return {
      ruleForm: {},
      flag: '',
      usersFlag: false,
      sexTypesOptions : [],























    };
  },
  mounted() {
    var table = this.$storage.get("sessionTable");
    this.flag = table;
    this.$http({
      url: `${this.$storage.get("sessionTable")}/session`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.ruleForm = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
      this.$http({
          url: `dictionary/page?page=1&limit=100&sort=&order=&dicCode=sex_types`,
          method: "get"
      }).then(({ data }) => {
          if (data && data.code === 0) {
          this.sexTypesOptions = data.data.list;
      } else {
          this.$message.error(data.msg);
      }
  });























  },
  methods: {
      zhuanjiaPhotoUploadChange(fileUrls) {
          this.ruleForm.zhuanjiaPhoto = fileUrls;
      },
      xiangmuguanliyuanPhotoUploadChange(fileUrls) {
          this.ruleForm.xiangmuguanliyuanPhoto = fileUrls;
      },
      yonghuPhotoUploadChange(fileUrls) {
          this.ruleForm.yonghuPhoto = fileUrls;
      },

    onUpdateHandler() {
                         if((!this.ruleForm.xiangmuguanliyuanName)&& 'xiangmuguanliyuan'==this.flag){
                             this.$message.error('项目管理员姓名不能为空');
                             return
                         }

                         if((!this.ruleForm.xiangmuguanliyuanPhone)&& 'xiangmuguanliyuan'==this.flag){
                             this.$message.error('联系电话不能为空');
                             return
                         }

                         if((!this.ruleForm.xiangmuguanliyuanIdNumber)&& 'xiangmuguanliyuan'==this.flag){
                             this.$message.error('项目管理员身份证号不能为空');
                             return
                         }

                         if((!this.ruleForm.xiangmuguanliyuanPhoto)&& 'xiangmuguanliyuan'==this.flag){
                             this.$message.error('头像不能为空');
                             return
                         }

                             if( 'xiangmuguanliyuan' ==this.flag && this.ruleForm.xiangmuguanliyuanEmail&&(!isEmail(this.ruleForm.xiangmuguanliyuanEmail))){
                                 this.$message.error(`邮箱应输入邮箱格式`);
                                 return
                             }
                         if((!this.ruleForm.xiangmuguanliyuanAddress)&& 'xiangmuguanliyuan'==this.flag){
                             this.$message.error('住址不能为空');
                             return
                         }

                         if((!this.ruleForm.yonghuName)&& 'yonghu'==this.flag){
                             this.$message.error('用户姓名不能为空');
                             return
                         }

                         if((!this.ruleForm.yonghuPhone)&& 'yonghu'==this.flag){
                             this.$message.error('联系电话不能为空');
                             return
                         }

                         if((!this.ruleForm.yonghuIdNumber)&& 'yonghu'==this.flag){
                             this.$message.error('用户身份证号不能为空');
                             return
                         }

                         if((!this.ruleForm.yonghuPhoto)&& 'yonghu'==this.flag){
                             this.$message.error('头像不能为空');
                             return
                         }

                             if( 'yonghu' ==this.flag && this.ruleForm.yonghuEmail&&(!isEmail(this.ruleForm.yonghuEmail))){
                                 this.$message.error(`邮箱应输入邮箱格式`);
                                 return
                             }
                         if((!this.ruleForm.yonghuAddress)&& 'yonghu'==this.flag){
                             this.$message.error('住址不能为空');
                             return
                         }

                         if((!this.ruleForm.zhuanjiaUuidNumber)&& 'zhuanjia'==this.flag){
                             this.$message.error('专家唯一标识不能为空');
                             return
                         }

                         if((!this.ruleForm.zhuanjiaName)&& 'zhuanjia'==this.flag){
                             this.$message.error('专家姓名不能为空');
                             return
                         }

                         if((!this.ruleForm.zhuanjiaPhone)&& 'zhuanjia'==this.flag){
                             this.$message.error('专家联系电话不能为空');
                             return
                         }

                         if((!this.ruleForm.zhuanjiaIdNumber)&& 'zhuanjia'==this.flag){
                             this.$message.error('专家身份证号不能为空');
                             return
                         }

                         if((!this.ruleForm.zhuanjiaPhoto)&& 'zhuanjia'==this.flag){
                             this.$message.error('头像不能为空');
                             return
                         }

        if((!this.ruleForm.sexTypes)&& this.flag !='users'){
            this.$message.error('性别不能为空');
            return
        }
      if('users'==this.flag && this.ruleForm.username.trim().length<1) {
        this.$message.error(`用户名不能为空`);
        return	
      }
      this.$http({
        url: `${this.$storage.get("sessionTable")}/update`,
        method: "post",
        data: this.ruleForm
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.$message({
            message: "修改信息成功",
            type: "success",
            duration: 1500,
            onClose: () => {
            }
          });
        } else {
          this.$message.error(data.msg);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
