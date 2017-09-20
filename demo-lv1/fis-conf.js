// // // fis.match('*', {
// // //   useHash: false
// // // });

// // // fis.match('::packager', {
// // //   postpackager: fis.plugin('loader', {
// // //     //allInOne: true
// // //   })
// // // });

// // // fis.match('*.{css,less}', {
// // //   packTo: '/static/aio.css'
// // // });

// // fis.match('*.less', {
// //   // fis-parser-less 插件进行解析
// //   parser: fis.plugin('less'),
// //   // .less 后缀构建后改为 .css 文件
// //   rExt: 'css'
// // })


// fis.match('::package', {
//   // 静态资源前端加载器，纯前端项目必备插件。自动加载页面中用到的资源，同时还能按页面级别的All In One 打包
//   postpackager: fis.plugin('loader')
// });

// fis.match('*.less', {
//   parser: fis.plugin('less'),
//   rExt: '.css'
// });

// fis.match('*.{less,css}', {
//   packTo: '/static/aio.css'
// })

// fis.match('*.js', {
//   packTo: '/static/aio.js'
// })

fis.match('::package', {
  postpackager: fis.plugin('loader', {
    allInOne: true
  })
})

fis.match('*.less', {
  parser: fis.plugin('less'),
  rExt: '.css'
})