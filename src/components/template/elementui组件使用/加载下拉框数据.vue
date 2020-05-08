<template>
  <div>

  </div>
</template>

<script>
  export default {
    methods:{
      //拉取数据转换成下拉框数据
      async getSiteSecurity() {
        let {data} = _getSiteSecurityList()
        let tempArr = []
        for (let item of data) {
          let temp = {
            value: item.id,
            label: item.name
          }
          tempArr.push(temp)
        }
        this.siteSecurityList = tempArr
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>
