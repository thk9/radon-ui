webpackJsonp([20,31],{2:/*!*****************************!*\
  !*** ./docs/views/index.js ***!
  \*****************************/
function(e,n,a){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0}),n.Mark=void 0;var l=a(7),A=r(l);n.Mark=A["default"]},3:/*!*************************************************************************************************************************************************************!*\
  !*** ./~/babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!./~/vue-loader/lib/selector.js?type=script&index=0!./docs/views/mark.vue ***!
  \*************************************************************************************************************************************************************/
function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(e){var n=document.createElement("div");return n.innerHTML=e,n.innerText||n.textContent};n["default"]={data:function(){return{mark:""}},ready:function(){this.mark=window.marked(a(this.$el.getElementsByClassName("ex-mark-text")[0].innerHTML))}}},4:/*!*********************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/vue-loader/lib/selector.js?type=style&index=0!./docs/views/mark.vue ***!
  \*********************************************************************************************************************************************/
function(e,n,a){n=e.exports=a(9)(),n.push([e.id,'.ex-mark-text{display:none}.marked p{max-width:40rem}.marked code{background:#f7f7f7;color:#ff5722}.marked pre code{display:block;background:#f7f7f7;padding:1rem;color:#999;font-size:.8rem;line-height:1.2;overflow-x:auto}.marked pre{line-height:1.5em;margin:1rem 0}.marked{font-size:.9rem;line-height:1.8;color:#666;max-width:40rem}.marked h1{font-size:1.6rem}.marked h2{font-size:1.2rem}.marked h2,.marked h3{position:relative}.marked h3:before{content:"#";color:#00bcd4;font-size:1.2em;font-weight:700;margin-right:.5rem}.marked blockquote{position:relative;font-size:90%;color:#404040;border-left:4px solid #67cdfb;padding-left:.8em;margin:1em 0;background:#f8f8f8;padding:1rem}.marked blockquote p{margin:0}.marked blockquote:before{position:absolute;top:14px;left:-12px;background-color:#67cdfb;color:#fff;content:"!";width:20px;height:20px;border-radius:100%;text-align:center;line-height:20px;font-weight:700;font-family:Dosis,Source Sans Pro,Helvetica Neue,Arial,sans-serif;font-size:14px}.marked ul,ol{padding:0 2rem;list-style:inherit}.marked table{width:100%;max-width:100%;text-align:left;border-radius:6px}.marked thead{background:#e0f5ff}.marked th{color:rgba(0,0,0,.870588);height:3rem;border-bottom:1px solid #e9e9e9}.marked tr>td:first-child,.marked tr>th:first-child{padding-left:.5rem}.marked tr>td:last-child,.marked tr>th:last-child{padding-right:.5rem}.marked tr>td{height:2rem;line-height:1rem;border-bottom:1px solid #ececec}@media screen and (max-width:768px){.ex-card{margin:0}}',"",{version:3,sources:["/./docs/views/mark.vue"],names:[],mappings:"AACA,cACI,YAAc,CACjB,AACD,UACI,eAAiB,CACpB,AACD,aACI,mBAAoB,AACpB,aAAe,CAClB,AACD,iBACI,cAAe,AACf,mBAAoB,AACpB,aAAc,AACd,WAAY,AACZ,gBAAiB,AACjB,gBAAiB,AACjB,eAAiB,CACpB,AACD,YACI,kBAAmB,AACnB,aAAe,CAClB,AACD,QACI,gBAAiB,AACjB,gBAAiB,AACjB,WAAY,AACZ,eAAiB,CACpB,AACD,WACI,gBAAkB,CACrB,AACD,WACI,gBAAkB,CAErB,AACD,sBAFI,iBAAmB,CAItB,AACD,kBACI,YAAa,AACb,cAAe,AACf,gBAAiB,AACjB,gBAAkB,AAClB,kBAAoB,CACvB,AACD,mBACI,kBAAmB,AACnB,cAAe,AACf,cAAe,AACf,8BAA+B,AAC/B,kBAAmB,AACnB,aAAc,AACd,mBAAoB,AACpB,YAAc,CACjB,AACD,qBACI,QAAU,CACb,AACD,0BACI,kBAAmB,AACnB,SAAU,AACV,WAAY,AACZ,yBAA0B,AAC1B,WAAY,AACZ,YAAa,AACb,WAAY,AACZ,YAAa,AACb,mBAAoB,AACpB,kBAAmB,AACnB,iBAAkB,AAClB,gBAAkB,AAClB,kEAA6E,AAC7E,cAAgB,CACnB,AACD,cACI,eAAgB,AAChB,kBAAoB,CACvB,AACD,cACI,WAAY,AACZ,eAAgB,AAChB,gBAAiB,AACjB,iBAAmB,CACtB,AACD,cACI,kBAAoB,CACvB,AACD,WACI,0BAA2B,AAC3B,YAAa,AACb,+BAAiC,CACpC,AACD,oDACI,kBAAmB,CACtB,AACD,kDACI,mBAAoB,CACvB,AACD,cACI,YAAa,AACb,iBAAkB,AAClB,+BAAiC,CACpC,AACD,oCACI,SACI,QAAU,CACb,CACJ",file:"mark.vue",sourcesContent:["\n.ex-mark-text {\n    display: none;\n}\n.marked p{\n    max-width: 40rem;\n}\n.marked code {\n    background: #f7f7f7;\n    color: #FF5722;\n}\n.marked pre code {\n    display: block;\n    background: #f7f7f7;\n    padding: 1rem;\n    color: #999;\n    font-size: .8rem;\n    line-height: 1.2;\n    overflow-x: auto;\n}\n.marked pre {\n    line-height: 1.5em;\n    margin: 1rem 0;\n}\n.marked {\n    font-size: .9rem;\n    line-height: 1.8;\n    color: #666;\n    max-width: 40rem;\n}\n.marked h1 {\n    font-size: 1.6rem;\n}\n.marked h2 {\n    font-size: 1.2rem;\n    position: relative;\n}\n.marked h3 {\n    position: relative;\n}\n.marked h3::before {\n    content: \"#\";\n    color: #00BCD4;\n    font-size: 1.2em;\n    font-weight: bold;\n    margin-right: .5rem;\n}\n.marked blockquote {\n    position: relative;\n    font-size: 90%;\n    color: #404040;\n    border-left: 4px solid #67cdfb;\n    padding-left: .8em;\n    margin: 1em 0;\n    background: #f8f8f8;\n    padding: 1rem;\n}\n.marked blockquote p {\n    margin: 0;\n}\n.marked blockquote::before {\n    position: absolute;\n    top: 14px;\n    left: -12px;\n    background-color: #67cdfb;\n    color: #fff;\n    content: \"!\";\n    width: 20px;\n    height: 20px;\n    border-radius: 100%;\n    text-align: center;\n    line-height: 20px;\n    font-weight: bold;\n    font-family: 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;\n    font-size: 14px;\n}\n.marked ul, ol {\n    padding: 0 2rem;\n    list-style: inherit;\n}\n.marked table {\n    width: 100%;\n    max-width: 100%;\n    text-align: left;\n    border-radius: 6px;\n}\n.marked thead {\n    background: #e0f5ff;\n}\n.marked th {\n    color: rgba(0,0,0,.870588);\n    height: 3rem;\n    border-bottom: 1px solid #e9e9e9;\n}\n.marked tr > td:first-child, .marked tr > th:first-child {\n    padding-left: .5rem\n}\n.marked tr > td:last-child, .marked tr > th:last-child {\n    padding-right: .5rem\n}\n.marked tr > td {\n    height: 2rem;\n    line-height: 1rem;\n    border-bottom: 1px solid #ececec;\n}\n@media screen and (max-width: 768px) {\n    .ex-card {\n        margin: 0;\n    }\n}\n"],sourceRoot:"webpack://"}])},5:/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/extract-text-webpack-plugin/loader.js?{"omit":1,"extract":true,"remove":true}!./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/vue-loader/lib/selector.js?type=style&index=0!./docs/views/mark.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************/
function(e,n,a){var r=a(4);"string"==typeof r&&(r=[[e.id,r,""]]),a(10)(r,{}),r.locals&&(e.exports=r.locals)},6:/*!******************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./docs/views/mark.vue ***!
  \******************************************************************************************************/
