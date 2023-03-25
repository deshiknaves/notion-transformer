import { GenericBlock } from './generic'
import { TextBlock } from './text'

export type ImageBlock = GenericBlock & {
  type: 'image'
  image: {
    caption: TextBlock[]
    type: 'external'
    external: {
      url: string
    }
  }
}
