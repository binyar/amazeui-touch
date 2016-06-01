## Change Log

### v1.0.0-beta.3 (2016/06/01 15:40 +08:00)

- `Fixed` [99369b5](https://github.com/amazeui/amazeui-touch/commit/99369b5e42ced90789813a26ae0f3c1e8eebaabe) 修复 CSSTransitionGroup 在全局模式时的引用错误
- `New` [14045dc](https://github.com/amazeui/amazeui-touch/commit/14045dc04bbf5915ce1825048ecf1d76e18402c7) Grid 新增 `wrap` 属性，控制其是否换行（`flex-wrap` 属性）

### v1.0.0-beta.2 (2016/05/24 15:44 +08:00)

- `Improved` [e1b0e29](https://github.com/amazeui/amazeui-touch/commit/e1b0e29ac65e2b9c6fc44f6567128af0361798f6) #50 解决 `context` 在 OffCanvas 和 Popover 中丢失问题
- `New` [3aa23d4](https://github.com/amazeui/amazeui-touch/commit/3aa23d4c23437a5d5cf7bdbef83bd8927f0b398d) Android UC 浏览器在 `<html>` 上添加 `.ua-stupid-uc` 类名，以应用相关回退样式
- `Changed` [1b988fd](https://github.com/amazeui/amazeui-touch/commit/1b988fd77f8a3625a8e36d1c30afada871482dca) React 相关包移到 `peerDependencies` 字段，防止打包多个版本 React 报错问题
- `Fixed` [6977df2](https://github.com/amazeui/amazeui-touch/commit/6977df245e3f45dc068fadbab217bcd3d5d9b83e) 修复 Slider 在以 Android UC 为代表的浏览器中 `swipe` 手势无效问题
- `Improved` [d72e6ce](https://github.com/amazeui/amazeui-touch/commit/d72e6cee6622f92683c1c2b591ee37c8a9a63936) 网格系统兼容 Android UC 为代表的只支持 2009 版 flexbox 规范的浏览器
- `Fixed` [814f8dc](https://github.com/amazeui/amazeui-touch/commit/814f8dc206b40a75cfab5d08792bb3c53e2a0f12)  #31 文档在 Android UC 等浏览器中无法滚动问题
- `Improved` [6769e0f](https://github.com/amazeui/amazeui-touch/commit/6769e0fed9f0c5b7a175163a99344c2cf2e17dfb) #44 Switch 增加 `value` `disabled` `getValue` API
- `Changed` [eccf8e5](https://github.com/amazeui/amazeui-touch/commit/eccf8e5d6da12cd287c33559cab2a59d695616b6)
减少 NavBar 导航条目数据层级
- `Improved` [470741e](https://github.com/amazeui/amazeui-touch/commit/470741ee254d4d6898d146eee77614969c04652a) 处理 NavBar 在以 Android UC 为代表的浏览器中的兼容性 (@minwe)
- `New` [fcf9893](https://github.com/amazeui/amazeui-touch/commit/fcf98932c08b2ae67fbfd90f1844f9e070d09b73) 增加 `margin` `padding` 及文字颜色相关辅助类名
- `Improved` [f4f9a29](https://github.com/amazeui/amazeui-touch/commit/f4f9a29bdbb49ec8c763414bb745850ce8f697f7) #23 改进 Container 在 iOS 中流畅度
- `Improved` [0f680f8](https://github.com/amazeui/amazeui-touch/commit/0f680f823648eb63528195f1907c1e4e1830381a) 重构 Notification
- `Changed` [84c682e](https://github.com/amazeui/amazeui-touch/commit/84c682e9a606e9f8cc1d697e733d19e4721e596d) Modal `onRequestClose` 属性重命名为 `onDismiss`
- `Improved` [ed81459](https://github.com/amazeui/amazeui-touch/commit/ed81459aba1180aaf36ffa08080231919379cf0a) 重构 Modal，增强可定制性
- `Improved` [a79fe65](https://github.com/amazeui/amazeui-touch/commit/a79fe65c86e31153a201cce5033e1e7a99daf317) #40 调整 NavBar API，可以在链接上放置 OffCanvasTrigger


### v1.0.0-beta.1 (2016/04/25)

- `Changed` [93fac1f](https://github.com/amazeui/amazeui-touch/commit/93fac1f8a17a1f9d61af3e401bb759f2f2467a3b) #39 **API 变更**：`onSelect` 与 React 事件 API 冲突，重命名为 `onAction`，涉及的组件包括：
  - Modal
  - NavBar
  - Slider
  - Tabs
  - TabBar
- `Fixed` [89bc1ff](https://github.com/amazeui/amazeui-touch/commit/89bc1ff022f3b9074409c33f09c24af3c471349f) 修复 React 15.x 读取 `key` 警告问题
- `Changed` [721a2a7](https://github.com/amazeui/amazeui-touch/commit/721a2a72a63c20200b494d76655f81aca80914cd) #36 `react` 和 `react-dom` 移到 `peerDependencies`，解决使用时打包多个版本的问题
- `Fixed` [3d6bbdc](https://github.com/amazeui/amazeui-touch/commit/3d6bbdc819175a0cf6b31185b2a7b3421e447a8c) 修复 flexbox 在部分安卓 UA 上的显示问题（Thx @leakl），至此 flexbox 兼容性问题主要剩下 NavBar 和 Grid
- `Improved` [082c00f](https://github.com/amazeui/amazeui-touch/commit/082c00f2ad7d1e61c914238cc5eb326f73cb672e) 运行环境判断，为后端渲染做准备
- `Fixed` [4903567](https://github.com/amazeui/amazeui-touch/commit/49035679e1e3c55e043eeae02df1dd62be8c71c9) #27 修复 Object.assign 没有转换问题
- `Fixed` [dcdf80a](https://github.com/amazeui/amazeui-touch/commit/dcdf80a3dcbf1611c5422d4ded8b39de7781f9a0) 修复 Modal `open()` 方法判断逻辑始终为 `true` 的错误

### v0.1.0-beta2 (2015/11/17)

- `Improved` [81c4c1a](https://github.com/amazeui/amazeui-touch/commit/81c4c1a23fa5fca4a3352e3a8711a79fa04d7b3b) 移除 `input[type="range"]` 在 Safari 中的黑色边框
- `Improved`  [e39f2e0](https://github.com/amazeui/amazeui-touch/commit/e39f2e023ce9e7997adcafbb96e0cfbc0274ea97) #6 调整 View 样式
- `Improved` #11 优化 Modal、Notification 等组件在 iOS 9 Safari 中入场动画效果
- `Improved` [6cdf4ec](https://github.com/amazeui/amazeui-touch/commit/6cdf4ec61c357b0471837a49db78ba1d66f5b564) #5 修复 Slider 阻止垂直触控默认滚动行为问题
- `Fixed` [33305f4](https://github.com/amazeui/amazeui-touch/commit/33305f49405b09ec578fdf530a54012e1fd9bf43)  #7 修复 Modal 遮罩层显示问题（via [519ae20](https://github.com/amazeui/amazeui-touch/commit/519ae20c8646252c06b819c538c74395a4e47b22) ）
- `Changed` [44bfec0](https://github.com/amazeui/amazeui-touch/commit/44bfec03b4fbee022914476abb88b3f090f8d093) #10 替换 Loader 样式，移除 SVG
- `Improved` [ea51873](https://github.com/amazeui/amazeui-touch/commit/ea51873871d70e131b1d307a1a4236d89e37774e) Button 添加 `:hover` 样式
- `Improved` [338dca4](https://github.com/amazeui/amazeui-touch/commit/338dca48a0fec187ebbcd6215853f27942c6ab99) 官网添加 kitchen-sink 二维码
