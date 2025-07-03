import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
