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
  external: ['react', 'react-dom'],
  plugins: [
    typescript({
      cacheRoot: './.cache',
      exclude: ['src/**/__tests__/**', 'src/setupTests.ts']
    })
  ]
};
