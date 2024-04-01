import serve from 'rollup-plugin-serve';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import fs from 'fs';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

export default {
  input: ['src/DynamicDashboard.ts'],
  output: {
    format: 'es',
    file: './dist/dynamic-dashboard.js'
  },
  plugins: [
    commonjs(),
    nodeResolve(),
    typescript(),
    postcss(),
    serve({
      contentBase: './dist',
      host: '0.0.0.0',
      port: 5000,
      allowCrossOrigin: true,
      https: {
        key: fs.readFileSync('key.pem'),
        cert: fs.readFileSync('cert.pem')
      },
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
  ]
};
