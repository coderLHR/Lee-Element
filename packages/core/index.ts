import  makeInstaller  from "./makeInstaller";
import components from "./components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import '@lee-element/theme/index.css'

library.add(fas);
const installer = makeInstaller(components);

export * from "../components";
export default installer;