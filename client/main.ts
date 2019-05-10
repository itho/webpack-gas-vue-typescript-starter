import Vue from 'vue';
import './main.scss';

new Vue({
  el: '#app',
  template: `<div><h1>hello world</h1><p>{{ prop.string }}</p></div>`,
  data: {
    prop: null
  },
  beforeMount: function () {
    // @ts-ignore
    if (typeof google !== 'undefined') {
      this.prop = JSON.parse(this.$el.attributes['data-prop'].value);
    } else {
      this.prop = { string: 'test-env' };
    }    
  },
})
