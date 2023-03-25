import { TextBlock } from '@notion-transformer/core/src/blocks/text'

type Text =
  | {
      type: 'bold' | 'italic' | 'strikethrough' | 'underline' | 'code'
      value: Text | string
    }
  | {
      type: 'link'
      value: Text | string
      url: string
    }

function bold(text: Text | string): Text {
  return {
    type: 'bold',
    value: text,
  }
}

function italic(text: Text | string): Text {
  return {
    type: 'italic',
    value: text,
  }
}

function strikethrough(text: Text | string): Text {
  return {
    type: 'strikethrough',
    value: text,
  }
}

function underline(text: Text | string): Text {
  return {
    type: 'underline',
    value: text,
  }
}

function link(text: Text | string, url?: string | null): Text | string {
  if (!url) return text

  return {
    type: 'link',
    value: text,
    url,
  }
}

function code(text: Text | string): Text {
  return {
    type: 'code',
    value: text,
  }
}

export function text(block: TextBlock) {
  let value: Text | string = block.text.content

  for (const annotation in block.annotations) {
    switch (true) {
      case annotation === 'bold' && block.annotations[annotation]:
        value = bold(value)
        break
      case annotation === 'italic' && block.annotations[annotation]:
        value = italic(value)
        break
      case annotation === 'strikethrough' && block.annotations[annotation]:
        value = strikethrough(value)
        break
      case annotation === 'underline' && block.annotations[annotation]:
        value = underline(value)
        break
      case annotation === 'code' && block.annotations[annotation]:
        value = code(value)
        break
      default:
        break
    }
  }

  value = link(value, block.href)

  return { type: 'text', value }
}
