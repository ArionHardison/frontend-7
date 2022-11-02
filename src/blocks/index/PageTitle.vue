<template>
    <section id="page-title" class="block with-img">
        <div class="wrapper text-center d-flex">
            <div class="align-self-center w-100">
                <div class="title">
                    <h1 class="large text-uppercase">Chop Barber Shop</h1>
                </div>

                <div class="description spacer p-top-lg">
                    <p>For Men Only</p>
                </div>

                <div class="spacer p-top-lg no-space">
                    <a @click="scrollToSection('#contact-us')" href="#contact-us" class="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto link-no-space text-uppercase scroll-to-id">Scroll</a>
                </div>

                <LanguageSelector />
            </div>
        </div>

        <div class="page-title-bg-color"></div>
    </section>
</template>

<script>
    import LanguageSelector from '../../blocks/General/LanguageSelector';

    export default {
        name: 'PageTitle',
        components: {
            LanguageSelector
        },
        mounted() {
            document.querySelector( '.languages' ).classList.add( 'lang-position' );
        },
        beforeDestroy() {
            document.querySelector( '.languages' ).classList.remove( 'lang-position' );
        }
    }
</script>
