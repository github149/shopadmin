<template>
  <el-container>
    <el-header>
      <el-row class="row_header">
        <el-col :span="8"
                class="header_col">
          <img src="@/assets/logo.png">
        </el-col>
        <el-col :span="8">
          <h1>电商后台管理系统</h1>
        </el-col>
        <el-col :span="8">
          <h5>欢迎登录
            <a href="javascript:;"
               @click="exit">退出</a>
          </h5>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="2"
                 @open="handleOpen"
                 @close="handleClose"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b"
                 :router="true">
          <!-- 1.active-text-color是单击选项文字高亮的颜色
                 2.background-color :菜单的背景颜色
                 3.text-color:菜单的文字颜色-->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">用户列表</template>
              <el-menu-item index="/home/list">
                <template slot="title">
                  <i class="el-icon-s-grid"></i>
                  <span>信息管理</span>
                </template>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-key"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>选项1</span>
                </template>
              </el-menu-item>
              <el-menu-item index="2-2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>选项1</span>
                </template>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
          <!-- home子路由的出口 -->
          <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  methods: {
    exit () {
      this.$confirm('是否确定退出?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 1.路由跳转到首页
        // 2.清除token值
        this.$router.push('login')
        localStorage.removeItem('token')
        this.$message({
          type: 'success',
          message: '退出成功!'
        })
      })
    },
    handleOpen (key, keyPath) {
      console.log('open', key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log('close', key, keyPath)
    }
  }
}
</script>
<style scoped lang="less">
.el-container {
  height: 100%;
  .el-header {
    background-color: #b3c1cd;
    color: #333;
    text-align: center;
    padding: 0;
    .header_col {
      text-align: left;
      padding-left: 10px;
    }
    h1 {
      color: #fff;
      margin: 15px 0px;
    }
    h5 {
      text-align: right;
      padding-right: 56px;
      a {
        color: #b07a17;
      }
    }
  }

  .el-aside {
    background-color: #545c64;
    color: #333;
    line-height: 200px;
    height: 100%;
  }

  .el-main {
    background-color: #eaeef1;
    color: #333;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
}
</style>
