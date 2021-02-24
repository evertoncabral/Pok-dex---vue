import Vue from "vue";
import "./styles/main.scss";
import App from "./App.vue";
import InfiniteLoading from 'vue-infinite-loading';

Vue.config.productionTip = false;

Vue.use(InfiniteLoading, {});


new Vue({
	render: h => h(App)
}).$mount("#root");
