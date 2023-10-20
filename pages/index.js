import Head from 'next/head'
import Script from 'next/script';
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Wichard Bormozi</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Wichard Bormozi" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://wichardbormozi.netlify.app/cover.jpeg" />
        <meta property="og:url" content="https://wichardbormozi.netlify.app/" />
        <meta property="og:description" content="Entrepreneur, Businessman and Investor Chatbot Tool" />
        <meta property="og:image:width" content= "1200"/>
        <meta property="og:image:height" content= "630"/>
      </Head>

      <main>
        <Header title="Wichard Bormozi" />
        <p className="description">
          Visit <a href = 'https://www.botnest.co'>BotNest</a> For A Free Chatbot Prototype
        </p>

        <Script id="show-banner"
  dangerouslySetInnerHTML={{
    __html: ` (function(d, t) {
        var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
        v.onload = function() {
          window.voiceflow.chat.load({
            verify: { projectID: '652f91b3753ddb0007ec7c85' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production'
          }).then(() => {
            setTimeout(function() {
              window.voiceflow.chat.open();
            }, 1000);
          });
        }
        v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
    })(document, 'script'); `,
  }}
/>
      </main>

      <Footer />

    </div>
  )
}