function(e,n){e.exports="<div class=marked> <div> {{{mark}}} </div> <slot></slot> </div>"},7:/*!*****************************!*\
  !*** ./docs/views/mark.vue ***!
  \*****************************/
function(e,n,a){var r,l;a(5),r=a(3),l=a(6),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),l&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=l)},328:/*!**********************************************************************************************************************************************************************!*\
  !*** ./~/babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!./~/vue-loader/lib/selector.js?type=script&index=0!./docs/views/form/cascader.vue ***!
  \**********************************************************************************************************************************************************************/
function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=a(2),l=a(8),A=[{value:"china",label:"中国",children:[{value:"sichuan",label:"四川",children:[{value:"chegndu",label:"成都"},{value:"deyang",label:"德阳"}]}]},{value:"America",label:"美国",children:[{value:"California",label:"加利福尼亚",children:[{value:"lake",label:"湖"},{value:"Los Angeles",label:"洛杉矶"}]},{value:"Delaware",label:"特拉华",children:[{value:"Dover",label:"多佛"}]}]},{value:"china",label:"中国",children:[{value:"sichuan",label:"四川",children:[{value:"chegndu",label:"成都"},{value:"deyang",label:"德阳"}]}]},{value:"America",label:"美国",children:[{value:"California",label:"加利福尼亚",children:[{value:"lake",label:"湖"},{value:"Los Angeles",label:"洛杉矶"}]},{value:"Delaware",label:"特拉华",children:[{value:"Dover",label:"多佛"}]}]},{value:"china",label:"中国",children:[{value:"sichuan",label:"四川",children:[{value:"chegndu",label:"成都"},{value:"deyang",label:"德阳"}]}]},{value:"America",label:"美国",children:[{value:"California",label:"加利福尼亚",children:[{value:"lake",label:"湖"},{value:"Los Angeles",label:"洛杉矶"}]},{value:"Delaware",label:"特拉华",children:[{value:"Dover",label:"多佛"}]}]}];n["default"]={data:function(){return{cascader:{options:A,valueArr:[]}}},components:{rdCascader:l.rdCascader,Mark:r.Mark}}},571:/*!***************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./docs/views/form/cascader.vue ***!
  \***************************************************************************************************************/
