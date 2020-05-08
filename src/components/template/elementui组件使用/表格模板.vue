<template>
  <main-card>
    <el-button
        style="margin-bottom: 10px"
        @click="addRow"
        size="small" type="success" icon="el-icon-plus" plain>新建
    </el-button>
    <el-table :data="list" border highlight-current-row style="width: 99.9%;height: 100%">
      <el-table-column
          min-width="50"
          type="selection"
      >
      </el-table-column>
      <el-table-column prop="xxx1" min-width="50" label="xxx1">
      </el-table-column>

      <el-table-column prop="xxx2" min-width="50" label="xxx2">
      </el-table-column>

      <el-table-column prop="xxx3" min-width="50" label="xxx3">
      </el-table-column>

      <el-table-column min-width="100" align="center" label="操作">
        <template v-slot="{row}">
          <el-button
              type="primary"
              size="small"
              icon="el-icon-view"
              @click="viewRow(row)" plain
          >
            查看
          </el-button>
          <el-button
              type="primary"
              size="small"
              icon="el-icon-edit"
              @click="editRow(row)" plain
          >
            编辑
          </el-button>
          <el-button
              type="danger"
              size="small"
              icon="el-icon-delete"
              plain   @click="deleteRow(row)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-drawer
        title="添加xxx"
        :visible.sync="addDrawer"
        direction="rtl"
        :size="520"
        :before-close="handleClose"
    >
      <v-app>
        <add-site @closeDrawer="submitClose"/>
      </v-app>
    </el-drawer>
    <el-drawer
        title="编辑xxx"
        :visible.sync="detailDrawer"
        direction="rtl"
        :size="520"
    >
      <site-detail/>
    </el-drawer>
  </main-card>
</template>

<script>

  import MainCard from "@/components/mainCard/index";

  export default {
    components: {MainCard},
    data() {
      return {
        addDrawer: false,
        detailDrawer: false,
        list: [{
          xxx1: 'xxx1',
          xxx2: 'xxx2',
          xxx3: 'xxx3',
        }],
      }
    },
    methods: {
      deleteRow(row) {
      },
      viewRow(row) {
        this.detailDrawer = true
      },
      addRow() {
        this.addDrawer = true
      },
      submitClose() {
        this.addDrawer = false
      },
      handleClose() {
        this.$confirm('确认取消新建吗？')
          .then(_ => {
            this.addDrawer = false
          })
          .catch(_ => {
          });
      },
      confirmEdit(row) {
      }
    }
  }
</script>
