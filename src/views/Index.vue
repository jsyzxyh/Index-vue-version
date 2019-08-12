<template>
  <div class="index_form">
    <el-form :model="Form" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="输入姓名" prop="name">
        <el-input v-model="Form.name" style="width: 200px;" maxlength="6" minlength="2" @keyup.enter.native="submitForm('ruleForm')"></el-input>
        <!-- <input type="text"> -->
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">确认</el-button>
        <Input v-show="false"/>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      Form: {
        name: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入你的名字', trigger: 'blur' },
          { min: 2, max: 6, message: '长度在 2 到 6 个字', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios({
            method: 'post',
            // url: 'http://127.0.0.1:80/nameCheck', // 本地地址
            url: 'http://www.jsyzxyh.com/nameCheck', // 网页地址
            data: {
              name: this.Form.name
            }
          }).then(data => {
            if (data.data === 'yes') {
              this.$router.push({
                path: '/gift'
              })
            } else if (data.data === 'study') {
              // console.log('study')
              this.$router.push({
                path: '/campusRecuit'
              })
            } else {
              this.$router.push({
                path: '/error'
              })
            }
          }).catch(error => {
            console.log('错误:', error)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
.index_form{
  text-align: center;
  width: 250px;
  margin: 200px auto 0;
  .el-input{
    font-size: 18px;
  }
  .el-form-item__label{
    font-size: 18px;
  }
  .el-form-item__content .el-button span{
    font-size: 16px;
  }
}
</style>
