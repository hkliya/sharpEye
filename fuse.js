const {FuseBox, WebIndexPlugin, CSSPlugin} = require('fuse-box')

const fuzebox = FuseBox.init({
    homeDir: './src',
    output: './dist/$name.js',
    plugins: [
        CSSPlugin(),
        WebIndexPlugin({template: './src/index.html'})
    ]
});

fuzebox.dev();

fuzebox.bundle('app.js')
.watch().hmr()
.instructions('>index.js');

fuzebox.run();