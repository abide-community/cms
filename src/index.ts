import {
  contactFormUrl,
  contactInformation,
  donorboxName,
  featureImage,
  name,
  teamMembers,
  timeline,
} from './configFields'
import sites from './sites'

window.initCMS({
  config: {
    backend:
      process.env.NODE_ENV === 'production'
        ? { name: 'github', repo: 'abide-community/content' }
        : { name: 'test-repo' },
    publish_mode: 'simple',
    media_folder: 'static/assets',
    collections: [
      {
        label: 'Config',
        name: 'config',
        editor: { preview: false },
        files: sites.map(site => ({
          label: site,
          name: site,
          file: `sites/${site}/config.yml`,
          fields: [
            name,
            contactInformation,
            donorboxName,
            featureImage,
            contactFormUrl,
            teamMembers,
            timeline,
          ],
        })),
      },
    ],
  },
})
