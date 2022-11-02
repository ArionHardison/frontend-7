<template>
    <div class="search-toggle">
        <button @click="toggleSearchModal" type="button" class="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto text-uppercase" data-toggle="modal" data-target="#search-modal">search</button>
    </div>
</template>

<script>
    export default {
        name: 'SearchModalButton',
        methods: {
            toggleSearchModal: function( event ) {
                this.$store.commit( 'toggleSearchModal' )
            }
        }
    }
</script>
