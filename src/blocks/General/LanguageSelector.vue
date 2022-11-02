<template> 
    <nav class="languages">
        <ul class="nav">
            <li class="lang-item current-lang">
                <router-link title="en" to="/">en</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'LanguageSelector'
    }
</script>
