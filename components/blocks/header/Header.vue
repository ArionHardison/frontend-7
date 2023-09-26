<template>
    <header id="header" class="site-header">
        <div class="wrapper">
            <div class="header-content d-flex justify-content-between">
                <HeaderLogo :logoColor="logoColor" />

                <div class="header-menu align-self-center">
                    <div class="menu-toggle no-space">
                        <MenuModalButton />
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import HeaderLogo from './HeaderLogo';
    import MenuModalButton from '~/components/Button/MenuModalButton';

    export default {
        name: 'Header',
        props: [ 'logoColor' ],
        components: {
            HeaderLogo,
            MenuModalButton
        }
    }
</script>
