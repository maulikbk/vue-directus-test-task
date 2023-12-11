import { createApp } from 'vue';
import { createDirectus, rest, readItem, readItems } from '@directus/sdk';

const directus = createDirectus('https://staging-backend.teamwell.co').with(rest());

const plugin = {
  install(app) {
    app.provide('directus', directus);
    app.provide('readItem', readItem);
    app.provide('readItems', readItems);
  }
};

const app = createApp(/* your root component */);

// Use the plugin
app.use(plugin);

export default app;