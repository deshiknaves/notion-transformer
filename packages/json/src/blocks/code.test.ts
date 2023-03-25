import { describe, expect, it } from 'vitest'
import { transform } from '../transform'

describe('Transform — Code', () => {
  it('should be able to return a code block', () => {
    const result = transform({
      object: 'block',
      id: '43c87518-1958-459f-b085-aaf825be7bc3',
      parent: {
        type: 'page_id',
        page_id: '421bdb6d-ec94-4e23-807c-bdfaf41e5cff',
      },
      created_time: '2023-03-25T19:05:00.000Z',
      last_edited_time: '2023-03-25T19:05:00.000Z',
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
      type: 'code',
      code: {
        caption: [],
        language: 'plain text',
        text: [
          {
            type: 'text',
            text: {
              content: 'print("Hello, world!")\n',
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
            plain_text: 'print("Hello, world!")\n',
            href: null,
          },
        ],
      },
    })

    expect(result).toEqual({
      type: 'code',
      language: 'plain text',
      value: [
        {
          type: 'text',
          value: 'print("Hello, world!")\n',
        },
      ],
    })
  })
})
