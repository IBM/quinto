import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
  input: './src/index.ts',
  output: [
    {
      file: pkg.main,
      name: pkg.name,
      exports: 'named',
      format: 'cjs',
      sourcemap: true,
      globals: {
        react: 'React'
      }
    }
  ],
  external: Object.keys(pkg.dependencies),
  plugins: [
    typescript({
      cacheRoot: './.cache',
      exclude: ['src/**/__tests__/**', 'src/setupTests.ts']
    })
  ]
};
