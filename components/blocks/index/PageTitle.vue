<template>
    <section id="page-title" class="block">
        <div class="wrapper">
            <div class="row gutter-width-lg">
                <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                    <div class="title">
                        <h1 class="large">{{content.hsTitle}}</h1>
                    </div>
                </div>
            </div>

            <div class="row gutter-width-lg with-pb-lg spacer p-top-lg">
                <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                    <div class="d-flex align-items-end h-100">
                        <nuxt-link title="Contact" :to="content.hsBtnLink" class="btn btn-primary">{{content.hsBtnText}}</nuxt-link>
                    </div>
                </div>

                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div class="description">
                        <p>{{content.hsDescription}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'PageTitle',
        props: {
          content: {
            type: Object,
            default:()=>{}
          }
        }
    }
</script>
