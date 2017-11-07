<template>
  <div class="root_con">
    <el-alert
      title="注意:"
      type="warning"
      :closable="false"
      close-text="">
      <p>1、系统管理员默认拥有高级权限，如果您不是薪酬负责人请立即移交权限。</p>
      <p>2、修改薪酬管理权限时，会向所有具备管理权限的管理员发送短信。</p>
      <p>3、薪酬管理员只能查看自己发送的工资记录。</p>
      <p>4、修改权限后，授权用户重新登陆后才能生效。</p>
    </el-alert>
    <template>
      <el-table
        :data="rootList"
        stripe
        style="width: 100%">
        <el-table-column
          prop="name"
          label="角色"
          width="180">
            <span></span>
        </el-table-column>
        <el-table-column
          prop="modules"
          label="包含模块"
          width=""
          filter-placement="bottom-end">
          <template scope="scope">
             <el-tag style="margin-left:10px;margin-top:5px;" v-for="(item ,index) in (scope.row.rule.split(','))" type="success" :key='index'>{{item}}</el-tag> 
          </template>
        </el-table-column>
        <el-table-column
          prop="edit"
          width="180"
          label="操作">
          <template scope="scope">
            <el-button 
              type="text" 
              size="small" 
              @click.native="editRoot = true; editInfo=scope.row"
            >编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="编辑权限" :visible.sync="editRoot">
      <el-transfer v-model="value1" :data="data"></el-transfer>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editRoot = false">取 消</el-button>
        <el-button type="primary" @click='editRoots'>确 定</el-button>
      </span>
    </el-dialog>

    </template>
  </div>
</template>

<script>

export default {
  name: 'Root',
  data () {
    let routerArr = ['EnterpriseService', 'BusinessManagement', 'SalaryBar', 'Root']
    const generateData = _ => {
      const data = []
      for (let i = 0; i < routerArr.length; i++) {
        data.push({
          key: routerArr[i],
          label: `${routerArr[i]}`
        })
      }
      return data
    }
    return {
      data: generateData(),
      value1: [],
      rootList: [],
      editRoot: false,
      editInfo: {}
    }
  },
  methods: {
    editRoots () {
      this.$store.dispatch('user/editRoot', {
        id: this.editInfo.id,
        rule: this.value1.join(',')
      }).then(
        (data) => {
          console.log(data)
          this.editRoot = false
          this.editInfo.rule = this.value1.join(',')
          this.value1 = []
        },
        () => {
          console.log('失败')
        }
      )
    }
  },
  created () {
    this.$store.dispatch('user/getRootList').then(
      (datas) => {
        this.rootList = datas
      }
    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
