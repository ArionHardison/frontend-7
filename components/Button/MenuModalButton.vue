<template>
    <button @click="toggleMenuModal" type="button" class="btn btn-link border-0 p-0 min-w-auto" data-toggle="modal" data-target="#menu-modal">
        <i class="forch-icon-menu"></i>
    </button>
</template>

<script>
    export default {
        name: 'MenuModalButton',
        methods: {
            toggleMenuModal: function( event ) {
                this.$store.commit( 'toggleMenuModal' );
            }
        }
    }
</script>
