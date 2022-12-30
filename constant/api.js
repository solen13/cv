const api={
   'header':{
     title:'UĞUR ŞÖLEN',
     subTitle:'FRONTEND + NUXT JS'
   },
   'amacim':{
    title:'amamcim',
    icon:'mdi-account',
    content:'amaccontent'
   },
   'projeler':{
    name:'projelerim',
    icon: 'mdi-projector-screen-outline',
    content:[
      {
        title:'eticaret',
        subTitle:'Nuxt-js, Vuetify, SCSS, Axios',
        href:'https://e-commerce-solen13.vercel.app/'
      },
      {
        title:'photoGallery',
        href:'https://photo-galery-vuetfiy.vercel.app/',
        subTitle: 'Nuxt-js,Vuetify,Axios'
      },
      {
        title:'turkcesozluk',
        subTitle: 'Nuxt-js, Vuetify,Axios',
        href:'https://turkish-dictionary.vercel.app/'

      },
      {
        title:'Instagram',
        subTitle: 'Nuxt js,Vuetify,PWA,CSS',
        href:'https://clone-instagram-app.netlify.app/'
      },
      {
        title:'Course',
        subTitle: 'Nuxt-js,CSS,SCSS',
        href:'newss-neon.vercel.app/'
      },
      {
        title:'FishWorld',
        subTitle: 'Nuxt-js, Axios, Vuetify',
        href:'https://fish-worlds.netlify.app/'
      },

      {
        title:'Freelance',
        sorce:[
          {
            title:'Elif-Ba app',
            subTitle: 'Nuxt js, Vuetify,PWA',
            href: 'https://elifba-ogrenme.netlify.app/harfler/elifba'
          },
          {
            title:'Pastane',
            subTitle: 'Html,Js,Css',
            href:'https://solen13.github.io/pastaneqr/'
          }
        ],
      }


    ]

     },
   'egitim':{
    name:'egtim',
    icon:'mdi-book-open-page-variant-outline',
    school:[
      {
        schoolName:'schoolName1',
        date:'09.2018-07.2022',
        department:'department1',
        fakulte:'fakulte1'

      },
      {
        schoolName:'schoolName2',
        date:'2019 ',
        department:'department2',
        fakulte:'fakulte2'

      },
      {
        schoolName:'schoolName3',
        date:'2013 - 2017',
      },
      {
        schoolName:'schoolName4',
        date:'2009 - 2012',
      },
      {
        schoolName:'schoolName5',
        date:'2005 - 2009',
      },
    ]
  },
   'hobi': {
    name:'hobi',
    icon: 'mdi-hexagram',
    contents:[
      {name:'hobi1'},
      {name:'hobi2'},
      {name:'hobi3'},
      {name:'hobi4'},

    ],

  },
   'ekler':{
    name:'ek',
    icon: 'mdi-playlist-plus',
    content:[
      'ek1',
      'ek2',
      'ek3'
    ]
  },

  ///silder

  'detay':{
    name:'kisisel',
    contack:[
      {
        icon:'mdi-map-marker',
        name:'istanbul',

      },
      {
        icon:'mdi-email',
        name:'uusolen@gmail.com',
        href:'mailto: uusolen@gmail.com',
      },
      {
        icon:'mdi-phone',
        name:'+90(543) 319-17 90',
        href:'tel:+90543311790'
      }
    ]
  },

  'yetenek':{
    name:'yetenek',
    yetkinlik:[
      {
        title:'yetenek1',
        subTitle:[
          {name:'JavaScript'},
          {name:'Es6'},
          {name:'Android (kotlin)'}
        ]
      },
      {
        title:'yetenek2',

        subTitle:[
          {name:'Vue-js'},
          {name:'Nuxt-js'},
          {name:'Css'} ,
          {name:'Html'} ,
          {name:'Scss'} ,
          {name:'JSON'} ,
          {name:'Vuetify'}
        ]

      },
      {
        title:'yetenek3',
        subTitle:[{name:'Photoshop'}]
      },
      {
        title:'yetenek4',
        subTitle: [
          {name:'Android Studio'} ,
          {name:'Vs Code'} ,
          {name:'Web Storm'}

        ]

      },
      {
        title:'yetenek5',
        subTitle: [{name:'Git'}, {name:'Webpack'}, {name:'Npm'}]
      },

    ]
  },

  'diller':{
    title:'diller',
      subTitle: [
        {name:'dil1'},
        {name:'dil2'}
      ]
  },

  'Sertifikalar':{
    title:'Sertifikalar',
      subTitle:[
    {name:'sertifikalar1'},
    {name:'sertifikalar2'},
    {name:'sertifikalar3'}
  ]

  },

  'Online':{
    title:'Online',
      subTitle: [
    {
      name:'Github',
      href:'https://github.com/solen131'},
    {
      name:'Linkedin',
      href:'https://www.linkedin.com/in/uğur-şölen-318a27235/'
    }
  ]
  },


}
export default api
