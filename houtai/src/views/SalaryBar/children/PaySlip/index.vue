<template>
  <div class="PaySlip">
    <div class="title">
      <div class="left">2017年薪资详情</div>
      <div class="right">
        <span>文件传输</span>
        <span>修改历史</span>
      </div>
    </div>
    <div class="info">
      <a><span><i></i>实发总金额</span><b>2040322323</b></a>
      <a><span><i></i>状态</span><b>部分撤回</b></a>
      <a><span><i></i>发送时间</span><em>02月11日 14:00:00</em></a>
      <a><span><i></i>已确认</span><b>23</b></a>
      <a><span><i></i>警告</span><b>3</b></a>
    </div>
    <div class="top">
      <div class="search">
        <el-input placeholder="搜索姓名" icon="search"></el-input>
      </div>
      <div class="selectBox">
        <span>
          <el-select v-model="formInline.sendMode" placeholder="发送方式">
            <el-option label="发送短信" value="message"></el-option>
            <el-option label="发送邮件" value="email"></el-option>
          </el-select>
        </span>
        <span>
          <el-select label-width='150px' v-model="formInline.sendCase" placeholder="发送情况">
            <el-option label="全部" value="all"></el-option>
            <el-option label="已发送" value="hasSent"></el-option>
            <el-option label="已撤回" value="withdrawn"></el-option>
            <el-option label="未发送" value="notSent"></el-option>
          </el-select>  
        </span>  
        <span>
          <el-select label-width='150px' v-model="formInline.confirmSend" placeholder="确认情况">
            <el-option label="A" value="A"></el-option>
            <el-option label="B" value="B"></el-option>
          </el-select>  
        </span>  
      </div>
    </div>
    <template>
      <el-table
        :data="employeeList"
        stripe
        style="width: 100%">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="100">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="手机号"
          width="170">
        </el-table-column>
        <el-table-column
          prop="salary"
          label="薪资"
          width="120">
        </el-table-column>
        <el-table-column
          prop="sendMode"
          label="发送方式"
          width="180">
        </el-table-column>
        <el-table-column
            prop="tab"
            label="发送情况"
            width="120"
            :filters="[{ text: '已发送', value: '已发送' }, { text: '未发送', value: '未发送' }]"
            :filter-method="filterTag"
            filter-placement="bottom-end">
            <template scope="scope">
              <el-tag
                :type="scope.row.tag === '已发送' ? 'primary' : 'success'"
                close-transition>{{scope.row.tag}}</el-tag>
            </template>
        </el-table-column>
        <el-table-column
          prop="confirmSend"
          label="确认情况"
          width="180">
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
  </div>
</template>

<script>
export default {
  name: 'PaySlip',
  data () {
    return {
      formInline: {
        sendMode: '',
        sendCase: '',
        confirmSend: ''
      },
      employeeList: [],
      page: 0,
      pageSize: 5
    }
  },
  methods: {
    getEmployeeList () {
      this.$store.dispatch('employeeList/getEmployeeList', {
        page: this.page,
        pageSize: this.pageSize
      }).then(
        (data) => {
          console.log(data)
          this.employeeList = data
        }
      )
    },
    filterTag (value, row) {
      return row.tag === value
    },
    currentPageChange (val) {
      this.page = val - 1
      this.getEmployeeList(this.pageSize, this.page)
    },
    handleEdit (index, row) {
    },
    handleDelete (index, row) {
    }
  },
  created () {
    this.getEmployeeList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.PaySlip{
  width: 100%;
  .title{
    width: 100%;
    height: 0.3rem;
    padding-top: .2rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #666;
    .left{
      font-size: .16rem;
      margin-left: .3rem;
    }
    .right{
      font-size: .12rem;
      span{
        margin-right: .2rem;
      }
    }
  }
  .info{
    margin-top: .3rem;
    width: 100%;
    height: 1.2rem;
    a{
      float: left;
      padding: 0 .3rem;
      border-right: 1px solid #666;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span{
        margin-bottom: .2rem;
        font-size: .14rem;
      }
      b{
        font-size: .2rem;
        font-weight: 400;
      }
      em{
        font-style: normal;
        font-size: .14rem;
      }
    }
  }
  .top{
    width: 100%;
    height: 0.4rem;
    .search{
      width: 1.5rem;
      display: inline-block;
      margin-left: .3rem;
    }
    .selectBox{
      display: inline-block;
      span{
        width: 1.5rem;
        margin-left: .1rem;
        display: inline-block;
      }
    }
  }
}
</style>
