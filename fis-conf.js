/* global fis */

fis.config.set('modules.parser.jsx', 'babel');
fis.config.set('modules.parser.js', 'babel');
fis.config.set('roadmap.ext.jsx', 'js'); // .jsx => .js

//jswrapper 用来自动封装 `define`
//require-async 用来支持动态加载组件
fis.config.set('modules.postprocessor.js', 'jswrapper,require-async');
fis.config.set('roadmap.path', [
  {
    reg: '/module/**.jsx',
    isMod: true
  },
  {
    reg: '/module/**.js',
    isMod: true
  },
  {
    reg: '**.js',
    isES6: false
  }
]);

fis.config.set('settings.postprocessor.jswrapper', {
  type: 'amd' //历史遗留问题，此处应该是 mod.js
});
