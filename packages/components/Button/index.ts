import Button from './Button.vue'
import ButtonGroup from "./ButtonGroup.vue";
import {withInstall } from '@lee-element/utils'

export const LeeButton = withInstall(Button)
export const LeeButtonGroup = withInstall(ButtonGroup);

export * from './types'