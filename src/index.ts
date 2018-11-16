interface Window {
  CMS: object
  initCMS(object: any): void
}

interface Field {
  name: string
  label?: string
  widget?: string
  hint?: string
  default?: any
  required?: boolean
  pattern?: [string, string]
}

const sites = ['youwillbecome.org', 'cultivate.org', 'kingdomsea.org'].sort()

function Blog(site) {
  return {
    name: `blog.${site}`,
    label: `Blog (${site})`,
    description: `Blog posts for ${site}`,
    folder: `sites/${site}/blog`,
    create: true,
    fields: [
      { name: 'title', label: 'Title' },
      { name: 'date', label: 'Date', widget: 'date' },
      { name: 'body', label: 'Body', widget: 'markdown' },
    ],
  }
}

function Pages(site) {
  return {
    label: `Pages (${site})`,
    name: `pages.${site}`,
    files: [
      {
        label: 'About Page',
        name: 'about',
        file: `sites/${site}/pages/about.yml`,
        fields: [{ name: 'title', label: 'Title' }],
      },
    ],
  }
}

function Info(sites) {
  const infoFields: Field[] = [
    {
      name: 'address',
      label: 'Address',
      hint:
        '(Optional) The address as you would like it displayed in the Contact section of the site',
      required: false,
    },
    {
      name: 'phone',
      label: 'Phone Number',
      hint:
        '(Optional) The phone number as you would like it to be displayed in the Contact section of the site',
      required: false,
    },
    {
      name: 'email',
      label: 'Email Address',
      hint:
        '(Optional) The email address as you would displayed in the Contact section of the site',
      required: false,
    },
  ]
  return {
    label: `Info`,
    name: `info`,
    editor: { preview: false },
    files: sites.map(site => ({
      label: site,
      name: site,
      file: `sites/${site}/info.yml`,
      fields: infoFields,
    })),
  }
}

const backend =
  process.env.NODE_ENV === 'production'
    ? { name: 'github', repo: 'abide-community/content' }
    : { name: 'test-repo' }

window.initCMS({
  config: {
    backend,
    publish_mode: 'simple',
    media_folder: 'static/assets',
    collections: sites
      .reduce((arr, site) => [...arr, Blog(site), Pages(site)], [])
      .concat(Info(sites)),
  },
})
