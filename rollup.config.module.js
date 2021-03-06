import babel from 'rollup-plugin-babel';
import { name, dependencies } from './package.json';

export default {
    input: 'src/bounce.js',
    output: [
        {
            format: 'cjs',
            file: `dist/${name}.common.js`
        },
        {
            format: 'es',
            file: `dist/${name}.module.js`
        }
    ],
    external: Object.keys(dependencies),
    plugins: [
        babel()
    ]
};