<template>
    <footer id="footer" class="site-footer">
        <div class="wrapper">
            <div class="d-flex flex-column flex-md-row flex-lg-row flex-xl-row align-items-center justify-content-between">
                <div class="logo logo-primary">
                    <img src="assets/img/logo/logo-dark.svg" alt="Logo">
                </div>

                <div class="footer">
                    <div class="align-self-center">
                        <div class="copyright">
                            <p>© {{ new Date().getFullYear() }} Factory & Industrial Business Vue JS Template by <a href="https://www.adveits.com">Adveits</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>
