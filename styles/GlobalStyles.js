import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';



const GlobalStyles = createGlobalStyle` 
  ${reset} // styled-reset이라는 패키지를 설치해야한다. 몇가지만 reset해 줄 경우 사용하지 않아도 무방하다.
    body {
        font-family: 'Roboto', sans-serif !important;
        color: #404040;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
        white-space: pre-wrap;
        font-family: 'Roboto', sans-serif !important;
    }
    input, textarea { 
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
    }
    input:focus {
      outline: none;
    }

    button {
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }

  @font-face {
    font-family: "Avenir-LT-W01_35-Light1475496";
    src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/edefe737-dc78-4aa3-ad03-3c6f908330ed.eot?#iefix");
    src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/edefe737-dc78-4aa3-ad03-3c6f908330ed.eot?#iefix") format("eot"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/0078f486-8e52-42c0-ad81-3c8d3d43f48e.woff2") format("woff2"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/908c4810-64db-4b46-bb8e-823eb41f68c0.woff") format("woff"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/4577388c-510f-4366-addb-8b663bcc762a.ttf") format("truetype"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/b0268c31-e450-4159-bfea-e0d20e2b5c0c.svg#b0268c31-e450-4159-bfea-e0d20e2b5c0c") format("svg");
    font-display: block;
  }

  @font-face {
    font-family: "Avenir-LT-W05_35-Light";
    src: url("//static.parastorage.com/services/santa-resources/resources/viewer/user-site-fonts/fonts/Avenir_Family_Pack/v1/AvenirLTW05-35Light.woff2") format("woff2"),
    url("//static.parastorage.com/services/santa-resources/resources/viewer/user-site-fonts/fonts/Avenir_Family_Pack/v1/AvenirLTW05-35Light.woff") format("woff");
    font-display: block;
  }

  @font-face {
    font-family: "Helvetica-W01-Light";
    src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/717f8140-20c9-4892-9815-38b48f14ce2b.eot?#iefix");
    src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/717f8140-20c9-4892-9815-38b48f14ce2b.eot?#iefix") format("eot"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/03805817-4611-4dbc-8c65-0f73031c3973.woff") format("woff"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/d5f9f72d-afb7-4c57-8348-b4bdac42edbb.ttf") format("truetype"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/05ad458f-263b-413f-b054-6001a987ff3e.svg#05ad458f-263b-413f-b054-6001a987ff3e") format("svg");
    font-display: block;
  }

  @font-face {
    font-family: "Helvetica-W02-Light";
    src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/ff80873b-6ac3-44f7-b029-1b4111beac76.eot?#iefix");
    src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/ff80873b-6ac3-44f7-b029-1b4111beac76.eot?#iefix") format("eot"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/80c34ad2-27c2-4d99-90fa-985fd64ab81a.woff") format("woff"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/b8cb02c2-5b58-48d8-9501-8d02869154c2.ttf") format("truetype"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/92c941ea-2b06-4b72-9165-17476d424d6c.svg#92c941ea-2b06-4b72-9165-17476d424d6c") format("svg");
    font-display: block;
  }

  @font-face {
    font-family: "DINNeuzeitGroteskLTW01-_812426";
    src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/b41558bd-2862-46c0-abf7-536d2542fa26.eot?#iefix");
    src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/b41558bd-2862-46c0-abf7-536d2542fa26.eot?#iefix") format("eot"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/5cee8d6e-89ad-4d8c-a0ac-584d316b15ae.woff2") format("woff2"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/388ef902-2c31-4818-abb1-a40dcd81f6d6.woff") format("woff"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/29c60077-2614-4061-aa8d-5bcfdf7354bb.ttf") format("truetype"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/76250d27-b353-4f3b-90c6-0ff635fabaab.svg#76250d27-b353-4f3b-90c6-0ff635fabaab") format("svg");
    font-display: block;
  }

  @font-face {
    font-family: "DIN-Next-W01-Light";
    src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/3e0b2cd7-9657-438b-b4af-e04122e8f1f7.eot?#iefix");
    src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/3e0b2cd7-9657-438b-b4af-e04122e8f1f7.eot?#iefix") format("eot"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/bc176270-17fa-4c78-a343-9fe52824e501.woff") format("woff"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/3516f91d-ac48-42cd-acfe-1be691152cc4.ttf") format("truetype"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/d1b1e866-a411-42ba-8f75-72bf28e23694.svg#d1b1e866-a411-42ba-8f75-72bf28e23694") format("svg");
    font-display: block;
  }

  @font-face {
    font-family: "DIN-Next-W02-Light";
    src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/48e5a0e1-2d56-46e5-8fc4-3d6d5c973cbf.eot?#iefix");
    src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/48e5a0e1-2d56-46e5-8fc4-3d6d5c973cbf.eot?#iefix") format("eot"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/07d62b21-8d7a-4c36-be86-d32ab1089972.woff") format("woff"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/c0050890-bbed-44b9-94df-2611d72dbb06.ttf") format("truetype"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/9f774d17-c03a-418e-a375-34f3beecbc7a.svg#9f774d17-c03a-418e-a375-34f3beecbc7a") format("svg");
    font-display: block;
  }

  @font-face {
    font-family: "DIN-Next-W10-Light";
    src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/3d009cd7-c8fe-40c0-93da-74f4ea8c530b.eot?#iefix");
    src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/3d009cd7-c8fe-40c0-93da-74f4ea8c530b.eot?#iefix") format("eot"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/a9e95a29-98a7-404a-90ee-1929ad09c696.woff") format("woff"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/0a7663fd-eae8-4e50-a67a-225271f8cceb.ttf") format("truetype"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/58ae9be9-5d95-44b6-8b6c-e6da6a46822c.svg#58ae9be9-5d95-44b6-8b6c-e6da6a46822c") format("svg");
    font-display: block;
  }

  @font-face {
    font-family: "Futura-LT-W01-Light";
    src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/2b40e918-d269-4fd9-a572-19f5fec7cd7f.eot?#iefix");
    src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/2b40e918-d269-4fd9-a572-19f5fec7cd7f.eot?#iefix") format("eot"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/26091050-06ef-4fd5-b199-21b27c0ed85e.woff2") format("woff2"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/cca525a8-ad89-43ae-aced-bcb49fb271dc.woff") format("woff"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/88cc7a39-1834-4468-936a-f3c25b5d81a1.ttf") format("truetype"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/14d6bf5d-15f1-4794-b18e-c03fb9a5187e.svg#14d6bf5d-15f1-4794-b18e-c03fb9a5187e") format("svg");
    font-display: block;
  }

  @font-face {
    font-family: "Futura-LT-W05-Light";
    src: url("//static.parastorage.com/services/santa-resources/resources/viewer/user-site-fonts/fonts/Futura_Complete/v1/FuturaLTW05-LightCondensed.woff2") format("woff2"),
    url("//static.parastorage.com/services/santa-resources/resources/viewer/user-site-fonts/fonts/Futura_Complete/v1/FuturaLTW05-LightCondensed.woff") format("woff");
    font-display: block;
  }

  #masterPage:not(.landingPage) #PAGES_CONTAINER {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  #masterPage.landingPage #SITE_FOOTER {
    display: none;
  }

  #masterPage.landingPage #SITE_HEADER {
    display: none;
  }

  #masterPage.landingPage #SITE_HEADER-placeholder {
    display: none;
  }

  #masterPage.landingPage #SITE_FOOTER-placeholder {
    display: none;
  }

  #SITE_CONTAINER.focus-ring-active :not(.has-custom-focus):not(.ignore-focus):not([tabindex=\\"-1\\"]):focus, #SITE_CONTAINER.focus-ring-active :not(.has-custom-focus):not(.ignore-focus):not([tabindex=\\"-1\\"]):focus ~ .wixSdkShowFocusOnSibling {
    box-shadow: 0 0 0 1px #ffffff, 0 0 0 3px #116dff !important;
    z-index: 1;
  }

  #masterPage {
    left: 0;
    margin-left: 0;
    width: 100%;
    min-width: 980px;
  }

  #SITE_FOOTER {
    --pinned-layer-in-container: 50;
    --above-all-in-container: 49;
  }

  #SITE_HEADER {
    z-index: 51;
    --above-all-in-container: 10000;
  }

  #PAGES_CONTAINER {
    --pinned-layer-in-container: 52;
    --above-all-in-container: 49;
  }

  #SITE_FOOTER {
    left: 0;
    margin-left: 0;
    width: 100%;
    min-width: 980px;
  }

  #comp-iv9nggnf:not([data-screen-in-hide="done"]) {
    opacity: 0;
  }

  #comp-iv9nggnf {
    width: 60px;
    height: 5px;
    transform: rotate(270deg);
  }

  #WRchTxt0-16wb {
    width: 589px;
    height: auto;
  }

  #comp-kjs0me2s {
    width: 128px;
    height: auto;
  }

  #comp-kjs0zhra {
    width: 61px;
    height: auto;
  }

  #LnkBr0-op1:not([data-screen-in-hide="done"]) {
    opacity: 0;
  }

  #LnkBr0-op1 {
    width: 35px;
    height: 35px;
  }

  #comp-ivgefey0:not([data-screen-in-hide="done"]) {
    opacity: 0;
  }

  #comp-ivgefey0 {
    width: 44px;
    height: 41px;
    transform: rotate(180deg);
  }

  #masterPage:not(.landingPage) {
    --top-offset: var(--header-height);
    --header-height: 59px;
  }

  #masterPage.landingPage {
    --top-offset: 0px;
  }

  #SITE_HEADER {
    left: 0;
    margin-left: 0;
    width: 100%;
    min-width: 980px;
  }

  #SITE_HEADER-placeholder {
    height: 59px;
  }

  #DrpDwnMn0-5s3 {
    width: 979px;
    height: 29px;
  }

  #comp-kdnufwvu {
    width: 80px;
    height: 48px;
  }

  #comp-kj88rn50 {
    width: 49px;
    height: 48px;
  }

  #PAGES_CONTAINER {
    left: 0;
    margin-left: 0;
    width: 100%;
    min-width: 980px;
  }

  #SITE_PAGES {
    left: 0;
    margin-left: 0;
    width: 100%;
    min-width: 980px;
  }

  :root, :host, .spxThemeOverride {
    --color_0: 255, 255, 255;
    --color_29: 153, 138, 3;
    --color_1: 255, 255, 255;
    --color_2: 0, 0, 0;
    --color_3: 237, 28, 36;
    --color_4: 0, 136, 203;
    --color_5: 255, 203, 5;
    --color_6: 114, 114, 114;
    --color_7: 176, 176, 176;
    --color_8: 255, 255, 255;
    --color_9: 114, 114, 114;
    --color_10: 176, 176, 176;
    --color_11: 255, 255, 255;
    --color_12: 230, 230, 230;
    --color_13: 150, 150, 150;
    --color_14: 77, 77, 77;
    --color_15: 40, 40, 40;
    --color_16: 237, 219, 171;
    --color_17: 219, 193, 128;
    --color_18: 201, 154, 34;
    --color_19: 134, 103, 23;
    --color_20: 67, 51, 11;
    --color_21: 182, 232, 227;
    --color_22: 141, 209, 202;
    --color_23: 65, 186, 174;
    --color_24: 43, 124, 116;
    --color_25: 22, 62, 58;
    --color_30: 77, 69, 2;
    --color_31: 173, 253, 214;
    --color_32: 132, 252, 194;
    --color_33: 12, 250, 135;
    --color_34: 8, 167, 90;
    --color_35: 4, 83, 45;
    --font_0: normal normal normal 34px/1.4em dinneuzeitgroteskltw01-_812426, sans-serif;
    --color_26: 247, 238, 166;
    --font_1: normal normal normal 16px/1.4em din-next-w01-light, din-next-w02-light, din-next-w10-light, sans-serif;
    --font_2: normal normal normal 60px/1.4em dinneuzeitgroteskltw01-_812426, sans-serif;
    --font_3: normal normal normal 100px/1.4em dinneuzeitgroteskltw01-_812426, sans-serif;
    --font_4: normal normal normal 60px/1.4em dinneuzeitgroteskltw01-_812426, sans-serif;
    --font_5: normal normal bold 40px/1.4em futura-lt-w01-light, futura-lt-w05-light, sans-serif;
    --font_6: normal normal normal 54px/1.4em dinneuzeitgroteskltw01-_812426, sans-serif;
    --font_7: normal normal normal 24px/1.4em dinneuzeitgroteskltw01-_812426, sans-serif;
    --font_8: normal normal normal 16px/1.4em helvetica-w01-light, helvetica-w02-light, sans-serif;
    --font_9: normal normal normal 14px/1.4em helvetica-w01-light, helvetica-w02-light, sans-serif;
    --font_10: normal normal normal 12px/1.4em din-next-w01-light, din-next-w02-light, din-next-w10-light, sans-serif;
    --color_27: 238, 226, 122;
    --wix-ads-height: 0px;
    --wix-ads-top-height: 0px;
    --site-width: 980px;
    --above-all-z-index: 100000;
    --portals-z-index: 100001;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    --minViewportSize: 320;
    --maxViewportSize: 1920;
    --color_28: 252, 228, 18;
    --theme-spx-ratio: 1px
  }

  .font_0 {
    font: var(--font_0);
    color: rgb(var(--color_11));
    letter-spacing: 0em
  }

  .font_1 {
    font: var(--font_1);
    color: rgb(var(--color_13));
    letter-spacing: 0em
  }

  .font_2 {
    font: var(--font_2);
    color: rgb(var(--color_14));
    letter-spacing: 0em
  }

  .font_3 {
    font: var(--font_3);
    color: rgb(var(--color_14));
    letter-spacing: 0em
  }

  .font_4 {
    font: var(--font_4);
    color: rgb(var(--color_14));
    letter-spacing: 0em
  }

  .font_5 {
    font: var(--font_5);
    color: rgb(var(--color_11));
    letter-spacing: 0em
  }

  .font_6 {
    font: var(--font_6);
    color: rgb(var(--color_11));
    letter-spacing: 0em
  }

  .font_7 {
    font: var(--font_7);
    color: rgb(var(--color_18));
    letter-spacing: 0em
  }

  .font_8 {
    font: var(--font_8);
    color: rgb(var(--color_13));
    letter-spacing: 0em
  }

  .font_9 {
    font: var(--font_9);
    color: rgb(var(--color_13));
    letter-spacing: 0em
  }

  .font_10 {
    font: var(--font_10);
    color: rgb(var(--color_15));
    letter-spacing: 0em
  }

  .color_0 {
    color: rgb(var(--color_0))
  }

  .color_1 {
    color: rgb(var(--color_1))
  }

  .color_2 {
    color: rgb(var(--color_2))
  }

  .color_3 {
    color: rgb(var(--color_3))
  }

  .color_4 {
    color: rgb(var(--color_4))
  }

  .color_5 {
    color: rgb(var(--color_5))
  }

  .color_6 {
    color: rgb(var(--color_6))
  }

  .color_7 {
    color: rgb(var(--color_7))
  }

  .color_8 {
    color: rgb(var(--color_8))
  }

  .color_9 {
    color: rgb(var(--color_9))
  }

  .color_10 {
    color: rgb(var(--color_10))
  }

  .color_11 {
    color: rgb(var(--color_11))
  }

  .color_12 {
    color: rgb(var(--color_12))
  }

  .color_13 {
    color: rgb(var(--color_13))
  }

  .color_14 {
    color: rgb(var(--color_14))
  }

  .color_15 {
    color: rgb(var(--color_15))
  }

  .color_16 {
    color: rgb(var(--color_16))
  }

  .color_17 {
    color: rgb(var(--color_17))
  }

  .color_18 {
    color: rgb(var(--color_18))
  }

  .color_19 {
    color: rgb(var(--color_19))
  }

  .color_20 {
    color: rgb(var(--color_20))
  }

  .color_21 {
    color: rgb(var(--color_21))
  }

  .color_22 {
    color: rgb(var(--color_22))
  }

  .color_23 {
    color: rgb(var(--color_23))
  }

  .color_24 {
    color: rgb(var(--color_24))
  }

  .color_25 {
    color: rgb(var(--color_25))
  }

  .color_26 {
    color: rgb(var(--color_26))
  }

  .color_27 {
    color: rgb(var(--color_27))
  }

  .color_28 {
    color: rgb(var(--color_28))
  }

  .color_29 {
    color: rgb(var(--color_29))
  }

  .color_30 {
    color: rgb(var(--color_30))
  }

  .color_31 {
    color: rgb(var(--color_31))
  }

  .color_32 {
    color: rgb(var(--color_32))
  }

  .color_33 {
    color: rgb(var(--color_33))
  }

  .color_34 {
    color: rgb(var(--color_34))
  }

  .color_35 {
    color: rgb(var(--color_35))
  }

  .backcolor_0 {
    background-color: rgb(var(--color_0))
  }

  .backcolor_1 {
    background-color: rgb(var(--color_1))
  }

  .backcolor_2 {
    background-color: rgb(var(--color_2))
  }

  .backcolor_3 {
    background-color: rgb(var(--color_3))
  }

  .backcolor_4 {
    background-color: rgb(var(--color_4))
  }

  .backcolor_5 {
    background-color: rgb(var(--color_5))
  }

  .backcolor_6 {
    background-color: rgb(var(--color_6))
  }

  .backcolor_7 {
    background-color: rgb(var(--color_7))
  }

  .backcolor_8 {
    background-color: rgb(var(--color_8))
  }

  .backcolor_9 {
    background-color: rgb(var(--color_9))
  }

  .backcolor_10 {
    background-color: rgb(var(--color_10))
  }

  .backcolor_11 {
    background-color: rgb(var(--color_11))
  }

  .backcolor_12 {
    background-color: rgb(var(--color_12))
  }

  .backcolor_13 {
    background-color: rgb(var(--color_13))
  }

  .backcolor_14 {
    background-color: rgb(var(--color_14))
  }

  .backcolor_15 {
    background-color: rgb(var(--color_15))
  }

  .backcolor_16 {
    background-color: rgb(var(--color_16))
  }

  .backcolor_17 {
    background-color: rgb(var(--color_17))
  }

  .backcolor_18 {
    background-color: rgb(var(--color_18))
  }

  .backcolor_19 {
    background-color: rgb(var(--color_19))
  }

  .backcolor_20 {
    background-color: rgb(var(--color_20))
  }

  .backcolor_21 {
    background-color: rgb(var(--color_21))
  }

  .backcolor_22 {
    background-color: rgb(var(--color_22))
  }

  .backcolor_23 {
    background-color: rgb(var(--color_23))
  }

  .backcolor_24 {
    background-color: rgb(var(--color_24))
  }

  .backcolor_25 {
    background-color: rgb(var(--color_25))
  }

  .backcolor_26 {
    background-color: rgb(var(--color_26))
  }

  .backcolor_27 {
    background-color: rgb(var(--color_27))
  }

  .backcolor_28 {
    background-color: rgb(var(--color_28))
  }

  .backcolor_29 {
    background-color: rgb(var(--color_29))
  }

  .backcolor_30 {
    background-color: rgb(var(--color_30))
  }

  .backcolor_31 {
    background-color: rgb(var(--color_31))
  }

  .backcolor_32 {
    background-color: rgb(var(--color_32))
  }

  .backcolor_33 {
    background-color: rgb(var(--color_33))
  }

  .backcolor_34 {
    background-color: rgb(var(--color_34))
  }

  .backcolor_35 {
    background-color: rgb(var(--color_35))
  }

  [data-mesh-id=SITE_FOOTERinlineContent] {
    height: auto;
    width: 100%
  }

  [data-mesh-id=SITE_FOOTERinlineContent-gridContainer] {
    position: static;
    display: grid;
    height: auto;
    width: 100%;
    min-height: auto;
    grid-template-rows:repeat(4, min-content) 1fr;
    grid-template-columns:100%
  }

  [data-mesh-id="comp-iv9nggnf-rotated-wrapper"] > [id="comp-iv9nggnf"] {
    position: relative;
    left: 459px;
    top: 28px
  }

  [data-mesh-id="comp-ivgefey0-rotated-wrapper"] > [id="comp-ivgefey0"] {
    position: relative;
    left: 870px;
    top: 0px
  }

  [data-mesh-id=comp-iv9nggnf-rotated-wrapper] {
    position: static;
    height: 60px;
    width: 0;
    margin: 1px 0px 38px calc((100% - 980px) * 0.5);
    grid-area: 1 / 1 / 2 / 2;
    justify-self: start;
    align-self: start
  }

  [data-mesh-id=SITE_FOOTERinlineContent-gridContainer] > [id="WRchTxt0-16wb"] {
    position: relative;
    margin: 0px 0px 0 calc((100% - 980px) * 0.5);
    left: 180px;
    grid-area: 2 / 1 / 3 / 2;
    justify-self: start;
    align-self: start
  }

  [data-mesh-id=SITE_FOOTERinlineContent-gridContainer] > [id="comp-kjs0me2s"] {
    position: relative;
    margin: 0px 0px 5px calc((100% - 980px) * 0.5);
    left: 457px;
    grid-area: 3 / 1 / 4 / 2;
    justify-self: start;
    align-self: start
  }

  [data-mesh-id=SITE_FOOTERinlineContent-gridContainer] > [id="comp-kjs0zhra"] {
    position: relative;
    margin: 0px 0px 5px calc((100% - 980px) * 0.5);
    left: 408px;
    grid-area: 3 / 1 / 4 / 2;
    justify-self: start;
    align-self: start
  }

  [data-mesh-id=SITE_FOOTERinlineContent-gridContainer] > [id="LnkBr0-op1"] {
    position: relative;
    margin: 0px 0px 7px calc((100% - 980px) * 0.5);
    left: 470px;
    grid-area: 4 / 1 / 5 / 2;
    justify-self: start;
    align-self: start
  }

  [data-mesh-id=comp-ivgefey0-rotated-wrapper] {
    position: static;
    height: 42px;
    width: 0;
    margin: 0px 0px 11px calc((100% - 980px) * 0.5);
    grid-area: 5 / 1 / 6 / 2;
    justify-self: start;
    align-self: start
  }

  [data-mesh-id=SITE_HEADERinlineContent] {
    height: auto;
    width: 100%
  }

  [data-mesh-id=SITE_HEADERinlineContent-gridContainer] {
    position: static;
    display: grid;
    height: auto;
    width: 100%;
    min-height: auto;
    grid-template-rows:1fr;
    grid-template-columns:100%
  }

  [data-mesh-id=SITE_HEADERinlineContent-gridContainer] > [id="DrpDwnMn0-5s3"] {
    position: relative;
    margin: 15px 0px 15px calc((100% - 980px) * 0.5);
    left: 0px;
    grid-area: 1 / 1 / 2 / 2;
    justify-self: start;
    align-self: start
  }

  [data-mesh-id=SITE_HEADERinlineContent-gridContainer] > [id="comp-kdnufwvu"] {
    position: relative;
    margin: 7px 0px 4px calc((100% - 980px) * 0.5);
    left: 900px;
    grid-area: 1 / 1 / 2 / 2;
    justify-self: start;
    align-self: start
  }

  [data-mesh-id=SITE_HEADERinlineContent-gridContainer] > [id="comp-kj88rn50"] {
    position: relative;
    margin: 2px 0px 9px calc((100% - 980px) * 0.5);
    left: 0px;
    grid-area: 1 / 1 / 2 / 2;
    justify-self: start;
    align-self: start
  }

  #comp-iv9nggnf {
    --lnw: 5px;
    --brd: var(--color_18);
    --alpha-brd: 1;
    --static-spx: 1px
  }

  #WRchTxt0-16wb {
    --static-spx: 1px;
    height: auto
  }

  #comp-kjs0me2s {
    --static-spx: 1px;
    height: auto
  }

  #comp-kjs0zhra {
    --static-spx: 1px;
    height: auto
  }

  #LnkBr0-op1 {
    --static-spx: 1px;
    --item-size: 35px;
    --item-margin: 0px 12px 0px 0px;
    --item-display: inline-block;
    width: 35px;
    height: 35px
  }

  #comp-ivgefey0 {
    --static-spx: 1px;
    --stroke-width: 0;
    --fill-opacity: 1;
    --stroke: #C99A22;
    --stroke-opacity: 0;
    --fill: #C99A22
  }

  #DrpDwnMn0-5s3 {
    --menuTotalBordersX: 0px;
    --menuTotalBordersY: 0px;
    --bgDrop: var(--color_15);
    --rd: 0px;
    --shd: none;
    --fnt: normal normal normal 14px/1.4em helvetica-w01-light, helvetica-w02-light, sans-serif;
    --pad: 5px;
    --txt: var(--color_11);
    --trans: color 0.4s ease 0s;
    --txth: var(--color_13);
    --txts: var(--color_18);
    --boxShadowToggleOn-shd: none;
    --alpha-txt: 1;
    --alpha-bgDrop: 1;
    --alpha-txth: 1;
    --alpha-txts: 1;
    --static-spx: 1px
  }

  #comp-kdnufwvu {
    --borderColor: 122, 122, 122;
    --alpha-borderColor: 1;
    --borderWidth: 0px;
    --borderRadius: 10px 10px 10px 10px;
    --boxShadow: none;
    --separatorColor: 255, 255, 255;
    --backgroundColor: 50, 50, 50;
    --alpha-backgroundColor: 1;
    --borderRadiusValue: 10px 10px 10px 10px;
    --itemFont: normal normal normal 16px/1.4em avenir-lt-w01_35-light1475496, avenir-lt-w05_35-light, sans-serif;
    --itemTextColor: var(--color_11);
    --itemTextColorHover: var(--color_11);
    --backgroundColorHover: 50, 50, 50;
    --itemTextColorActive: var(--color_11);
    --alpha-itemTextColorActive: 1;
    --backgroundColorActive: 50, 50, 50;
    --borderColorHover: rgba(32, 32, 32, 1);
    --alpha-itemTextColorHover: 1;
    --alpha-backgroundColorActive: 0.9;
    --alpha-separatorColor: 0.3;
    --borderSides: none;
    --itemSpacing: 5px;
    --alpha-itemTextColor: 1;
    --alpha-backgroundColorHover: 1;
    --boxShadowToggleOn-boxShadow: none;
    --borderColorActive: rgba(32, 32, 32, 1);
    --static-spx: 1px;
    --height: 48px;
    --iconSize: 22px
  }

  #comp-kj88rn50 {
    --contentPaddingLeft: 0px;
    --contentPaddingRight: 0px;
    --contentPaddingTop: 0px;
    --contentPaddingBottom: 0px;
    --static-spx: 1px;
    --height: 48px;
    --width: 49px
  }

  #masterPage {
    --static-spx: 1px
  }

  #SITE_FOOTER {
    --bg: var(--color_15);
    --shd: none;
    --brwt: 0px;
    --brd: var(--color_13);
    --brwb: 0px;
    --bgctr: var(--color_15);
    --rd: 0px;
    --boxShadowToggleOn-shd: none;
    --alpha-brd: 0;
    --alpha-bgctr: 1;
    --alpha-bg: 1;
    --static-spx: 1px;
    --shc-mutated-brightness: 20, 20, 20
  }

  #SITE_HEADER {
    --bg: var(--color_15);
    --shd: none;
    --brwt: 0px;
    --brd: 47, 46, 46;
    --brwb: 0px;
    --bgctr: 255, 255, 255;
    --rd: 0px;
    --boxShadowToggleOn-shd: none;
    --alpha-brd: 0;
    --alpha-bgctr: 0;
    --alpha-bg: 1;
    --static-spx: 1px;
    --shc-mutated-brightness: 20, 20, 20;
    position: fixed !important;
    margin-top: var(--wix-ads-height);
    top: 0
  }

  #PAGES_CONTAINER {
    --static-spx: 1px
  }

  #SITE_PAGES {
    --static-spx: 1px;
    --transition-duration: 700ms
  }

  #BACKGROUND_GROUP {
    --transition-duration: 700ms
  }

`;

export default GlobalStyles;
