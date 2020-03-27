<template>
  <div class="login">
    <el-row type="flex"
            class="row-bg just" justify="center" align="middle">
      <el-col :xs="12"
              :sm="10"
              :md="8"
              :lg="6"
              class="login_layout">
        <el-form label-position="top"
                 :model="loginForm"
                 :rules="rules"
                 ref="loginForm"
                 label-width="100px"
                 class="loginForm">
          <el-form-item label="用户名"
                        prop="username">
            <el-input v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item  label="密码"
                        prop="password">
            <el-input type="password" v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"
                       @click="submitForm">登录</el-button>
            <el-button @click="resetForm">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      // 登录功能的实现
      // http://localhost:8888/api/private/v1/login
      axios
        .post('/login', this.loginForm)
        .then(res => {
          // console.log(res)
          const { data, meta } = res.data
          if (meta.status === 200) {
            // console.log('登录成功')
            // 登录成功，跳到首页,讲token存到localStorage中
            localStorage.setItem('token', data.token)
            this.$router.push('/home')
          } else {
            // console.log('登录失败', meta.msg)
            this.$message.error(meta.msg)
            return false
          }
        })
    },
    submitForm () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          //   alert('submit!')
          this.login()
        } else {
          return false
        }
      })
    },
    resetForm () {
      this.$refs.loginForm.resetFields()
    }
  }
}
</script>
<style>
.login {
  height: 100%;
  background-color: #2d434c;
}
.just{
    height:100%;
}
.loginForm {
  background-color: #fff;
  padding: 35px 20px;
  border-radius: 10px;
}
.login_layout {
  min-width: 240px;
}
</style>
