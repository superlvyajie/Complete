<template>
  <div class="container">
    <el-container>
      <el-header>电商后台管理系统</el-header>
      <el-container>
        <el-aside width="240px">
          <router-link :to="{name:'welcome'}" class="welcome">|||</router-link>
          <el-col :span="12">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#333744"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-submenu :index="item.id + ''" v-for="(item,index) in asideList" :key="item.id">
                <template slot="title">
                  <i :class="iconList[index]"></i>
                  <span>{{item.authName}}</span>
                </template>
                <el-menu-item-group v-for="item in item.children" :key="item.id">
                  <router-link :to="{path:'/home/' + item.path}">
                    <el-menu-item :index="item.id+''">
                      <i class="el-icon-menu"></i>
                      <span slot="title">
                        {{item.authName}}
                      </span>
                    </el-menu-item>
                  </router-link>
                </el-menu-item-group>

               
              </el-submenu>
             
             
         
            </el-menu>
          </el-col>
        </el-aside>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import http from "../assets/http/http"
export default {
  data() {
    return {
      asideList:[],
      iconList:["el-icon-user-solid","fa fa-cube","el-icon-s-goods","el-icon-s-order","el-icon-data-line"],
      to:['']
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  mounted() {
    http({
      url:'menus',
    }).then(res=>{
      console.log(res);
      this.asideList = res.data
    })
  },
};
</script>

<style lang="scss" scoped>
.el-main {
  background-color: #eaedf1;
}
.container {
  width: 100%;
  height: 100%;
}
.el-container {
  width: 100%;
  height: 100%;
}
.el-header {
  background-color: #373d41;
  color: #fff;
  font-size: 20px;
  line-height: 60px;
}
.el-col {
  width: 100%;
}
.el-aside {
  background-color: #333744;
}
.fa-cube {
  margin-right: 9px;
  margin-left: 5px;
}
.welcome {
  display: block;
  width: 100%;
  height: 24px;
  font-size: 12px;
  color: #fff;
  text-align: center;
  line-height: 24px;
  background-color: #4a5064;
}
</style>