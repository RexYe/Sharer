<template>
  <div class="shop">
    <div class="shop-container">
      <span class="title">商城</span>
      <div class="college-choose">
          <div class="block">
    <span class="demonstration">选择大学</span>
    <el-cascader
      placeholder="试试搜索：浙江工业大学"
      :options="options"
      filterable
      size="small"
    ></el-cascader>
  </div>
      </div>
    </div>
    <div class="border-line">
      <div class="shop-nav">
          <div class="allbook">
            全部书籍分类
          </div>
          <li id="hot-keywords">热门关键词:</li>
          <li id="hot-nav"v-for="item in hotnav"><a href="">{{item.title}}</a></li>

      </div>
    </div>
    <div class="shop-content">
      00
    </div>
    <div class="shop-car">
      <router-link to="/shopcar"><img src="../../img/shop-car.png" alt=""></router-link>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import './Shop.css'
export default {
  name:'shop',
  data(){
    return {
      hotnav:[{
        title:'信号与系统'
      },{
        title:'无线传感网'
      },{
        title:'统计学'
      },{
        title:'操作系统'
      },{
        title:'视听说'
      }

      ],
      options: [{
         value: 'zhejiang',
         label: '浙江省',
         children: [{
           value: 'hangzhou',
           label: '杭州',
           children: [{
             value: 'zjut',
             label: '浙江工业大学'
           }, {
             value: 'zju',
             label: '浙江大学'
           }, {
             value: 'xiaolv',
             label: '效率'
           }, {
             value: 'kekong',
             label: '可控'
           }]
         }, {
           value: 'daohang',
           label: '导航',
           children: [{
             value: 'cexiangdaohang',
             label: '侧向导航'
           }, {
             value: 'dingbudaohang',
             label: '顶部导航'
           }]
         }]
       }, {
         value: 'zujian',
         label: '组件',
         children: [{
           value: 'basic',
           label: 'Basic',
           children: [{
             value: 'layout',
             label: 'Layout 布局'
           }, {
             value: 'color',
             label: 'Color 色彩'
           }, {
             value: 'typography',
             label: 'Typography 字体'
           }, {
             value: 'icon',
             label: 'Icon 图标'
           }, {
             value: 'button',
             label: 'Button 按钮'
           }]
         }, {
           value: 'form',
           label: 'Form',
           children: [{
             value: 'radio',
             label: 'Radio 单选框'
           }, {
             value: 'checkbox',
             label: 'Checkbox 多选框'
           }, {
             value: 'input',
             label: 'Input 输入框'
           }, {
             value: 'input-number',
             label: 'InputNumber 计数器'
           }, {
             value: 'select',
             label: 'Select 选择器'
           }, {
             value: 'cascader',
             label: 'Cascader 级联选择器'
           }, {
             value: 'switch',
             label: 'Switch 开关'
           }, {
             value: 'slider',
             label: 'Slider 滑块'
           }, {
             value: 'time-picker',
             label: 'TimePicker 时间选择器'
           }, {
             value: 'date-picker',
             label: 'DatePicker 日期选择器'
           }, {
             value: 'datetime-picker',
             label: 'DateTimePicker 日期时间选择器'
           }, {
             value: 'upload',
             label: 'Upload 上传'
           }, {
             value: 'rate',
             label: 'Rate 评分'
           }, {
             value: 'form',
             label: 'Form 表单'
           }]
         }, {
           value: 'data',
           label: 'Data',
           children: [{
             value: 'table',
             label: 'Table 表格'
           }, {
             value: 'tag',
             label: 'Tag 标签'
           }, {
             value: 'progress',
             label: 'Progress 进度条'
           }, {
             value: 'tree',
             label: 'Tree 树形控件'
           }, {
             value: 'pagination',
             label: 'Pagination 分页'
           }, {
             value: 'badge',
             label: 'Badge 标记'
           }]
         }, {
           value: 'notice',
           label: 'Notice',
           children: [{
             value: 'alert',
             label: 'Alert 警告'
           }, {
             value: 'loading',
             label: 'Loading 加载'
           }, {
             value: 'message',
             label: 'Message 消息提示'
           }, {
             value: 'message-box',
             label: 'MessageBox 弹框'
           }, {
             value: 'notification',
             label: 'Notification 通知'
           }]
         }, {
           value: 'navigation',
           label: 'Navigation',
           children: [{
             value: 'menu',
             label: 'NavMenu 导航菜单'
           }, {
             value: 'tabs',
             label: 'Tabs 标签页'
           }, {
             value: 'breadcrumb',
             label: 'Breadcrumb 面包屑'
           }, {
             value: 'dropdown',
             label: 'Dropdown 下拉菜单'
           }, {
             value: 'steps',
             label: 'Steps 步骤条'
           }]
         }, {
           value: 'others',
           label: 'Others',
           children: [{
             value: 'dialog',
             label: 'Dialog 对话框'
           }, {
             value: 'tooltip',
             label: 'Tooltip 文字提示'
           }, {
             value: 'popover',
             label: 'Popover 弹出框'
           }, {
             value: 'card',
             label: 'Card 卡片'
           }, {
             value: 'carousel',
             label: 'Carousel 走马灯'
           }, {
             value: 'collapse',
             label: 'Collapse 折叠面板'
           }]
         }]
       }, {
         value: 'ziyuan',
         label: '资源',
         children: [{
           value: 'axure',
           label: 'Axure Components'
         }, {
           value: 'sketch',
           label: 'Sketch Templates'
         }, {
           value: 'jiaohu',
           label: '组件交互文档'
         }]
       }]
    }
  }
}
</script>

<style lang="css">

</style>
