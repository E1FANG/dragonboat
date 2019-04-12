const Foo = {
  template:
    // `<div id="chartmain" style="width:600px; height: 400px;"></div>`
    `<div>123123</div>`
};
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const routes = [
  { path: "/", component: Foo },
  { path: "/foo", component: Foo }
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
});

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能

// const app = new Vue({
//     router
// }).$mount('#app')

var app = new Vue({
  el: "#app",
  router,
  data: function() {
    return {
      tabId: ["first", "second", "third"],
      componentId: "first",
      tabIds: ["first", "second", "third"],
      componentIds: "first"
    };
  },
  components: {
    first: {
      template: `<div id="chartmain""></div>`
    },
    second: {
      template: 
      `<div class="foo-index">
        <div>
            <span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-INFO"></use>
                </svg>
            </span>
            <p>查看比赛信息</p>
        </div>
        <div>
            <span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-SEND"></use>
                </svg>
            </span>
            <p>向我们投稿</p>
        </div>
        <div>
            <span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-TIME"></use>
                </svg>
            </span>
            <p>比赛时间</p>
        </div>
    </div>`
    },
    third: {
      template: `<div class='foo-index'>
      <div>
      <span>
          <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-WRITE"></use>
          </svg>
      </span>
      <p>文章入口</p>
  </div>
      <div>`
    }
  }
});
