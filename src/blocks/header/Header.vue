<template>
    <header id="header" class="site-header">
        <div class="wrapper">
            <div class="header-content d-flex justify-content-between">
                <div class="header-left align-self-center">
                    <div class="links">
                        <LinksItem />
                    </div>

                    <SearchModalButton />
                </div>

                <div class="header-center align-self-center">
                    <Logo logoColor="dark" />
                </div>

                <div class="header-right d-flex justify-content-end">
                    <div class="d-flex align-items-center">
                        <SearchModalButton />

                        <MenuModalButton />
                    </div>

                    <Actions />
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import LinksItem from './LinksItem';
    import SearchModalButton from '../../components/Button/SearchModalButton';
    import Logo from './HeaderLogo';
    import MenuModalButton from '../../components/Button/MenuModalButton';
    import Actions from '../../blocks/General/Actions';

    export default {
        name: 'Header',
        components: {
            LinksItem,
            SearchModalButton,
            Logo,
            MenuModalButton,
            Actions
        }
    }
</script>
