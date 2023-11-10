// export default {
//     logo: <span>SIVUSTOSI OTSIKKO</span>,
//     project: {
//       link: 'https://URLiSI',
//     }
//     // ... other theme options
//   }
// import { useRouter } from 'next/router'
// import { useConfig } from 'nextra-theme-docs'

// export default {
//     head: () => {
//         // Nämä ovat sivuston meta tagit. Voit muokata niitä haluamallasi tavalla. Ne näyttävät esimerkiksi Google haussa tai silloin kun käyttäjät jakavat sivustosi linkin.
//       const { asPath, defaultLocale, locale } = useRouter()
//       const { frontMatter } = useConfig()
//       const url =
//         'https://opinnaytetyoteoria.vercel.app' +
//         (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

//       const favicon= '/favicon.svg'
//       const ogUrl = `https://opinnaytetyoteoria.vercel.app/stamp.png`
   
//       return (
//         <>
//           <meta property="og:url" content={url} />
//           <meta property="og:title" content={frontMatter.title || '<SIVUSTON OTSIKKO META>'} />
//           <meta
//             property="og:description"
//             content={frontMatter.description || '<SIVUSTON KUVAUS TWITTER>'}
//           />
//         <meta name="description" content={frontMatter.description || '<SIVUSTON KUVAUS TWITTER>'} />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta property="twitter:image" content={ogUrl} />
//         <meta property="twitter:title" content={frontMatter.title || '<SIVUSTON OTSIKKO META TWITTER>'} />
//         <meta property="twitter:description" content={frontMatter.description || '<SIVUSTON KUVAUS TWITTER>'} />
//         <meta property="og:image" content={ogUrl} />

//         <link rel="shortcut icon" href={favicon} type="image/svg+xml" />
//         <link rel="apple-touch-icon" href={favicon} type="image/svg+xml" />
//         <meta name="apple-mobile-web-app-title" content={frontMatter.title || '<SIVUSTON OTSIKKO META APPLE MOBIILI>'} />
//         </>
//       )
//     },
//     project: {
//     // jos muutat tämän linkin niin muuta myös alla olevan icon svg:n
//       link: 'https://LINKEDIN LINKKISI',
//       icon:(
//     // Linkedin logo
//         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
//   <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
// </svg>
//       )
//     },
//     logo: <strong>SIVUSTON OTSIKKO LOGO</strong>,
//     feedback: {content: 'Anna palautetta sivustosta'},
//     toc: { title: 'Tällä sivulla' },
//     editLink: { text:'', },
//     footer: {
//       text: (
//         <span>
//             {/* Mihin haluaisit ohjata kävijöitä? */}
//           ©{' '}{new Date().getFullYear()} {' '}
//           <a href="https://LINKKISI" target="_blank">
//             LINKIN OTSIKKO
//           </a>
//           . All rights reserved.
//         </span>
//       )
//     },
//     search: {placeholder: 'Etsi sivustolta'},
//     // Lisää repositorion linkki esim. https://github.com/imtone1/teoriaopinnaytetyo
//     docsRepositoryBase: 'https://REPOSITORIOSI LINKKI',
//     useNextSeoProps() {
//       return {
//         titleTemplate: '%s - NÄKYY SIVUSTON OTSIKON JÄLKEEN',
//       }
//     },
//     banner: {
//     // banneri näkyy sivun yläosassa
//       key: 'banner',
//       dismissible: false,
//       text: (
//         <a href="https://URLISI" target="_blank">
//         LINKIN TEKSTI BANNERISSA. 🎉
//       </a>
//       )
//     }
    
//   }

  import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

export default {
    head: () => {
      const { asPath, defaultLocale, locale } = useRouter()
      const { frontMatter } = useConfig()
      const url =
        'https://opinnaytetyoteoria.vercel.app' +
        (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

      const favicon= '/favicon.svg'
      const ogUrl = `https://opinnaytetyoteoria.vercel.app/stamp.png`
   
      return (
        <>
          <meta property="og:url" content={url} />
          <meta property="og:title" content={frontMatter.title || 'SIVUSTON OTSIKKO FACEBOOK'} />
          <meta
            property="og:description"
            content={frontMatter.description || 'SIVUSTON KUVAUS FACEBOOK'}
          />
        <meta name="description" content={frontMatter.description || 'SIVUSTON KUVAUS'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={ogUrl} />
        <meta property="twitter:title" content={frontMatter.title || 'SIVUSTON OTSIKKO TWITTERISSA'} />
        <meta property="twitter:description" content={frontMatter.description || 'SIVUSTON KUVAUS TWITTERISSA'} />
        <meta property="og:image" content={ogUrl} />

        <link rel="shortcut icon" href={favicon} type="image/svg+xml" />
        <link rel="apple-touch-icon" href={favicon} type="image/svg+xml" />
        <meta name="apple-mobile-web-app-title" content={frontMatter.title || 'SIVUSTON OTSIKKO APPLE MOBILIISISSA'} />
        </>
      )
    },
    project: {
      link: 'https://www.linkedin.com/in/irina-tatti/',
      icon:(
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
</svg>
      )
    },
    logo: <strong>SIVUSTOSI OTSIKKO</strong>,
    feedback: {content: 'Anna palautetta GitHubissa'},
    toc: { title: 'Tällä sivulla' },
    editLink: { text:'', },
    footer: {
      text: (
        <span>
          ©{' '}{new Date().getFullYear()} {' '}
          <a href="https://www.linkedin.com/in/irina-tatti/" target="_blank">
            Irina Tatti
          </a>
          . All rights reserved.
        </span>
      )
    },
    search: {placeholder: 'Etsi sivustolta'},
    docsRepositoryBase: 'https://github.com/imtone1/teoriaopinnaytetyo',
    useNextSeoProps() {
      return {
        titleTemplate: '%s - Irina Tatti'
      }
    },
    banner: {
      key: 'banner',
      dismissible: false,
      text: (
        <a href="https://www.linkedin.com/in/irina-tatti/" target="_blank">
        Oletko huomannut tekstissä korjattavaa tai parannettavaa? Anna palautetta LinkedInissä! Kaikki palaute on tervetullutta. 🎉
      </a>
      )
    }
    
  }