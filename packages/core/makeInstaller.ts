import type { App, Plugin } from "vue";
import { INSTALLED_KEY } from "@lee-element/constants";
import { each, get, set } from "lodash-es";
// import {
//   provideGlobalConfig,
//   type ConfigProviderProps,
// } from "@lee-element/components";

export default function makeInstaller(components: Plugin[]) {
  // options?: ConfigProviderProps
  const install = (app: App ) => {
    if (get(app, INSTALLED_KEY)) return;
    set(app, INSTALLED_KEY, true);

    each(components, (c) => {
      app.use(c);
    });

    // if (options) provideGlobalConfig(options, app, true);
  };

  return install;
}
