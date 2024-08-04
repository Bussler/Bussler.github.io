import './assets/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'

import Button from 'primevue/button'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup'
import Row from 'primevue/row'
import InputText from 'primevue/inputtext'
import Card from 'primevue/card'
import InputMask from 'primevue/inputmask'
import Dropdown from 'primevue/dropdown'
import Textarea from 'primevue/textarea'
import { configure } from 'vee-validate'
import Dialog from 'primevue/dialog'
import Message from 'primevue/message'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import FileUpload from 'primevue/fileupload'
import Splitter from 'primevue/splitter'
import SplitterPanel from 'primevue/splitterpanel'
import Panel from 'primevue/panel'
import router from './router'
import App from './App.vue'

const app = createApp(App)

configure({
  generateMessage: (ctx): string => {
    const messages: Record<string, string> = {
      required: 'This field is required.',
    }

    if (ctx.rule && typeof ctx.rule.name === 'string') {
      return messages[ctx.rule.name] ?? `The field ${ctx.field} is invalid.`
    }
    return `The field ${ctx.field} has an unknown validation error.`
  },
})

app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.use(ToastService)

app.component('Message', Message)
app.component('Toast', Toast)
app.component('FileUpload', FileUpload)
app.component('Card', Card)
app.component('Dialog', Dialog)
app.component('InputMask', InputMask)
app.component('Dropdown', Dropdown)
app.component('Button', Button)
app.component('Textarea', Textarea)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('ColumnGroup', ColumnGroup)
app.component('Row', Row)
app.component('InputText', InputText)
app.component('Splitter', Splitter)
app.component('SplitterPanel', SplitterPanel)
app.component('Panel', Panel)

app.mount('#app')
