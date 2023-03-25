import { GenericBlock } from './generic'
import { TextBlock } from './text'

export type QuoteBlock = GenericBlock & {
  type: 'paragraph'
  paragraph: {
    text: TextBlock[]
  }
}
