<template>
  <div class="wrapper">
    <div class="home_wap">
      <img src="@/assets/logo.png" alt srcset />
      <h2>WEB 前端 CSS3.0 JS HTML5 技术</h2>
    </div>
    <el-combo-grid  
        v-model="form.studentName"
        :placeholder="'请选择交款学生'"
        :requestUrl="'/api/edu/student/listPage'"
        :requestParam="{}"
        :pagination="true"
        :columns="students_columns"
        :show-index="true"
        :item-value="'name'"
        :panel-style="'width:658px !important'"
        @row-select-event="studentSelect">
    </el-combo-grid>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ElComboGrid from '../../components/el-combo-grid.vue';

export default {
  name: "Home",
  components: {
    HelloWorld,
    ElComboGrid
  },
  data() {
    return {
        input: '',
        form:{
            studentName:''
        },
        // 控制表头
        students_columns: [
            {
                type: '类型1',
                key: 'name',
                label: '姓名',
                align: 'center',
                width: 150,
                headerAlign: 'center'
            }, 
            {
                type: '类型2',
                key: 'phone',
                label: '电话',
                align: 'center',
                width: 150,
                headerAlign: 'center'
            }, 
            {
                type: '类型3',
                key: 'address',
                label: '地址',
                align: 'center',
                width: 150,
                headerAlign: 'center'
            }, 
            {
                type: '类型4',
                key: 'date',
                label: '时间',
                align: 'center',
                width: 150,
                headerAlign: 'center'
            }]
    }
  },
  methods:{
        studentSelect(row){
            console.log(row, 5555);
        }
  }
};
</script>
<style lang="scss" src="./style.scss">
</style>
