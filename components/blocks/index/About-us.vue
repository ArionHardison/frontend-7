<template>
    <section id="about-us" class="block spacer p-top-xl">
        <div class="wrapper">
            <div class="title">
                <h2>{{about.absTitle}}</h2>
            </div>

            <div class="row gutter-width-md with-pb-md">
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div class="description text-secondary">
                        <p>{{about.absShortDescription}}</p>
                    </div>
                </div>

                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div class="description">
                        <p>{{about.absLongDescription}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'About-us',
        props: {
          about: {
            type: Object,
            default:()=>{}
          }
        }
    }
</script>
