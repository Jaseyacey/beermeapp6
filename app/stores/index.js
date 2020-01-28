import Configstore from './config.store';
import AuthStore from './auth.store';
import MatchStore from './match.store';

const config = new Configstore()
const auth = new AuthStore()
const matches = new MatchStore()

export default {config, auth, matches}