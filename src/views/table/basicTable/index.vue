<template>
  <div>
    <div class="content-top">
      <el-button
          size="small" type="success" plain>{{$t('global.new')}}
      </el-button>
      <div>
        <el-popconfirm
            :title="$t('global.confirmDeletion')"
        >
          <el-button
              slot="reference" plain size="small" type="danger"
          >{{$t('global.batchDeletion')}}
          </el-button>
        </el-popconfirm>
      </div>
    </div>
    <el-table
        v-loading="loading"
        :data="tempList"
        @selection-change="handleSelectionChange"
        border
        highlight-current-row>
      <el-table-column
          type="selection"
      >
      </el-table-column>

      <el-table-column prop="name" :label="$t('global.name')">
      </el-table-column>

      <el-table-column prop="status" label="状态">
        <template v-slot="{row}">
          <el-tag
              :type="row.status | status2Color">
            {{row.status | status2text}}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column prop="enable" :label="$t('global.enable')">
        <template v-slot="{row}">
          <el-switch
              v-model="row.enable"
              :active-value="1"
              :inactive-value="0"
              @change="changeEnable(row)"
              active-color="#13ce66">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column :label="$t('global.operating')">
        <template v-slot="{row}">
          <el-button
              type="primary"
              size="small"
              plain
              @click="editRow(row)"
          >
            {{$t('global.edit')}}
          </el-button>
          <el-popconfirm
              :title="$t('global.confirmDeletion')">
            <el-button
                slot="reference"
                type="danger"
                @click="deleteRow(row)"
                plain size="small"
            >
              {{$t('global.delete')}}
            </el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <pagination
        :total="this.list.length"
        :page.sync="listQuery.page"
        :limit.sync="listQuery.limit"/>
  </div>
</template>

<script>
  import Pagination from "@/components/table/Pagination/index";
  import {deepCopy} from "@/utils/base";
  import {_getBasicTableList} from "@/api/table";

  export default {
    name: "index",
    components: {Pagination},
    created() {
      this.getList();
    },
    filters: {
      status2Color(status) {
        const map = {
          0: 'info',
          1: 'success'
        }
        return map[status]
      },
      status2text(status) {
        const map = {
          0: '未连接',
          1: '连接'
        }
        return map[status]
      },
    },
    data() {
      return {
        loading: false,
        list: [],
        listQuery: {
          page: 1,
          limit: 10,
        },
        tempList: [],
        selectedRows:[],
      }
    },
    computed: {
      isMutilDel() {
        return this.selectedService == '' ? false : true
      }
    },
    watch: {
      listQuery: {
        handler(val) {
          this.tempList = this.list.slice((this.listQuery.page - 1) * this.listQuery.limit,
            this.listQuery.page * this.listQuery.limit);
        },
        deep: true
      },
    },
    methods: {
      handleSelectionChange(val) {
        this.selectedRows = []
        for (let item of val) {
          this.selectedRows.push(item.name)
        }
      },
      async changeEnable(row) {
        console.dir(row);
      },
      async getList() {
        this.loading = true
        const {data} = await _getBasicTableList();
        this.list = data;
        this.listQuery = deepCopy(this.listQuery);
        this.loading = false
      },
      editRow(row) {
        console.dir(row);
      },
      deleteRow(row){
        console.dir(row);
      },
      addRow() {

      },
    }
  }
</script>

<style lang="scss" scoped>

</style>
