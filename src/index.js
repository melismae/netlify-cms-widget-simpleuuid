import Control from './Control'
import Preview from './Preview'

if (typeof window !== 'undefined') {
  window.SimpleUUIDControl = Control
  window.SimpleUUIDPreview = Preview
}

export { Control as SimpleUUIDControl, Preview as SimpleUUIDPreview }
