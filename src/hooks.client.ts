import { SESSION, USER } from '$lib/index';
import { page } from '$app/stores';
import { get } from 'svelte/store';

import Corbado from '@corbado/webcomponent';
import { PUBLIC_CORBADO_PROJECT_ID } from '$env/static/public';

SESSION.set(new Corbado.Session(PUBLIC_CORBADO_PROJECT_ID));

get(SESSION).refresh(user => {
        if(!user){
            USER.set(false);
        } else {
            USER.set(user);
        }
})

 //$USER.session = getCookie('cbo_short_session');
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}