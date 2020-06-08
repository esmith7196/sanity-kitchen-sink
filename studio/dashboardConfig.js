export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ede3b62cdbf8086babc4846',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ocsuy8eb',
                  apiId: 'bf369390-78a8-4589-9ee7-1f3cb1aa7fd4'
                },
                {
                  buildHookId: '5ede3b6239279b9a124f9d0d',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-n8hdgg94',
                  apiId: '578f4efa-2dac-4842-8287-3009d58d6c84'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/esmith7196/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-n8hdgg94.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
