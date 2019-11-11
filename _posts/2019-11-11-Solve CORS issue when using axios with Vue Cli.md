---
layout: mypost
title: Solve CORS issue when using axios with Vue Cli
---

Install axios:

```shell
npm i axios
```

in main.js, add this two line:

Import axios and defining it on the prototype:

```javascript
import axios from 'axios';
Vue.prototype.$axios = axios;
```

To solve CORS issue, Create vue.config.js file in the root directory:

```javascript
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        // makesure it doesn't end with the slash
        target: 'https://jsonplaceholder.typicode.com',
        ws: true,
        changeOrigin: true,
        pathRewrite : {
          '^/api' : ''
        }
      }
    }
  }
}
```

then you can use axios:

```javascript
mounted() {
    this.$axios.get('/api/posts', {})
      .then(res => console.log(res))
}
```

