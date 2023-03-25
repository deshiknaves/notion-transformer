import { describe, expect, it } from 'vitest'
import { transform } from '../transform'

describe('Transform — Quote', () => {
  it('should be able to return a quote', () => {
    const result = transform({
      object: 'block',
      id: '3a4e22b5-e74f-4edf-90fd-168e691c54c2',
      parent: {
        type: 'page_id',
        page_id: '425f9ff1-330c-4efa-926f-e36605d15b52',
      },
      created_time: '2023-03-20T01:12:00.000Z',
      last_edited_time: '2023-03-20T01:12:00.000Z',
      created_by: {
        object: 'user',
        id: '92145c17-8f0e-49d1-b045-f64238795270',
      },
      last_edited_by: {
        object: 'user',
        id: '92145c17-8f0e-49d1-b045-f64238795270',
      },
      has_children: false,
      archived: false,
      type: 'quote',
      quote: {
        color: 'default',
        text: [
          {
            type: 'text',
            text: {
              content: '"This is a quote."',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: '"This is a quote."',
            href: null,
          },
        ],
      },
    })

    expect(result).toBe('> "This is a quote."')
  })
})
