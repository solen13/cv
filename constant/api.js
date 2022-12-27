const api={
   'header':{
     title:'UĞUR ŞÖLEN',
     subTitle:'FRONTEND + NUXT JS'
   },
   'amacim':{
    name:'Amacım',
    icon:'mdi-account',
    content:'Yenilikçi Frontend becerilerimi, uzmanlığımı ve deneyimlerimi ekibiniz ve değerli müşterilerinizle paylaşmayı umuyorum.'
  },
   'projeler':{
    name:'projelerim',
    icon: 'mdi-projector-screen-outline',
    content:[
      {
        title:'E-ticaret',
        subTitle:'Nuxt-js, Vuetify, SCSS, Axios',
        href:'https://e-commerce-solen13.vercel.app/'
      },
      {
        title:'Fotoğraf galerisi',
        href:'https://photo-galery-vuetfiy.vercel.app/',
        subTitle: 'Nuxt-js,Vuetify,Axios'
      },
      {
        title:' Türkçe Sözlük',
        subTitle: 'Nuxt-js, Vuetify,Axios',
        href:'https://turkish-dictionary.vercel.app/'

      },
      {
        title:' Instagram Clone ',
        subTitle: 'Nuxt js,Vuetify,PWA,CSS',
        href:'https://clone-instagram-app.netlify.app/'
      },
      {
        title:'Course Clone ',
        subTitle: 'Nuxt-js,CSS,SCSS',
        href:'newss-neon.vercel.app/'
      },
      {
        title:'Fish World',
        subTitle: 'Nuxt-js, Axios, Vuetify',
        href:'https://fish-worlds.netlify.app/'
      },

      {
        title:'Freelance iş',
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
    name:'Eğitim',
    icon:'mdi-book-open-page-variant-outline',
    school:[
      {
        schoolName:'Van Yüzüncüyıl Üniversitesi',
        date:'09.2018-07.2022',
        department:'Antropoloji',
        fakulte:'Edebiyat'

      },
      {
        schoolName:'Anadolu üniversitesi',
        date:'09.2018-07.2022',
        department:'Yönetim Bilişim Sistemleri',
        fakulte:'İşletme(Açık öğretim)'

      },
      {
        schoolName:'Selçuklu Anadolu lisesi (Ahlat/Bitlis)',
        date:'09.2018-07.2022',
      },
      {
        schoolName:'Muzaffer İncesu İlkokul- ortaokul',
        date:'09.2018-07.2022',
      },
      {
        schoolName:'Mustafa kemal Atatürk ilkokul',
        date:'09.2018-07.2022',
      },
    ]
  },
   'hobi': {
    name:'Hobiler',
    icon: 'mdi-hexagram',
    content:[
      'Seyhat etmek',
      'Yeni birşeyler öğrenmek',
      'Yemek yapmak'
    ],

  },
   'ekler':{
    name:'Ek olarak',
    icon: 'mdi-playlist-plus',
    content:[
      'Sigara kullanmıyorum',
      '20.06.22 - 16.07.22 Tarihleri arasında Antalya Gazipaşa’da ‘Antiocheia ad Cragum’ kazısında antropolog olarak bulundum.',
      'Üniversite topluluk başkanlığı yaptım'
    ]
  },

  ///silder

  'detay':{
    name:'Kisisel Detaylar',
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
    name:'Yeteneklerim',
    yetkinlik:[
      {
        title:'Kodlama Bilgim',
        subTitle:[
          {name:'JavaScript'},
          {name:'Es6'},
          {name:'Android (kotlin)'}
        ]
      },
      {
        title:'Web Becerilerim',

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
        title:'Tasarım Becerisi',
        subTitle:[{name:'Photoshop'}]
      },
      {
        title:'IDE',
        subTitle: [
          {name:'Android Studio'} ,
          {name:'Vs Code'} ,
          {name:'Web Storm'}

        ]

      },
      {
        title:'Paket Yöneticisi',
        subTitle: [{name:'Git'}, {name:'Webpack'}, {name:'Npm'}]
      },

    ]
  },

  'diller':{
    title:'Diller',
      subTitle: [{name:'Türkçe'}, {name:'İnglizce'}]
  },

  'Sertifikalar':{
    title:'Sertifikalar',
      subTitle:[
    {name:'A1 ingilizce'},
    {name:'Robotik kodlama'},
    {name:'Grafik ve Animasyon'}
  ]

  },

  'Online':{
    title:'Online Platformlar',
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
