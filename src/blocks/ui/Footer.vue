<template>
    <footer id="footer" class="site-footer">
        <div class="wrapper">
            <div class="footer">
                <div class="d-flex flex-column">
                    <div class="align-self-center">
                        <div class="copyright">
                            <p>© {{ new Date().getFullYear() }} Beauty Salon Vue JS Template by <a href="https://www.adveits.com">Adveits</a></p>
                        </div>
                    </div>

                    <div class="align-self-center">
                        <FooterMenuSecondary />
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    import FooterMenuSecondary from '../footer/FooterMenuSecondary';

    export default {
        name: 'Footer',
        components: {
            FooterMenuSecondary
        }
    }
</script>
