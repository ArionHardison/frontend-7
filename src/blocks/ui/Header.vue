<template>
    <header id="header" class="site-header">
        <div class="wrapper">
            <div class="header-content d-flex justify-content-between">
                <div class="header-left align-self-center"></div>

                <div class="header-center align-self-center">
                    <Logo logoColor="dark"/>
                </div>

                <div class="header-right d-flex justify-content-end"></div>
            </div>
        </div>
    </header>
</template>

<script>
    import Logo from '../header/HeaderLogo';

    export default {
        name: 'Header',
        components: {
            Logo
        }
    }
</script>
