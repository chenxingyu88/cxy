<template>
  <div class="BusinessAccount">
    <el-form :inline="true" class="demo-form-inline">
      <el-row>
        <el-col :span='18'>
          <el-form-item >
            <el-input placeholder="输入姓名搜索" icon="search" v-model='info'></el-input>
          </el-form-item>
          <el-form-item >
            <el-button type="primary" @click='searchInfo'>搜索</el-button>
          </el-form-item>
        </el-col>
        <el-col :span='6' style="text-align:right;">
          <el-button type="primary" @click="dialogFormVisible = true">添加员工</el-button>
        </el-col>
      </el-row>
    </el-form>
    <template>
      <el-table
        :data="employeeList"
        stripe
        style="width: 100%">
        <el-table-column type="expand">
            <template scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="id">
                  <span>{{props.row.id}}</span>
                </el-form-item>
                <el-form-item label="姓名">
                  <span>{{props.row.name}}</span>
                </el-form-item>
                <el-form-item label="学历">
                  <span>{{props.row.education}}</span>
                </el-form-item>
                <el-form-item label="手机号">
                  <span>{{props.row.phone}}</span>
                </el-form-item>
                <el-form-item label="身份证">
                  <span>{{props.row.idcard}}</span>
                </el-form-item>
                <el-form-item label="性别">
                  <span>{{props.row.sex === '0' ? '女' : '男'}}</span>
                </el-form-item>
                <el-form-item label="学历">
                  <span>{{props.row.education}}</span>
                </el-form-item>
                <el-form-item label="薪资">
                  <span>{{props.row.salary}}</span>
                </el-form-item>
                <el-form-item label="部门">
                  <span>{{props.row.bumen}}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="100">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="手机号"
          width="240">
        </el-table-column>
        <el-table-column
          prop="state"
          label="员工状态">
          <template scope="scope">{{scope.row.state === '1' ? '在职' : '辞职'}}</template>
        </el-table-column>
        <el-table-column
          prop="idcard"
          label="身份证"
          width="240">
        </el-table-column>
        <el-table-column
          prop="sex"
          label="性别">
          <template scope="scope">{{scope.row.sex === '1' ? '男' : '女'}}</template>
        </el-table-column>
        <el-table-column
          prop="bianji"
          label="操作">
          <template scope="scope">
            <el-button
              size="small"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
    <div class="block" style="text-align:center">
      <el-pagination
        layout="prev, pager, next"
        :current-page='page+1'
        @current-change='currentPageChange'
        :total="100">
      </el-pagination>
    </div>

    <el-dialog top = 5% title="添加新员工" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="员工姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" :label-width="formLabelWidth">
          <el-input v-model="form.phone" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="身份证号" :label-width="formLabelWidth">
          <el-input v-model="form.idcard" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="员工薪资" :label-width="formLabelWidth">
          <el-input v-model="form.salary" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="员工性别" :label-width="formLabelWidth">
          <el-select v-model="form.sex" placeholder="请选择性别">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="员工学历" :label-width="formLabelWidth">
          <el-select v-model="form.education" placeholder="请选择学历">
            <el-option label="本科" value="本科"></el-option>
            <el-option label="专科" value="专科"></el-option>
            <el-option label="高中" value="高中"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="入职部门" :label-width="formLabelWidth">
          <el-select v-model="form.bumen" placeholder="请选择学历">
            <el-option label="人事部" value="人事部"></el-option>
            <el-option label="技术部" value="技术部"></el-option>
            <el-option label="财务部" value="财务部"></el-option>
            <el-option label="市场部" value="市场部"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addEmployee">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog top = 5% title="编辑员工" :visible.sync="editBox">
      <el-form :model="editform">
        <el-form-item label="员工姓名" :label-width="formLabelWidth">
          <el-input v-model="editform.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" :label-width="formLabelWidth">
          <el-input v-model="editform.phone" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="身份证号" :label-width="formLabelWidth">
          <el-input v-model="editform.idcard" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="员工薪资" :label-width="formLabelWidth">
          <el-input v-model="editform.salary" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="员工性别" :label-width="formLabelWidth">
          <el-select v-model="editform.sex" placeholder="请选择性别">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="员工学历" :label-width="formLabelWidth">
          <el-select v-model="editform.education" placeholder="请选择学历">
            <el-option label="本科" value="本科"></el-option>
            <el-option label="专科" value="专科"></el-option>
            <el-option label="高中" value="高中"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="入职部门" :label-width="formLabelWidth">
          <el-select v-model="editform.bumen" placeholder="请选择学历">
            <el-option label="人事部" value="人事部"></el-option>
            <el-option label="技术部" value="技术部"></el-option>
            <el-option label="财务部" value="财务部"></el-option>
            <el-option label="市场部" value="市场部"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="员工状态" :label-width="formLabelWidth">
          <el-select v-model="editform.state" placeholder="请选择状态">
            <el-option label="在职" value="1"></el-option>
            <el-option label="辞职" value="0"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editBox = false">取 消</el-button>
        <el-button type="primary" @click='editInfo'>确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'BusinessAccount',  // 企业账户
  data () {
    return {
      employeeList: [],
      page: 0,
      pageSize: 10,
      count: 0,
      flg: false,
      editBox: false,
      info: '',
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: '',
        phone: '',
        idcard: '',
        salary: '',
        sex: '',
        education: '',
        bumen: ''
      },
      editform: {
        id: '',
        name: '',
        phone: '',
        idcard: '',
        salary: '',
        sex: '',
        education: '',
        bumen: ''
      },
      formLabelWidth: '120px'
    }
  },
  created () {
    this.getEmployeeList()
  },
  methods: {
    getEmployeeList (pageSize = 10, page = 0) {
      this.$store.dispatch('employeeList/getEmployeeList', {
        page: this.page,
        pageSize: this.pageSize,
        info: this.info
      }).then(
        (data) => {
          this.employeeList = data
        }
      )
    },
    editInfo () {
      this.$store.dispatch('employeeList/editEmployee', this.editform).then(
        (data) => {
          this.editBox = false
          this.page = 0
          this.getEmployeeList(this.pageSize, this.page)
        }
      )
    },
    searchInfo () {
      this.getEmployeeList(this.pageSize, this.page)
    },
    currentPageChange (val) {
      this.page = val - 1
      this.getEmployeeList(this.pageSize, this.page)
    },
    addEmployee () {
      this.$store.dispatch('employeeList/addEmployee', this.form).then(
        (data) => {
          this.dialogFormVisible = false
          this.page = 0
          this.getEmployeeList(this.pageSize, this.page)
        }
      )
    },
    handleEdit (index, row) {
      this.editBox = true
      this.editform.name = row.name
      this.editform.id = row.id
      this.editform.phone = row.phone
      this.editform.idcard = row.idcard
      this.editform.sex = row.sex
      this.editform.salary = row.salary
      this.editform.education = row.education
      this.editform.bumen = row.bumen
      this.editform.state = row.state
    },
    handleDelete (index, row) {
      this.$store.dispatch('employeeList/deleteEmployee', {
        id: row.id
      }).then(
        (data) => {
          this.page = 0
          this.getEmployeeList(this.pageSize, this.page)
        }
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>

</style>
