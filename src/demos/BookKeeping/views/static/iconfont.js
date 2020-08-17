import { createGlobalStyle } from "styled-components";

export const GlobalBookKeepingIconfontStyle = createGlobalStyle`
  @font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1585474743502'); /* IE9 */
  src: url('./iconfont.eot?t=1585474743502#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1585474743502') format('woff'),
  url('./iconfont.ttf?t=1585474743502') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1585474743502#iconfont') format('svg'); /* iOS 4.1- */
}

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
