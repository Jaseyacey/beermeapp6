import Configstore from './config.store';
import AuthStore from './auth.store';

const config = new Configstore()
const auth = new AuthStore()

export default {config, auth}