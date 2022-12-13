<template>
  <div class="flex flex-col items-center gap-4">
    <h1 class="text-3xl font900">Hello World</h1>
    <div class="text-red-500 font-700">Sample Text</div>
    <el-button type="primary" class="px-4 py-2"> ElementUI Button </el-button>
    <el-button :plain="true" @click="open">訊息提示</el-button>
    <div class="icon-lg icon-add"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    open() {
      this.$message({
        showClose: true,
        message: '您好，測試。',
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
