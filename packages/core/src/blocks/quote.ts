import { GenericBlock } from './generic'
import { TextBlock } from './text'

export type QuoteBlock = GenericBlock & {
  type: 'quote'
  quote: {
    text: TextBlock[]
  }
}
