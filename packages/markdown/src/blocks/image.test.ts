import { describe, expect, it } from 'vitest'
import { transform } from '../transform'

describe('Transform — Image', () => {
  it('should be able to return a image without a caption', () => {
    const result = transform({
      object: 'block',
      id: '69a25c6e-2adc-4cad-b5fd-f4255f3aa9ca',
      parent: {
        type: 'page_id',
        page_id: '421bdb6d-ec94-4e23-807c-bdfaf41e5cff',
      },
      created_time: '2023-03-25T19:06:00.000Z',
      last_edited_time: '2023-03-25T19:06:00.000Z',
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
      type: 'image',
      image: {
        caption: [],
        type: 'external',
        external: {
          url: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
        },
      },
    })

    expect(result).toBe(
      '![](https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb)'
    )
  })

  it('should be able to return a image with a caption', () => {
    const result = transform({
      object: 'block',
      id: '69a25c6e-2adc-4cad-b5fd-f4255f3aa9ca',
      parent: {
        type: 'page_id',
        page_id: '421bdb6d-ec94-4e23-807c-bdfaf41e5cff',
      },
      created_time: '2023-03-25T19:06:00.000Z',
      last_edited_time: '2023-03-25T19:06:00.000Z',
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
      type: 'image',
      image: {
        caption: [
          {
            type: 'text',
            text: {
              content: 'This is the caption',
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
            plain_text: 'This is the caption',
            href: null,
          },
        ],
        type: 'external',
        external: {
          url: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
        },
      },
    })

    expect(result).toBe(
      '![This is the caption](https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb)'
    )
  })
})
