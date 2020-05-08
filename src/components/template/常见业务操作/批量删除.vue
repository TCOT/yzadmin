<template>
  <div>
    <el-row>
      <el-col :span="22">
        <el-button
            style="margin-bottom: 10px"
            @click="addRow"
            size="small" type="success" icon="el-icon-plus" plain>新建
        </el-button>
      </el-col>
      <el-col :span="2">
        <el-popconfirm
            title="确定删除选中项吗？"
            @onConfirm="delMultiple"
        >
          <el-button
              slot="reference"
              style="margin-bottom: 10px"
              size="small" type="danger" icon="el-icon-delete"
              :disabled="!isMutilDel" plain
          >批量删除
          </el-button>
        </el-popconfirm>
      </el-col>
    </el-row>

    <el-table v-loading="loading" :data="list" border
              @selection-change="handleSelectionChange"
              highlight-current-row style="width: 99.9%">
  </div>
</template>

<script>

  export default {
    name: "批量删除",
    data(){
      return{
        mutipleSelected:"",
      }
    },
    computed: {
      isMutilDel() {
        return this.mutipleSelected == '' ? false : true
      }
    },
    methods:{
      async delMultiple(data) {
        this.loading = true
        try {
          await _deleteXXX({id: this.mutipleSelected})
          await this.getList()
          this.loading = false
        } catch (e) {
          this.loading = false
        }
      },
      handleSelectionChange(val) {
        let selectedID = []
        for (let item of val) {
          selectedID.push(item.id)
        }
        this.mutipleSelected = selectedID.join(',');
      },
    }
  }
</script>
