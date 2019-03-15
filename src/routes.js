import Home from './componenets/Home.vue'
import Portfolio from './componenets/portfolio/Portfolio.vue'
import Stocks from './componenets/stocks/Stocks.vue'

export const routes = [
    {path: '/', component: Home},
    {path: '/portfolio', component: Portfolio},
    {path: '/stocks', component: Stocks}
];