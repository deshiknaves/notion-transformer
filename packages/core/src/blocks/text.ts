export type TextBlock = {
  type: 'text'
  text: {
    content: string
    link?: { url: string } | null
  }
  annotations: {
    bold: boolean
    italic: boolean
    strikethrough: boolean
    underline: boolean
    code: boolean
    color: 'default'
  }
  plain_text: string
  href?: string | null
}
