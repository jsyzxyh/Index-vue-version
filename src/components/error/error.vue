<template>
  <div id="wrong">
    <p>抱歉，您输入的名字不在作者名单中。</p>
  </div>
</template>
<script>
export default {
  name: 'error'
}
</script>

<style lang="scss">
#wrong{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  margin-top: 200px;
}
</style>
