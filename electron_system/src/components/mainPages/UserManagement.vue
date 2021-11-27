<template>
  <div class="user">
    <BreadCrumb :list="list"></BreadCrumb>
    <div class="list">
      <div class="searh">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <span><i class="el-icon-search"></i></span>
        <el-button type="primary">添加用户</el-button>
      </div>

      <div class="table">
        <el-table :data="tableData" border style="width: 1084px">
          <el-table-column prop="id" label="#" width="47"> </el-table-column>
          <el-table-column prop="username" label="姓名" width="170">
          </el-table-column>
          <el-table-column prop="email" label="邮箱" width="170">
          </el-table-column>
          <el-table-column prop="mobile" label="电话" width="170">
          </el-table-column>
          <el-table-column prop="role_name" label="角色" width="170">
          </el-table-column>
          <el-table-column prop="mg_state" label="状态" width="170">
            <template slot-scope="scope">
              <el-switch v-model="tableData[scope.$index].mg_state">
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="185">
            <template slot-scope="scope">
                <el-button type="primary" icon="el-icon-edit" @click="edit(scope.$index,scope.row)" size="mini"></el-button>
                <el-button type="danger" icon="el-icon-delete"  size="mini"></el-button>
                 <el-button type="warning" icon="el-icon-star-off"  size="mini"></el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
// 引入封装的http请求
import http from "../../assets/http/http";
// 引入面包屑组件
import BreadCrumb from "../BreadCrumb.vue";
export default {
  data() {
    return {
      input: "",
      list: ["用户管理", "用户列表"],
      tableData: [],
    };
  },
  mounted() {
    http({
      url: "users",
      params: {
        pagenum: 1,
        pagesize: 5,
      },
    }).then((res) => {
      console.log(res);
      this.tableData = res.data.users;
    });
  },
  components: {
    BreadCrumb,
  },
};
</script>

<style lang="scss" scoped>
.user {
  background-color: #eaedf1;
  .list {
    padding: 20px;
    margin-top: 17px;
    background-color: #fff;
    border-radius: 2px;
    .el-input {
      width: 290px;
      height: 40px;
    }
    span {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      width: 57px;
      margin-right: 21px;
      border: 1px solid #dcdfe6;
      background-color: #f5f7fa;
      border-left: none;
      vertical-align: middle;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
      color: #969b9f;
    }
  }
}
.operation {
    width: 44px;
    height: 28px;
}
</style>