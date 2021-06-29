export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '60da9395443f483310191470',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-vmf16bat',
                  apiId: '97975126-5888-409c-a35d-818d16d1cd60'
                },
                {
                  buildHookId: '60da939596d4cc332310febd',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-1r9psrqq',
                  apiId: 'e78fc98f-b701-411c-8bfe-b3656dd45856'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hnwong28/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-1r9psrqq.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
