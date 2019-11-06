import './bootstrap.js'
import CMS, { init } from 'netlify-cms'
import 'netlify-cms/dist/cms.css'
import { SimpleUUIDControl, SimpleUUIDPreview } from '../src'

const config = {
  backend: {
    name: 'test-repo',
    login: false,
  },
  media_folder: 'assets',
  collections: [{
    name: 'test',
    label: 'Test',
    files: [{
      file: 'test.yml',
      name: 'test',
      label: 'Test',
      fields: [
        { name: 'uuid_widget', label: 'UUID Widget', widget: 'uuid'},
      ],
    }],
  }],
}

CMS.registerWidget('uuid', SimpleUUIDControl, SimpleUUIDPreview)

init({ config })
