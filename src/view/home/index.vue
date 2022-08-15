<template>
  <van-nav-bar title="OpenHub" />
  <van-tabs v-model:active="active">
    <van-tab title="发现">
      <div class="tab-container">
        <van-pull-refresh v-model="refreshLoading" @refresh="onRefresh">
          <van-list
            v-model:loading="loading"
            :finished="finished"
            finished-text="没有更多了"
            inset
            @load="onLoad"
          >
            <div v-for="item in list" :key="item" class="my-card">
              {{ item }}
            </div>
          </van-list>
        </van-pull-refresh>
      </div>
    </van-tab>
    <van-tab title="个人">
      <div>个人</div>
    </van-tab>
  </van-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const active = ref(0)

const list = ref<number[]>([])
const loading = ref(false)
const finished = ref(false)

const onLoad = () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      list.value.push(list.value.length + 1)
    }

    // 加载状态结束
    loading.value = false

    // 数据全部加载完成
    if (list.value.length >= 40) {
      finished.value = true
    }
  }, 1000)
}

const refreshLoading = ref(false)

const onRefresh = () => {
  setTimeout(() => {
    refreshLoading.value = false
  }, 1000)
}
</script>

<style lang="less" scoped>
.tab-container {
  /* 使显示不被遮挡 */
  position: fixed;
  left: 0;
  right: 0;
  top: 90px;
  bottom: 50px;
  overflow-y: auto;
}

.my-card {
  margin: 6px;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 8px 12px #ebedf0;
}
</style>
