<template>
  <!-- 子路由出口 -->
  <div class="layout-container">
    <router-view />
  </div>
  <!-- 底部导航栏 -->
  <van-tabbar v-model="active" class="tabbar--fixed">
    <van-tabbar-item name="home" icon="home-o" to="/home">首页</van-tabbar-item>
    <van-tabbar-item>
      <template #icon>
        <van-button
          icon="plus"
          type="primary"
          size="small"
          round
          class="post-btn"
          @click="show = !show"
        />
      </template>
    </van-tabbar-item>
    <van-tabbar-item name="user" icon="user-o" to="/mine">我的</van-tabbar-item>
  </van-tabbar>

  <van-action-sheet v-model:show="show" title="标题">
    <div class="content">内容</div>
  </van-action-sheet>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const active = ref('home')

const show = ref(false)
</script>

<style lang="less" scoped>
.post-btn {
  margin-top: var(--van-tabbar-item-icon-margin-bottom);
}

.content {
  padding: 16px;
  height: 200px;
}

.tabbar--fixed {
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
