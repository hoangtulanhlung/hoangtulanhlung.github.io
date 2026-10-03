import { createRouter, createWebHistory } from 'vue-router'
import Loader from '../views/Loader.vue'
import Office from '../views/Office.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Loader,
      meta: {
        title: 'Portfolio | Nguyen Trong Khoi',
        metaTags: [
          {
            rel: 'canonical',
            href: 'https://hoangtulanhlung.com'
          },
          {
            name: 'title',
            content: 'Portfolio | Nguyen Trong Khoi'
          },
          {
            name: 'description',
            content:
              "Découvrez le portfolio de Nguyen Trong Khoi, développeur web full stack passionné, Création de sites et applications web et mobiles avec JS, PHP, SQL et leurs frameworks, ainsi qu'en DevOps."
          },
          {
            name: 'keywords',
            content: 'portfolio, trong khoi, développeur web, full stack, sites web, applications web, applications mobiles, JS, PHP, SQL, ORM, frameworks, DevOps'
          },
          {
            name: 'author',
            content: 'Nguyen Trong Khoi'
          },
          {
            name: 'robots',
            content: 'index, follow'
          },
          {
            name: 'theme-color',
            content: '#000000'
          },
          {
            name: 'mobile-web-app-capable',
            content: 'yes'
          },
          {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
          },
          {
            name: 'apple-mobile-web-app-title',
            content: 'Portfolio | Nguyen Trong Khoi'
          },
          {
            name: 'application-name',
            content: 'Portfolio | Nguyen Trong Khoi'
          },
          {
            name: 'twitter:card',
            content: 'summary'
          },
          {
            name: 'twitter:title',
            content: 'Portfolio | Nguyen Trong Khoi'
          },
          {
            name: 'twitter:description',
            content:
              "Welcome to my computer."
          },
          {
            name: 'twitter:image',
            content: 'https://hoangtulanhlung.com/img/logoblack.png'
          },
          {
            name: 'twitter:image:alt',
            content: 'Logo Portfolio Nguyen Trong Khoi'
          },
          {
            property: 'og:type',
            content: 'website'
          },
          {
            property: 'og:title',
            content: 'Portfolio | Nguyen Trong Khoi'
          },
          {
            property: 'og:description',
            content:
              "Welcome to my computer."
          },
          {
            property: 'og:site_name',
            content: 'Portfolio | Nguyen Trong Khoi'
          },
          {
            property: 'og:url',
            content: 'https://hoangtulanhlung.com'
          },
          {
            property: 'og:image',
            content: 'https://hoangtulanhlung.com/img/logoblack.png'
          },
          {
            property: 'og:image:alt',
            content: 'Logo Portfolio Nguyen Trong Khoi'
          },
          {
            property: 'og:locale',
            content: 'fr_FR'
          },
          {
            property: 'og:locale:alternate',
            content: 'en_US'
          }
        ]
      }
    },
    {
      path: '/office',
      name: 'Office',
      component: Office,
      meta: {
        title: 'Portfolio | Nguyen Trong Khoi',
        metaTags: [
          {
            rel: 'canonical',
            href: 'https://hoangtulanhlung.com/office'
          },
          {
            name: 'title',
            content: 'Portfolio | Nguyen Trong Khoi'
          },
          {
            name: 'description',
            content:
              "Welcome to my computer."
          },
          {
            name: 'keywords',
            content: 'bureau, trong khoi, développeur web, full stack, sites web, applications web, applications mobiles, JS, PHP, SQL, ORM, frameworks, DevOps'
          },
          {
            name: 'author',
            content: 'Nguyen Trong Khoi'
          },
          {
            name: 'robots',
            content: 'index, follow'
          },
          {
            name: 'theme-color',
            content: '#000000'
          },
          {
            name: 'mobile-web-app-capable',
            content: 'yes'
          },
          {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
          },
          {
            name: 'apple-mobile-web-app-title',
            content: 'Portfolio | Nguyen Trong Khoi'
          },
          {
            name: 'application-name',
            content: 'Portfolio | Nguyen Trong Khoi'
          },
          {
            name: 'twitter:card',
            content: 'summary'
          },
          {
            name: 'twitter:title',
            content: 'Portfolio | Nguyen Trong Khoi'
          },
          {
            name: 'twitter:description',
            content:
              "Welcome to my computer."
          },
          {
            name: 'twitter:image',
            content: 'https://hoangtulanhlung.com/img/logoblack.png'
          },
          {
            name: 'twitter:image:alt',
            content: 'Logo Portfolio Nguyen Trong Khoi'
          },
          {
            name: 'og:type',
            content: 'website'
          },
          {
            name: 'og:title',
            content: 'Portfolio | Nguyen Trong Khoi'
          },
          {
            name: 'og:description',
            content:
              "Welcome to my computer."
          },
          {
            name: 'og:site_name',
            content: 'Portfolio | Nguyen Trong Khoi'
          },
          {
            name: 'og:url',
            content: 'https://hoangtulanhlung.com/office'
          },
          {
            name: 'og:image',
            content: 'https://hoangtulanhlung.com/img/logoblack.png'
          },
          {
            name: 'og:image:alt',
            content: 'Logo Portfolio Nguyen Trong Khoi'
          },
          {
            name: 'og:locale',
            content: 'fr_FR'
          },
          {
            name: 'og:locale:alternate',
            content: 'en_US'
          }
        ]
      }
    }
  ]
})

export default router
