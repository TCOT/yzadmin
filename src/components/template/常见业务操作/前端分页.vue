<template>
  <div>
    <el-table :data="tempList">
    </el-table>
    <div style="display: flex;justify-content: flex-end;">
      <pagination
          :total="total"
          :page.sync="listQuery.page"
          :limit.sync="listQuery.limit"/>
    </div>
  </div>
</template>

<script>
  import {_getCustomRuleList} from "@/api/appProtect/customRule";
  import {objectAssign} from "@/utils/base";

  export default {
    name: "前端分页",
    data(){
      return{
        total: 0,
        listQuery: {
          page: 1,
          limit: 10,
        },
        tempList:[],
        list:[]
      }
    },
    watch:{
      listQuery:{
        handler(val){
          this.tempList = this.list.slice((this.listQuery.page - 1) * this.listQuery.limit,
            this.listQuery.page * this.listQuery.limit);
        },
        immediate:true,
        deep:true
      },
    },
    methods:{
      async getList() {
        this.loading = true
        try {
          let {data} = await _getCustomRuleList();
          this.list = data;
          // ****分页
          this.total = this.list.length;
          this.listQuery = objectAssign({},this.listQuery);
          this.loading = false
        } catch (e) {
          this.loading = false
        }
      },
    }
  }
</script>
