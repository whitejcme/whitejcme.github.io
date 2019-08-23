# jiwonjulietyoon

- [jiwonjulietyoon.com](https://www.jiwonjulietyoon.com)
- [jiwonjulietyoon.github.io](https://jiwonjulietyoon.github.io/)

<br>

## Project Timeline
- Jun. 7, 2019: Register domain (jiwonjulietyoon.com)
- Jun. 7 - Jun. 29, 2019: UI/UX Design & Hard-coding
- Jul. 27 - Aug. 22, 2019: Rebuild project with Vue CLI

<br>


## Added:

<br>

### Vuetify
`vue add vuetify`

<br>

### JQuery
Terminal:
```
npm install --save jquery
npm install --save-dev expose-loader
```

main.js:
```
import 'expose-loader?$!expose-loader?jQuery!jquery';
window.$ = window.jQuery = require("jquery");
```

.eslintrc.js: (append)
```
globals: {
  "$": true,
  "jQuery": true
}

```

various script tags (if necessary)
```
import $ from 'jquery';
```

<br>

### Vue Page Transition
Terminal: 
`npm i --save vue-page-transition`

main.js:
```import VuePageTransition from 'vue-page-transition';
import VuePageTransition from 'vue-page-transition';
Vue.use(VuePageTransition);
```





## Notes

- Viewport size for mobile/tablet devices:
  - Samsung Galaxy A7: 360px * 560px
  - Samsung Galaxy S10 5G: 412px * 725px
  - Iphone XR: 414px * 722px





<br>
<br>
<br>





---------------------------

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
