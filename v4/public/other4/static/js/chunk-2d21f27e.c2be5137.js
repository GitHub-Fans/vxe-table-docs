(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21f27e"],{d92e:function(e,t,a){"use strict";a.r(t);var l=a("7a23");const n=Object(l["createStaticVNode"])('<p class="tip"> 自定义渲染 <a class="link" href="https://www.npmjs.com/package/element-plus" target="_blank">element-plus</a> 组件，自定义渲染需要配合 updateStatus 方法使用，在对应单元格的值发生改变时调用更新状态<br><a class="link" href="https://www.npmjs.com/package/vxe-table" target="_blank">vxe-table</a> 作为表格组件，可以很容易跟其他优秀的组件库互相集成，以下为简单示例可供参考。<br> 建议通过使用 <a class="link" href="https://github.com/x-extends/vxe-table-plugin-element" target="_blank">vxe-table-plugin-element</a> 适配插件来解决跨组件渲染的兼容性问题，例如：无法下拉选中...等<br><span class="red">（注：该示例仅供参考，具体逻辑请自行实现）</span></p>',1),o=Object(l["createElementVNode"])("span",null,"序号",-1),d=Object(l["createElementVNode"])("i",{class:"el-icon-question"},null,-1),r=Object(l["createElementVNode"])("i",{class:"el-icon-warning"},null,-1),i={class:"demo-code"};function c(e,t,a,c,s,m){const u=Object(l["resolveComponent"])("vxe-column"),p=Object(l["resolveComponent"])("el-input"),b=Object(l["resolveComponent"])("el-autocomplete"),g=Object(l["resolveComponent"])("el-input-number"),x=Object(l["resolveComponent"])("el-option"),h=Object(l["resolveComponent"])("el-select"),v=Object(l["resolveComponent"])("el-cascader"),f=Object(l["resolveComponent"])("el-date-picker"),w=Object(l["resolveComponent"])("el-time-select"),j=Object(l["resolveComponent"])("el-color-picker"),O=Object(l["resolveComponent"])("el-rate"),V=Object(l["resolveComponent"])("el-switch"),T=Object(l["resolveComponent"])("vxe-table"),k=Object(l["resolveComponent"])("pre-code");return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",null,[n,Object(l["createVNode"])(T,{border:"","show-overflow":"","show-footer":"","keep-source":"",ref:"xTable",height:"600",class:"my-xtable-element",loading:e.demo1.loading,data:e.demo1.tableData,"footer-method":e.footerMethod,"edit-config":{trigger:"click",mode:"row",showStatus:!0}},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(u,{type:"checkbox",width:"60"}),Object(l["createVNode"])(u,{type:"seq",width:"80"},{header:Object(l["withCtx"])(()=>[o,d]),_:1}),Object(l["createVNode"])(u,{field:"name",title:"ElInput","min-width":"140","edit-render":{}},{edit:Object(l["withCtx"])(t=>[Object(l["createVNode"])(p,{modelValue:t.row.name,"onUpdate:modelValue":e=>t.row.name=e,onInput:a=>e.$refs.xTable.updateStatus(t)},null,8,["modelValue","onUpdate:modelValue","onInput"])]),_:1}),Object(l["createVNode"])(u,{field:"role",title:"ElAutocomplete","min-width":"160","edit-render":{}},{edit:Object(l["withCtx"])(({row:t})=>[Object(l["createVNode"])(b,{modelValue:t.role,"onUpdate:modelValue":e=>t.role=e,"fetch-suggestions":e.roleSearchEvent},null,8,["modelValue","onUpdate:modelValue","fetch-suggestions"])]),_:1}),Object(l["createVNode"])(u,{field:"age",title:"ElInputNumber",width:"160","edit-render":{}},{header:Object(l["withCtx"])(({column:e})=>[Object(l["createElementVNode"])("span",null,Object(l["toDisplayString"])(e.title),1),r]),edit:Object(l["withCtx"])(({row:e})=>[Object(l["createVNode"])(g,{modelValue:e.age,"onUpdate:modelValue":t=>e.age=t,max:99,min:18},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),Object(l["createVNode"])(u,{field:"sex",title:"ElSelect",width:"140","edit-render":{}},{edit:Object(l["withCtx"])(t=>[Object(l["createVNode"])(h,{modelValue:t.row.sex,"onUpdate:modelValue":e=>t.row.sex=e,onChange:a=>e.$refs.xTable.updateStatus(t)},{default:Object(l["withCtx"])(()=>[(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(e.demo1.sexList,e=>(Object(l["openBlock"])(),Object(l["createBlock"])(x,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]),default:Object(l["withCtx"])(({row:t})=>[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.getSelectLabel(t.sex,e.demo1.sexList)),1)]),_:1}),Object(l["createVNode"])(u,{field:"sex1",title:"ElSelect",width:"180","edit-render":{}},{edit:Object(l["withCtx"])(t=>[Object(l["createVNode"])(h,{modelValue:t.row.sex1,"onUpdate:modelValue":e=>t.row.sex1=e,multiple:""},{default:Object(l["withCtx"])(()=>[(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(e.demo1.sexList,e=>(Object(l["openBlock"])(),Object(l["createBlock"])(x,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),default:Object(l["withCtx"])(({row:t})=>[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.getSelectMultipleLabel(t.sex1,e.demo1.sexList)),1)]),_:1}),Object(l["createVNode"])(u,{field:"region",title:"ElCascader",width:"200","edit-render":{}},{edit:Object(l["withCtx"])(({row:t})=>[Object(l["createVNode"])(v,{modelValue:t.region,"onUpdate:modelValue":e=>t.region=e,options:e.demo1.regionList},null,8,["modelValue","onUpdate:modelValue","options"])]),default:Object(l["withCtx"])(({row:t})=>[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.getCascaderLabel(t.region,e.demo1.regionList)),1)]),_:1}),Object(l["createVNode"])(u,{field:"date",title:"ElDatePicker",width:"200","edit-render":{}},{edit:Object(l["withCtx"])(({row:e})=>[Object(l["createVNode"])(f,{modelValue:e.date,"onUpdate:modelValue":t=>e.date=t,type:"date",format:"YYYY/MM/DD"},null,8,["modelValue","onUpdate:modelValue"])]),default:Object(l["withCtx"])(({row:t})=>[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.formatDate(t.date,"YYYY/MM/DD")),1)]),_:1}),Object(l["createVNode"])(u,{field:"date1",title:"ElDatePicker",width:"220","edit-render":{}},{edit:Object(l["withCtx"])(({row:e})=>[Object(l["createVNode"])(f,{modelValue:e.date1,"onUpdate:modelValue":t=>e.date1=t,type:"datetime",format:"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue","onUpdate:modelValue"])]),default:Object(l["withCtx"])(({row:t})=>[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.formatDate(t.date1,"YYYY-MM-DD HH:mm:ss")),1)]),_:1}),Object(l["createVNode"])(u,{field:"date2",title:"ElTimePicker",width:"200","edit-render":{}},{edit:Object(l["withCtx"])(({row:e})=>[Object(l["createVNode"])(w,{modelValue:e.date2,"onUpdate:modelValue":t=>e.date2=t,"picker-options":{start:"08:30",step:"00:15",end:"18:30"}},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),Object(l["createVNode"])(u,{field:"color1",title:"ElColorPicker",width:"140","edit-render":{}},{edit:Object(l["withCtx"])(({row:e})=>[Object(l["createVNode"])(j,{modelValue:e.color1,"onUpdate:modelValue":t=>e.color1=t},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),Object(l["createVNode"])(u,{field:"rate",title:"ElRate",width:"200"},{default:Object(l["withCtx"])(({row:e})=>[Object(l["createVNode"])(O,{modelValue:e.rate,"onUpdate:modelValue":t=>e.rate=t},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),Object(l["createVNode"])(u,{field:"flag",title:"ElSwitch",width:"100"},{default:Object(l["withCtx"])(({row:e})=>[Object(l["createVNode"])(V,{modelValue:e.flag,"onUpdate:modelValue":t=>e.flag=t},null,8,["modelValue","onUpdate:modelValue"])]),_:1})]),_:1},8,["loading","data","footer-method"]),Object(l["createElementVNode"])("p",i,Object(l["toDisplayString"])(e.$t("app.body.button.showCode")),1),Object(l["createElementVNode"])("pre",null,[Object(l["createTextVNode"])("      "),Object(l["createVNode"])(k,{class:"xml"},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.demoCodes[0]),1)]),_:1}),Object(l["createTextVNode"])("\n      "),Object(l["createVNode"])(k,{class:"typescript"},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.demoCodes[1]),1)]),_:1}),Object(l["createTextVNode"])("\n    ")])])}a("14d9");var s=a("c695"),m=a.n(s),u=Object(l["defineComponent"])({setup(){const e=Object(l["ref"])({}),t=[{value:"Designer",name:"Designer"},{value:"Develop",name:"Develop"},{value:"Test",name:"Test"},{value:"PM",name:"PM"}],a=Object(l["reactive"])({loading:!1,tableData:[],sexList:[{value:"1",label:"男"},{value:"0",label:"女"}],regionList:[{label:"北京",value:1,children:[{value:3,label:"东城区"},{value:4,label:"西城区"}]},{label:"上海",value:21,children:[{value:23,label:"黄浦区"},{value:24,label:"卢湾区"}]},{label:"广东",value:42,children:[{value:43,label:"广州市"},{value:67,label:"深圳市"}]}]}),n=(e,t)=>m.a.toDateString(e,t),o=(e,t,a="value",l="label")=>{const n=t.find(t=>t[a]===e);return n?n[l]:null},d=(e,t,a="value",l="label")=>e.map(e=>{const n=t.find(t=>t[a]===e);return n?n[l]:null}).join(", "),r=(e,t)=>{const a=e||[],l=[],n=function(e,t){const o=a[e];t&&a.length>e&&t.forEach(t=>{t.value===o&&(l.push(t.label),n(++e,t.children))})};return n(0,t),l.join(" / ")},i=(e,a)=>{const l=e?t.filter(t=>0===t.name.toLowerCase().indexOf(e.toLowerCase())):t;setTimeout(()=>{a(l)},500*Math.random())},c=(e,t)=>{let a=0;return e.forEach(e=>{a+=Number(e[t])}),a/e.length},s=(e,t)=>{let a=0;return e.forEach(e=>{a+=Number(e[t])}),a},u=({columns:e,data:t})=>[e.map((e,a)=>0===a?"平均":["age","rate"].includes(e.property)?c(t,e.property):null),e.map((e,a)=>0===a?"和值":["age","rate"].includes(e.property)?s(t,e.property):null)];return a.loading=!0,setTimeout(()=>{a.tableData=[{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"0",sex1:[],state:"",region:[],age:28,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:5,rate1:59,flag:!1,address:"Shenzhen"},{id:10002,name:"Test2",nickname:"T2",role:"Test",sex:"1",sex1:[],state:"",region:[],age:22,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:2,rate1:22,flag:!1,address:"Guangzhou"},{id:10003,name:"Test3",nickname:"T3",role:"PM",sex:"0",sex1:[],state:"",region:[],age:32,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:3,rate1:12,flag:!1,address:"Shanghai"},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"0",sex1:["1","0"],state:"",region:[],age:23,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",color1:"",tree1:"",tree2:[],date7:"",rate:33,rate1:4,flag:!0,address:"Shenzhen"},{id:10005,name:"Test5",nickname:"T5",role:"Develop",sex:"0",sex1:["1","0"],state:"",region:[],age:30,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",color1:"",tree1:"",tree2:[],date7:"",rate:0,rate1:15,flag:!0,address:"Shanghai"},{id:10006,name:"Test6",nickname:"T6",role:"Designer",sex:"0",sex1:[],state:"",region:[],age:21,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:3,rate1:73,flag:!1,address:"Shenzhen"},{id:10007,name:"Test7",nickname:"T7",role:"Test",sex:"1",sex1:["1"],state:"",region:[],age:29,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:0,rate1:0,flag:!0,address:"Guangzhou"},{id:10008,name:"Test8",nickname:"T8",role:"Develop",sex:"1",sex1:[],state:"",region:[],age:35,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:2,rate1:14,flag:!1,address:"Shenzhen"},{id:10009,name:"Test9",nickname:"T9",role:"Test",sex:"1",sex1:["0"],state:"",region:[],age:24,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:3,rate1:52,flag:!1,address:"Shenzhen"},{id:100010,name:"Test10",nickname:"T10",role:"Develop",sex:"1",sex1:[],state:"",region:[],age:20,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:4,rate1:83,flag:!1,address:"Guangzhou"}],a.loading=!1},500),{xTable:e,demo1:a,formatDate:n,getSelectLabel:o,getSelectMultipleLabel:d,getCascaderLabel:r,roleSearchEvent:i,footerMethod:u,demoCodes:['\n        <vxe-table\n          border\n          show-overflow\n          show-footer\n          keep-source\n          ref="xTable"\n          height="600"\n          class="my-xtable-element"\n          :loading="demo1.loading"\n          :data="demo1.tableData"\n          :footer-method="footerMethod"\n          :edit-config="{trigger: \'click\', mode: \'row\', showStatus: true}">\n          <vxe-column type="checkbox" width="60"></vxe-column>\n          <vxe-column type="seq" width="80">\n            <template #header>\n              <span>序号</span>\n              <i class="el-icon-question"></i>\n            </template>\n          </vxe-column>\n          <vxe-column field="name" title="ElInput" min-width="140" :edit-render="{}">\n            <template #edit="scope">\n              <el-input v-model="scope.row.name" @input="$refs.xTable.updateStatus(scope)"></el-input>\n            </template>\n          </vxe-column>\n          <vxe-column field="role" title="ElAutocomplete" min-width="160" :edit-render="{}">\n            <template #edit="{ row }">\n              <el-autocomplete v-model="row.role" :fetch-suggestions="roleSearchEvent"></el-autocomplete>\n            </template>\n          </vxe-column>\n          <vxe-column field="age" title="ElInputNumber"  width="160" :edit-render="{}">\n            <template #header="{ column }">\n              <span>{{ column.title }}</span>\n              <i class="el-icon-warning"></i>\n            </template>\n            <template #edit="{ row }">\n              <el-input-number v-model="row.age" :max="99" :min="18"></el-input-number>\n            </template>\n          </vxe-column>\n          <vxe-column field="sex" title="ElSelect" width="140" :edit-render="{}">\n            <template #edit="scope">\n              <el-select v-model="scope.row.sex" @change="$refs.xTable.updateStatus(scope)">\n                <el-option v-for="item in demo1.sexList" :key="item.value" :label="item.label" :value="item.value"></el-option>\n              </el-select>\n            </template>\n            <template #default="{ row }">{{ getSelectLabel(row.sex, demo1.sexList) }}</template>\n          </vxe-column>\n          <vxe-column field="sex1" title="ElSelect" width="180" :edit-render="{}">\n            <template #edit="scope">\n              <el-select v-model="scope.row.sex1" multiple>\n                <el-option v-for="item in demo1.sexList" :key="item.value" :label="item.label" :value="item.value"></el-option>\n              </el-select>\n            </template>\n            <template #default="{ row }">{{ getSelectMultipleLabel(row.sex1, demo1.sexList) }}</template>\n          </vxe-column>\n          <vxe-column field="region" title="ElCascader" width="200" :edit-render="{}">\n            <template #edit="{ row }">\n              <el-cascader v-model="row.region" :options="demo1.regionList"></el-cascader>\n            </template>\n            <template #default="{ row }">{{ getCascaderLabel(row.region, demo1.regionList) }}</template>\n          </vxe-column>\n          <vxe-column field="date" title="ElDatePicker" width="200" :edit-render="{}">\n            <template #edit="{ row }">\n              <el-date-picker v-model="row.date" type="date" format="YYYY/MM/DD"></el-date-picker>\n            </template>\n            <template #default="{ row }">{{ formatDate(row.date, \'YYYY/MM/DD\') }}</template>\n          </vxe-column>\n          <vxe-column field="date1" title="ElDatePicker" width="220" :edit-render="{}">\n            <template #edit="{ row }">\n              <el-date-picker v-model="row.date1" type="datetime" format="YYYY-MM-DD HH:mm:ss"></el-date-picker>\n            </template>\n            <template #default="{ row }">{{ formatDate(row.date1, \'YYYY-MM-DD HH:mm:ss\') }}</template>\n          </vxe-column>\n          <vxe-column field="date2" title="ElTimePicker" width="200" :edit-render="{}">\n            <template #edit="{ row }">\n              <el-time-select v-model="row.date2" :picker-options="{start: \'08:30\', step: \'00:15\', end: \'18:30\'}"></el-time-select>\n            </template>\n          </vxe-column>\n          <vxe-column field="color1" title="ElColorPicker" width="140" :edit-render="{}">\n            <template #edit="{ row }">\n              <el-color-picker v-model="row.color1"></el-color-picker>\n            </template>\n          </vxe-column>\n          <vxe-column field="rate" title="ElRate" width="200">\n            <template #default="{ row }">\n              <el-rate v-model="row.rate"></el-rate>\n            </template>\n          </vxe-column>\n          <vxe-column field="flag" title="ElSwitch" width="100">\n            <template #default="{ row }">\n              <el-switch v-model="row.flag"></el-switch>\n            </template>\n          </vxe-column>\n        </vxe-table>\n        ',"\n        import { defineComponent, reactive, ref } from 'vue'\n        import { VxeTableInstance, VxeTablePropTypes } from 'vxe-table'\n        import XEUtils from 'xe-utils'\n\n        export default defineComponent({\n          setup () {\n            const xTable = ref({} as VxeTableInstance)\n\n            const restaurants = [\n              { value: 'Designer', name: 'Designer' },\n              { value: 'Develop', name: 'Develop' },\n              { value: 'Test', name: 'Test' },\n              { value: 'PM', name: 'PM' }\n            ]\n\n            const demo1 = reactive({\n              loading: false,\n              tableData: [] as any[],\n              sexList: [\n                { value: '1', label: '男' },\n                { value: '0', label: '女' }\n              ],\n              regionList: [\n                {\n                  label: '北京',\n                  value: 1,\n                  children: [\n                    { value: 3, label: '东城区' },\n                    { value: 4, label: '西城区' }\n                  ]\n                },\n                {\n                  label: '上海',\n                  value: 21,\n                  children: [\n                    { value: 23, label: '黄浦区' },\n                    { value: 24, label: '卢湾区' }\n                  ]\n                },\n                {\n                  label: '广东',\n                  value: 42,\n                  children: [\n                    { value: 43, label: '广州市' },\n                    { value: 67, label: '深圳市' }\n                  ]\n                }\n              ]\n            })\n\n            const formatDate = (value: any, format: string) => {\n              return XEUtils.toDateString(value, format)\n            }\n\n            const getSelectLabel = (value: any, list: any[], valueProp = 'value', labelField = 'label') => {\n              const item = list.find(item => item[valueProp] === value)\n              return item ? item[labelField] : null\n            }\n\n            const getSelectMultipleLabel = (value: any[], list: any[], valueProp = 'value', labelField = 'label') => {\n              return value.map(val => {\n                const item = list.find(item => item[valueProp] === val)\n                return item ? item[labelField] : null\n              }).join(', ')\n            }\n\n            const getCascaderLabel = (value: any, list: any[]) => {\n              const values: any[] = value || []\n              const labels: any[] = []\n              const matchCascaderData = function (index: any, list: any[]) {\n                const val = values[index]\n                if (list && values.length > index) {\n                  list.forEach(item => {\n                    if (item.value === val) {\n                      labels.push(item.label)\n                      matchCascaderData(++index, item.children)\n                    }\n                  })\n                }\n              }\n              matchCascaderData(0, list)\n              return labels.join(' / ')\n            }\n\n            const roleSearchEvent = (queryString: string, cb: (params: any) => void) => {\n              const results = queryString ? restaurants.filter(item => (item.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0)) : restaurants\n              setTimeout(() => {\n                cb(results)\n              }, 500 * Math.random())\n            }\n\n            const meanNum = (list: any[], field: string) => {\n              let count = 0\n              list.forEach(item => {\n                count += Number(item[field])\n              })\n              return count / list.length\n            }\n\n            const sumNum = (list: any[], field: string) => {\n              let count = 0\n              list.forEach(item => {\n                count += Number(item[field])\n              })\n              return count\n            }\n\n            const footerMethod: VxeTablePropTypes.FooterMethod = ({ columns, data }) => {\n              return [\n                columns.map((column, columnIndex) => {\n                  if (columnIndex === 0) {\n                    return '平均'\n                  }\n                  if (['age', 'rate'].includes(column.property)) {\n                    return meanNum(data, column.property)\n                  }\n                  return null\n                }),\n                columns.map((column, columnIndex) => {\n                  if (columnIndex === 0) {\n                    return '和值'\n                  }\n                  if (['age', 'rate'].includes(column.property)) {\n                    return sumNum(data, column.property)\n                  }\n                  return null\n                })\n              ]\n            }\n\n            demo1.loading = true\n            setTimeout(() => {\n              demo1.tableData = [\n                { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex1: [], state: '', region: [], age: 28, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 5, rate1: 59, flag: false, address: 'Shenzhen' },\n                { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: '1', sex1: [], state: '', region: [], age: 22, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 2, rate1: 22, flag: false, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: '0', sex1: [], state: '', region: [], age: 32, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 3, rate1: 12, flag: false, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '0', sex1: ['1', '0'], state: '', region: [], age: 23, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', color1: '', tree1: '', tree2: [], date7: '', rate: 33, rate1: 4, flag: true, address: 'Shenzhen' },\n                { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: '0', sex1: ['1', '0'], state: '', region: [], age: 30, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', color1: '', tree1: '', tree2: [], date7: '', rate: 0, rate1: 15, flag: true, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: '0', sex1: [], state: '', region: [], age: 21, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 3, rate1: 73, flag: false, address: 'Shenzhen' },\n                { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: '1', sex1: ['1'], state: '', region: [], age: 29, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 0, rate1: 0, flag: true, address: 'Guangzhou' },\n                { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: '1', sex1: [], state: '', region: [], age: 35, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 2, rate1: 14, flag: false, address: 'Shenzhen' },\n                { id: 10009, name: 'Test9', nickname: 'T9', role: 'Test', sex: '1', sex1: ['0'], state: '', region: [], age: 24, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 3, rate1: 52, flag: false, address: 'Shenzhen' },\n                { id: 100010, name: 'Test10', nickname: 'T10', role: 'Develop', sex: '1', sex1: [], state: '', region: [], age: 20, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 4, rate1: 83, flag: false, address: 'Guangzhou' }\n              ]\n              demo1.loading = false\n            }, 500)\n\n            return {\n              xTable,\n              demo1,\n              formatDate,\n              getSelectLabel,\n              getSelectMultipleLabel,\n              getCascaderLabel,\n              roleSearchEvent,\n              footerMethod\n                })\n              ]\n            }\n          }\n        })\n        "]}}}),p=a("6b0d"),b=a.n(p);const g=b()(u,[["render",c]]);t["default"]=g}}]);