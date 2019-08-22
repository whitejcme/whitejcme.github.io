# jiwonjulietyoon

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


### Flipbook-vue
Terminal:
`npm i -S flipbook-vue`

main.js:
```
import Vue from 'vue'
import VuePageTransition from 'vue-page-transition'

Vue.use(VuePageTransition)
```

<br>

### Vue Page Transition
Terminal: 
`npm i --save vue-page-transition`

main.js:
```import VuePageTransition from 'vue-page-transition';

Vue.use(VuePageTransition);

```

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
