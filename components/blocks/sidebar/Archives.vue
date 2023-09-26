<template>
    <div id="archives-2" class="widget widget_archive">
        <h5 class="widget-title">Archives</h5>

        <ul>
            <li>
                <router-link title="March date" to="/news">May {{ new Date().getFullYear() }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Archives'
    }
</script>
