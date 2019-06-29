<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-table :data="userList" stripe style="width: 100%">
      <el-table-column prop="username" label="姓名" width="180"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="180"></el-table-column>
      <el-table-column prop="mobile" label="电话"></el-table-column>
      <el-table-column label="用户状态">
        <template v-slot="{row}">
          <el-switch v-model="row.type" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <el-button type="primary" icon="el-icon-edit" size="mini" plain></el-button>
        <el-button type="danger" icon="el-icon-delete" size="mini" plain></el-button>
        <el-button type="success" icon="el-icon-check" size="mini" plain>分配角色</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userList: []
    };
  },
  created() {
    axios({
      url: "http://localhost:8888/api/private/v1/users",
      params: {
        pagenum: 1,
        pagesize: 5
      },
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then(res => {
      // console.log(res);
      let {
        data: { data, meta }
      } = res;
      // console.log(data, meta);
      this.userList = data.users;
    });
  }
};
</script>

<style lang="less">
.el-breadcrumb {
  background-color: #d4dae0;
  line-height: 50px;
  padding-left: 10px;
  font-size: 16px;
}
</style>