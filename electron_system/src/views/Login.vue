<template>
  <div class="login">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label-width="0">
        <el-input
          v-model="form.username"
          prefix-icon="el-icon-user-solid"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>

      <el-form-item label-width="0">
        <el-input
          v-model="form.password"
          prefix-icon="el-icon-lock"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>

      <el-form-item label-width="0" class="right">
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button>重置</el-button>
      </el-form-item> 
    </el-form>
  </div>
</template>

<script>
import http from "../assets/http/http";
export default {
  data() {
    return {
      form: {
        username: '',
        password:''
      },
    };
  },


  methods: {
    onSubmit() {
      http({
        url: "login",
        method: "post",
        data: {
          username: this.form.username,
          password: this.form.password,
        },
      }).then((res) => {
        
        if(res.meta.msg === '登录成功') {
            localStorage.setItem('token',res.data.token),
            this.$router.replace('/home')
        }
      });
    },
  },



};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background-color: #2b4b6b;
}
.el-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  padding: 114px 20px 22px;
  background-color: #fff;
  border-radius: 3px;
}
.right {
  text-align: right;
}
</style>