<template>
    <section id="page-title" class="block">
        <div class="wrapper">
            <div class="row gutter-width-lg">
                <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                    <div class="title">
                        <h1 class="large">Metalworking company that makes anything you can imagine with metal.</h1>
                    </div>
                </div>
            </div>

            <div class="row gutter-width-lg with-pb-lg spacer p-top-lg">
                <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                    <div class="d-flex align-items-end h-100">
                        <router-link title="Contact" to="/contacts" class="btn btn-primary">Contact</router-link>
                    </div>
                </div>

                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div class="description">
                        <p>The term covers a wide range of work from large ships and bridges to precise engine parts and delicate jewelry. It therefore includes a correspondingly wide range of skills, processes, and tools.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'PageTitle'
    }
</script>