function(e,n){e.exports="<div class=ex-content> <div class=ex-card> <mark> <textarea class=ex-mark-text>\n# Cascader 级联选择\n级联选择框。\n\n## 何时使用\n\n - 需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。\n - 从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。\n - 比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验。\n        </textarea> </mark> <p> <rd-cascader :cascader=cascader></rd-cascader> </p> <mark> <textarea class=ex-mark-text>\n# API\n\n## cascader \ncascader 是级联组件的数据对象，它有选项数组 options 和 结果数组 valueArr\n```\ncascader: {\n    options: options,\n    valueArr: []\n}\n\n<rd-cascader :cascader=cascader></rd-cascader>\n```\n## options\noptions 带选取的级联数据\n```\nconst options = [{\n    // label 是级联选项展示值\n    label: '中国',\n\n    // value 是对象自定义属性\n    value: 'china',\n    // 也可以自定义其他属性\n    sku: '2234234',\n    id: 'j4jb345jb34j5',\n\n    // 该对象的子选项数组\n    children: [{\n        value: 'sichuan',\n        label: '四川',\n        children: [{\n            value: 'chegndu',\n            label: '成都'\n        }, {\n            value: 'deyang',\n            label: '德阳'\n        }]\n    }]\n}]\n```\n## valueArr\n选择结果数组\n\n```\n// 比如一次选择 美国 加利福尼亚 洛杉矶 valueArr会得到这样的数组\nvalueArr: [{\n    value: 'America',\n    label: '美国'\n}, {\n    value: 'California',\n    label: '加利福尼亚'\n}, {\n    value: 'Los Angeles',\n    label: '洛杉矶'\n}]\n```\n\n        </textarea> </mark> <mark> <textarea class=ex-mark-text>\n## 完整示例代码\n```javascript\nconst options = [{\n    value: 'china',\n    label: '中国',\n    children: [{\n        value: 'sichuan',\n        label: '四川',\n        children: [{\n            value: 'chegndu',\n            label: '成都'\n        }, {\n            value: 'deyang',\n            label: '德阳'\n        }]\n    }]\n}, {\n    value: 'America',\n    label: '美国',\n    children: [{\n        value: 'California',\n        label: '加利福尼亚',\n        children: [{\n            value: 'lake',\n            label: '湖'\n        }, {\n            value: 'Los Angeles',\n            label: '洛杉矶'\n        }]\n    }, {\n        value: 'Delaware',\n        label: '特拉华',\n        children: [{\n            value: 'Dover',\n            label: '多佛'\n        }]\n    }]\n}]\n\nexport default {\n    template: '<rd-cascader :cascader=cascader></rd-cascader>',\n    data () {\n        return {\n            cascader: {\n                options: options,\n                valueArr: []\n            }\n        }\n    },\n    components: {\n        rdCascader\n    }\n}\n```\n        </textarea> </mark> </div> </div>"},605:/*!**************************************!*\
  !*** ./docs/views/form/cascader.vue ***!
  \**************************************/
function(e,n,a){var r,l;r=a(328),l=a(571),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),l&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=l)}});