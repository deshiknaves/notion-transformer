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

export type HeadingThreeBlock = GenericBlock & {
  type: 'heading_3'
  heading_3: {
    text: TextBlock[]
  }
}

export type HeadingFourBlock = GenericBlock & {
  type: 'heading_4'
  heading_4: {
    text: TextBlock[]
  }
}
