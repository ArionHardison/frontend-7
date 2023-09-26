<template>
    <form class="search-form" role="search" method="get" action="search-results">
        <div class="search input-group">
            <input class="form-control form-control-lg" type="text" placeholder="Type something to search" name="s">

            <div class="input-group-append">
                <button type="submit" class="btn btn-link link-color-2 border-0 p-0 min-w-auto"><i class="fas fa-search"></i></button>
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        name: 'SearchForm',
        data() {
            return {
                urlAction: ""
            }
        }
    }
</script>
