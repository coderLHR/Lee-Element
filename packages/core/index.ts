import { makeInstaller } from "@lee-element/utils";
import components from "./components";
import '@lee-element/theme/index.css'

const installer = makeInstaller(components);

export * from "@lee-element/components";
export default installer;