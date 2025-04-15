import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faHome,
  faUserShield,
  faStore,
  faInfoCircle,
  faUser,
  faUsers,
  faCog,
  faSignOutAlt,
  faQuestionCircle,
  faShieldAlt,
  faBox,
  faShoppingCart,
  faBook,
  faEnvelope,
  faPhone,
  faSun,
  faMoon,
  faTextHeight,
  faTimes,
  faCheckCircle,
  faExclamationCircle,
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { App } from 'vue'

// Add icons to library
library.add(
  faHome,
  faUserShield,
  faStore,
  faInfoCircle,
  faUser,
  faUsers,
  faCog,
  faSignOutAlt,
  faQuestionCircle,
  faShieldAlt,
  faBox,
  faShoppingCart,
  faBook,
  faEnvelope,
  faPhone,
  faSun,
  faMoon,
  faTextHeight,
  faTimes,
  faCheckCircle,
  faExclamationCircle,
  faExclamationTriangle
)

// Create Vue plugin
export default {
  install: (app: App) => {
    app.component('font-awesome-icon', FontAwesomeIcon)
  }
}
