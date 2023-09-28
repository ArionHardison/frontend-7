<template>
    <div id="page-title">
        <div class="wrapper">
            <div class="title">
                <h1 class="large">{{title}}</h1>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PageTitle',
        props: {
          title: {
            type: String,
            default: "Programs"
          }
        }
    }
</script>
