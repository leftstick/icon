import svgr from '@svgr/rollup';

export default {
  esm: 'rollup',
  cjs: 'rollup',
  extraRollupPlugins: [svgr()],
};
