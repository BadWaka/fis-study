// // // // // // fis.match('::packager', {
// // // // // //   spriter: fis.plugin('csssprites')
// // // // // // });

// // // // // // fis.match('*', {
// // // // // //   useHash: false
// // // // // // });

// // // // // // fis.match('*.js', {
// // // // // //   optimizer: fis.plugin('uglify-js')
// // // // // // });

// // // // // // fis.match('*.css', {
// // // // // //   useSprite: true,
// // // // // //   optimizer: fis.plugin('clean-css')
// // // // // // });

// // // // // // fis.match('*.png', {
// // // // // //   optimizer: fis.plugin('png-compressor')
// // // // // // // });

// // // // // // // fis.match('*.{png,js,css}', {
// // // // // // //     release: '/static/$0'
// // // // // // // });

// // // // fis.match('*.js', {
// // // //     useHash: true,
// // // //     release: 'dist2/js2/$0',
// // // // });

// // // // // // fis.match('*.css', {
// // // // // //     useHash: false
// // // // // // });

// // // // // // fis.match('*.png', {
// // // // // //     useHash: false
// // // // // // });

// // // // // fis.media('prod').match('*.js', {
// // // // //     optimizer: fis.plugin('uglify-js')
// // // // // });

// // // // // fis.media('rd').match('*', {
// // // // //     deploy: fis.plugin('http-push', {
// // // // //         receiver: 'http://remote-rd-host/receiver.php'
// // // // //     })
// // // // // });

// // // // // fis.media('qa').match('*', {
// // // // //     deploy: fis.plugin('http-push', {
// // // // //         receiver: 'http://remote-qa-host/receiver.php'
// // // // //     })
// // // // // });

// // // // vue 组件中的 less 片段处理
// // // fis.match('src/vue/**.vue:less', {
// // //     rExt: 'css',
// // //     parser: fis.plugin('less'),
// // //     release: 'xxx', // 这个无效
// // // });

// // // // 注意：因为组件中的样式片段编译只是编译内容，所以上面的release配置是无效的。要配置其release，需要针对生成的css文件：
// // // fis.match('src/vue/(**.css)', {
// // //     release: '/vue-style/$1'
// // // });

// // fis.match('*.js', {
// //     optimizer: fis.plugin('uglify-js'),
// // });

// // fis.match('*.css', {
// //     optimizer: fis.plugin('clean-css')
// // });

// // fis.match('*.png', {
// //     optimizer: fis.plugin('png-compressor')
// // });

// fis.match('::package', {
//     spriter: fis.plugin('csssprites')
// })

// fis.match('*.css', {
//     useSprite: true
// })