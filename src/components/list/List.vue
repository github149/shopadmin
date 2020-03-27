<template>
  <!-- :data是根据tableData中的数据进行遍历并渲染 -->
  <el-table :data="listData"
            stripe>
    <el-table-column prop="username"
                     label="姓名"
                     width="180">
    </el-table-column>
    <el-table-column prop="email"
                     label="邮箱"
                     width="180">
    </el-table-column>
    <el-table-column prop="mobile"
                     label="电话">
    </el-table-column>
    <el-table-column prop="mg_state"
                     label="用户状态">
    </el-table-column>
    <el-table-column prop="address"
                     label="操作">
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  // 发送axios,请求列表中的数据
  created () {
    // console.log('请求回来的数据')
    this.getUserList()
  },
  data () {
    return {
      listData: []
    }
  },
  methods: {
    getUserList () {
      this.$http// main.js中在Vue的原型上添加属性
        .get('/users', {
          params: {
            // 传递默认第几页
            // 每页多少条
            pagenum: 1, // 默认是第一页
            pagesize: 5 // 每页五条
          }
        })
        .then(res => {
          // console.log(res)
          const { data, meta } = res.data
          if (meta.status === 200) {
            this.listData = data.users
          }
        })
    }
  }
}
</script>
<style>
</style>
