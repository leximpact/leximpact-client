/* eslint-disable react/no-danger */
import { PureComponent } from "react";

export class Matomo extends PureComponent {
  render() {
    return (
      <script
        dangerouslySetInnerHTML={{
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
          })();`
        }}
        type="text/javascript" />
    );
  }
}
