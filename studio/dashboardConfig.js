export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
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
                  buildHookId: '61394e4c52df062b5c5f08ad',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-n3v2zvwo',
                  apiId: '6715093a-0dca-41f6-a912-bd752996671e'
                },
                {
                  buildHookId: '61394e4cf6cc4e1d032210bb',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-8358oawh',
                  apiId: 'e3618e8a-8681-4297-a604-88a0b89c6bd8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/eastgoingeast/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-8358oawh.netlify.app', category: 'apps'}
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
