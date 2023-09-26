<template>
    <div class="meta">
        <p>
            <span><router-link to="/news">By admin</router-link></span>
            <span>-</span>
            <span>Comments (1)</span>
            <span>-</span>
            <span class="category"><router-link title="Welding" to="/news">Welding</router-link></span>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'Meta'
    }
</script>
