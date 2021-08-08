import ru from '@/locales/ru';
import en from '@/locales/en';
import store from '@/store';

const locales = {'ru-Ru': ru, 'en-US': en}

const localize = key => locales[store.getters.locale][key] || key;

export default localize;