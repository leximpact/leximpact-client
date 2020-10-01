import Head from "next/head";
import { Fragment, PureComponent } from "react";

import { AppHeader } from "../components/common";
import { HomeContent } from "../components/home";
import withRoot from "../lib/withRoot";

class HomePage extends PureComponent {
  render() {
    return (
      <Fragment>
        <Head>
          <title>LexImpact</title>

          <script type="text/javascript" dangerouslySetInnerHTML={{
            __html: ` var _paq = window._paq = window._paq || [];
            /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="https://leximpact.matomo.cloud/";
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', '1']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.type='text/javascript'; g.async=true; g.src='//cdn.matomo.cloud/leximpact.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
            })();
            `}}/>
        </Head>
        <AppHeader showHomeButton={false} showLoginButton={false} />
        <HomeContent />
      </Fragment>
    );
  }
}

export default withRoot(HomePage);
