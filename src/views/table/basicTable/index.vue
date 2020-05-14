<template>
  <div>
    <el-row class="table-top" type="flex">
      <el-col :span="8">
        <el-button
            size="small" type="success" plain @click="createDrawer = true">{{$t('global.new')}}
        </el-button>
      </el-col>
      <el-col :span="8">
        <el-input
            v-model="listQuery.nameFilter"
            size="small"
            placeholder="输入名称关键字搜索"/>
      </el-col>
      <el-col :span="8">
        <el-popconfirm
            :title="$t('global.confirmDeletion')"
        >
          <el-button
              slot="reference" plain size="small" type="danger"
          >{{$t('global.batchDeletion')}}
          </el-button>
        </el-popconfirm>
      </el-col>
    </el-row>
    <el-table
        v-loading="loading"
        :data="tempList"
        @selection-change="handleSelectionChange"
        :filter-method="filterHandler"
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
        :total="listQuery.total"
        :page.sync="listQuery.page"
        :limit.sync="listQuery.limit"/>
    <el-drawer
        title="新建"
        :visible.sync="createDrawer"
        direction="rtl"
        size="900px"
    >
      <create-one v-if="createDrawer"/>
    </el-drawer>
  </div>
</template>

<script>
  import Pagination from "@/components/table/Pagination/index";
  import {deepCopy} from "@/utils/base";
  import {_getBasicTableList} from "@/api/table";
  import CreateOne from "@/views/table/basicTable/createOne";

  export default {
    name: "index",
    components: {CreateOne, Pagination},
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
          total: 0,
          nameFilter: '',
        },
        tempList: [],
        selectedRows: [],
        createDrawer: false,
      }
    },
    watch: {
      listQuery: {
        handler(val) {
          this.tempList = this.list.slice((this.listQuery.page - 1) * this.listQuery.limit,
            this.listQuery.page * this.listQuery.limit)
            .filter(item => item.name.toLowerCase().includes(val.nameFilter.toLowerCase()));
          val.nameFilter !== ''
            ? this.listQuery.total = this.tempList.length
            : this.listQuery.total = this.list.length
        },
        deep: true
      },
    },
    methods: {
      filterHandler(value, row, column) {
        console.dir(value);
        console.dir(row);
        console.dir(column);
      },
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
        this.listQuery.total = data.length;
        this.loading = false
      },
      editRow(row) {
        console.dir(row);
      },
      deleteRow(row) {
        console.dir(row);
      },
      addRow() {

      },
    }
  }
</script>

<style lang="scss" scoped>

</style>
