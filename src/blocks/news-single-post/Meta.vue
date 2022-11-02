<template>
    <div class="meta">
        <p>
            <span><router-link to="/news">By admin</router-link></span>
            <span>Comments (1)</span>
            <span class="category"><router-link title="Hairstyle" to="/news">Hairstyle</router-link></span>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'Meta'
    }
</script>
