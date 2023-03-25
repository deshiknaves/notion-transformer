import { GenericBlock } from './generic'
import { TextBlock } from './text'

export type CodeBlock = GenericBlock & {
  type: 'code'
  code: {
    language: string
    text: TextBlock[]
  }
}
