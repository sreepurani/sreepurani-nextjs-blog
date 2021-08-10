import { AppProps ,NextWebVitalsMetric} from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import Script from 'next/script'
import { GA_TRACKING_ID } from '../lib/gtag'



// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   switch (metric.name) {
//     case 'FCP':
//       console.log(JSON.stringify(metric))
//       break
//     case 'LCP':
//       console.log(JSON.stringify(metric))
//       break
//     case 'CLS':
//       console.log(JSON.stringify(metric))
//       break
//     case 'FID':
//       console.log(JSON.stringify(metric))
//       break
//     case 'TTFB':
//       console.log(JSON.stringify(metric))
//       case 'Next.js-hydration':
//         console.log(JSON.stringify(metric))

//       break
//     case 'Next.js-route-change-to-render':
//       console.log(JSON.stringify(metric))

//       break
//     case 'Next.js-render':
//       console.log(JSON.stringify(metric))

//       break
//     default:
//       break
//   }
// }
declare const window: any;


// export function reportWebVitals({ id, name, label, value }) {
//   // Use `window.gtag` if you initialized Google Analytics as this example:
//   // https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_document.js
//   window.gtag('event', name, {
//     event_category:
//       label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
//     value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
//     event_label: id, // id unique to current page load
//     non_interaction: true, // avoids affecting bounce rate.
//   })
// }

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />

      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_TRACKING_ID}');
          gtag('config', '${GA_TRACKING_ID}', {
            user_id: '_pJC6-0pjW_9hcoRuNuZeRCIrS20'
           });
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );

}

export default App