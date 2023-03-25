import { GenericBlock } from './generic'
import { TextBlock } from './text'

export type HeadingOneBlock = GenericBlock & {
  type: 'heading_1'
  heading_1: {
    text: TextBlock[]
  }
}

export type HeadingTwoBlock = GenericBlock & {
  type: 'heading_2'
  heading_2: {
    text: TextBlock[]
  }
}
