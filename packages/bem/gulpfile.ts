
// import rollup from 'rollup'
// tslint:disable-next-line: no-var-requires
const rollup = require('rollup')
import gulp from 'gulp'
import rollupTypescript from '@rollup/plugin-typescript'


gulp.task('default', async () => {
    const bundle = await rollup.rollup({
        input: 'src/index.ts',
        plugins: [
            rollupTypescript(),
        ],
    })

    await bundle.write({
        file: 'dist/index.js',
        format: 'cjs',
    })
})
