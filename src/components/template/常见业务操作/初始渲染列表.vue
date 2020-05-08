<template>
  <div>
    <el-table
        v-loading="loading"
        @selection-change="handleSelectionChange"
        :data="list" border highlight-current-row
        style="width: 99.9%;height: 100%">
      <el-table-column
          min-width="50"
          type="selection"
      >
      </el-table-column>
      <el-table-column
          prop="cert_name"
          label="证书名称">
      </el-table-column>
      <el-table-column
          prop="ref"
          label="使用情况">
        <template v-slot="{row}">
          {{row.ref | ref2text}}
        </template>
      </el-table-column>
      <el-table-column min-width="80" align="center" label="操作">
        <template v-slot="{row}">
          <el-button
              type="primary"
              size="small"
              @click="view(row)" plain
          >
            查看
          </el-button>
          <el-popconfirm
              title="确定删除吗？"
              @onConfirm="deleteOnexxx(row)"
          >
            <el-button
                slot="reference"
                style="margin-left: 10px"
                type="danger"
                plain   size="small"
            >
              删除
            </el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import {_getSSLList} from "@/api/appProtect/SSLManagement";

  export default {
    name: "初始渲染列表",
    created() {
      this.getList();
    },
    data(){
      return{
        loading:false,
        list:[]
      }
    },
    methods:{
      async getList() {
        this.loading = true
        let {data} = await _getxxx();
        this.list = data;
        this.loading = false
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>
