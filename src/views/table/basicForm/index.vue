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



      <el-table-column :label="$t('global.enable')">
        <template>
          <el-switch
              :active-value="1"
              :inactive-value="0"
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
          >
            {{$t('global.edit')}}
          </el-button>
          <el-popconfirm
              :title="$t('global.confirmDeletion')">
            <el-button
                slot="reference"
                type="danger"
                plain size="small"
            >
              {{$t('global.delete')}}
            </el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <pagination
        :total="total"
        :page.sync="listQuery.page"
        :limit.sync="listQuery.limit"/>
  </div>
</template>

<script>
  import Pagination from "@/components/table/Pagination/index";

  export default {
    name: "index",
    components: {Pagination},
    created() {
      this.getVirtualServiceList();
    },
    data() {
      return {
        rowID: null,
        loading: false,
        list: [],
        total: 0,
        listQuery: {
          page: 1,
          limit: 10,
        },
        tempList: [],
        selectedService: []
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
        immediate: true,
        deep: true
      },
    },
    methods: {
      handleSelectionChange(val) {
        let selectedID = []
        for (let item of val) {
          selectedID.push(item.id)
        }
        this.selectedService = selectedID.join(',');
      },
      async changeEnable(row) {
        this.loading = true
        try {
          await _enableOneVirtualService({
            id: row.id,
            enable: row.enable
          })
          this.getVirtualServiceList()
          this.loading = false
        } catch (e) {
          this.loading = false
        }
      },
      async getVirtualServiceList() {
        this.loading = true
        try {
          let {data} = await _getVirtualServiceList();
          this.list = data;
          this.total = this.list.length;
          this.listQuery = objectAssign({}, this.listQuery);
          this.loading = false
        } catch (e) {
          this.loading = false
        }
      },
      async deleteOneService(row) {
        await delService({
          id: row.id + ''
        })
        this.getVirtualServiceList()
      },
      viewRow(row) {
        this.rowID = row.id
        this.detailDrawer = true
      },
      addRow() {
        this.addDrawer = true
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>
