<template>
    <section id="page-title" class="block">
        <div class="wrapper">
            <div class="row gutter-width-lg">
                <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                    <div class="title">
                        <h1 class="large">{{title}}</h1>
                    </div>
                </div>
            </div>

            <div class="row gutter-width-lg with-pb-lg spacer p-top-lg justify-content-end">
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div class="description">
                        <p>{{description}}</p>
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
          title: {
            type: String,
            default: ""
          },
          description: {
            type: String,
            default: ""
          }
        },

    }
</script>
