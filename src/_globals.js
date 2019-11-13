import Vue from 'vue';
import { upperFirst, camelCase } from 'lodash';

const requireComponent = require.context(
  './', true, /[\w-+]\.vue$/,
);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(fileName.split('/').pop().replace(/^\.\//, '').replace(/\.\w+$/, '')),
  );

  // register component globally
  Vue.component(componentName, componentConfig.default || componentConfig);
});
