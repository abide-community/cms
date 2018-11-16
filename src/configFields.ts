export const name = {
  name: 'name',
  hint: 'The name of this organization',
}

export const contactInformation = {
  name: 'contactInformation',
  label: 'Contact Information',
  hint: 'The contact information for this organization',
  widget: 'object',
  required: false,
  fields: [
    {
      name: 'address',
      label: 'Address',
      hint:
        '(Optional) The address as you would like it displayed in the Contact section of the site',
      required: false,
      widget: 'text',
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
  ],
}

export const donorboxName = {
  name: 'donorboxName',
  label: 'Donorbox Name',
  hint: '(Optional) The Donorbox name for this organization',
  required: false,
}

export const featureImage = {
  name: 'featureImage',
  label: 'Feature Image',
  hint: "(Optional) The feature image for this organization's home page",
  required: false,
  widget: 'image',
}

export const contactFormUrl = {
  name: 'contactFormUrl',
  label: 'Contact Form URL',
  hint:
    '(Optional) The contact form URL to where submitted contact forms will send data',
  required: false,
}

export const teamMembers = {
  name: 'team',
  label: 'Team Members',
  hint: '(Optional) The team members for this organization',
  required: false,
  widget: 'list',
  fields: [
    { name: 'name', label: 'Name' },
    { name: 'photo', widget: 'image', required: false },
    { name: 'bio', label: 'Bio', required: false },
  ],
}

export const timeline = {
  name: 'timeline',
  hint:
    '(Optional) The timeline entries that help tell the story of this organization',
  required: false,
  widget: 'list',
  fields: [
    {
      name: 'date',
      hint:
        'The date as you would like it to be displayed on the website (e.g. 2012-2013)',
    },
    {
      name: 'photo',
      widget: 'image',
      hint: '(Optional) The photo associated with this timeline entry',
      required: false,
    },
    { name: 'body', hint: 'The text associated with this timeline entry' },
  ],
}
