<template>
  <div class="shopcar">
    <h1>购物车</h1>
    <div class="shopcar-container">
      <el-table
   ref="multipleTable"
   :data="tableData3"
   border
   tooltip-effect="dark"
   style="width: 100%"
   @selection-change="handleSelectionChange">
   <el-table-column
     type="selection"
     width="55"
     >
   </el-table-column>
   <el-table-column
     label="商品信息"
     width="120">
     <template scope="scope">{{ scope.row.info }}</template>
   </el-table-column>
   <el-table-column
     prop="price"
     label="商品金额"
     width="120">
   </el-table-column>
   <el-table-column
     prop="num"
     label="数量"
     width="80"
     show-overflow-tooltip>
   </el-table-column>
   <el-table-column
     prop="all-num"
     label="总金额"
     show-overflow-tooltip>
   </el-table-column>
   <el-table-column
     prop="delete"
     label="编辑"
     show-overflow-tooltip>
   </el-table-column>
 </el-table>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import './ShopCar.css'
export default {
  name:'shopcar',
  data(){
    return {
      tableData3: [{
         info: '信号与系统',
         price: '¥20.5',
         num: '2'
       }, {
         info: '操作系统',
         price: '¥55.0',
         num: '1'
       },{
         info: '高等数学',
         price: '¥30.5',
         num: '3 '
       }],
    }
  }
}
</script>

</style>
