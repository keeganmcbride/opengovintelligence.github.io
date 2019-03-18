import React from 'react';

const Footer = () => (
  <footer>
    <nav>
				<a data-tooltip="Twitter" href="http://twitter.com/opengovint"><img src="assets/images/twitter.svg" alt="Twitter"></a>
				<a data-tooltip="Github" href="https://github.com/OpenGovIntelligence"><img src="assets/images/github.svg" alt="Github"></a>
				<a data-tooltip="Slideshare" href="http://www.slideshare.net/opengovintelligence"><img src="assets/images/slideshare.svg" alt="Slideshare"></a>
				<a data-tooltip="Mailing list" href="http://eepurl.com/b2-_Dj"><img src="assets/images/mail-with-circle.svg" alt="Mailing list"></a>
			</nav>
    <div>
      <div className="svg_holder">
        <svg width="81" height="54">
          <desc>European flag</desc>
          <g transform="scale(0.1)">
            <defs>
              <g id="s">
                <g id="c">
                  <path
                    id="t"
                    d="M0,0v1h0.5z"
                    transform="translate(0,-1)rotate(18)"
                  />
                  <use xlinkHref="#t" transform="scale(-1,1)" />
                </g>
                <g id="a">
                  <use xlinkHref="#c" transform="rotate(72)" />
                  <use xlinkHref="#c" transform="rotate(144)" />
                </g>
                <use xlinkHref="#a" transform="scale(-1,1)" />
              </g>
            </defs>
            <rect fill="#039" width="810" height="540" />
            <g fill="#fc0" transform="scale(30)translate(13.5,9)">
              <use xlinkHref="#s" y="-6" />
              <use xlinkHref="#s" y="6" />
              <g id="l">
                <use xlinkHref="#s" x="-6" />
                <use
                  xlinkHref="#s"
                  transform="rotate(150)translate(0,6)rotate(66)"
                />
                <use
                  xlinkHref="#s"
                  transform="rotate(120)translate(0,6)rotate(24)"
                />
                <use
                  xlinkHref="#s"
                  transform="rotate(60)translate(0,6)rotate(12)"
                />
                <use
                  xlinkHref="#s"
                  transform="rotate(30)translate(0,6)rotate(42)"
                />
              </g>
              <use xlinkHref="#l" transform="scale(-1,1)" />
            </g>
          </g>
        </svg>
      </div>
      <p>
        This project has received funding from the European Union’s Horizon 2020
        research and innovation programme under grant agreement No 693849.
      </p>
    </div>
  </footer>
);

export default Footer;
