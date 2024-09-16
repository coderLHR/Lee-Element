import { makeInstaller } from "@lee-element/utils";
import components from "./components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import '@lee-element/theme/index.css'

library.add(fas);
const installer = makeInstaller(components);

export * from "@lee-element/components";
export default installer;