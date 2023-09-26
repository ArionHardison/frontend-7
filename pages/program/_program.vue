<template>
  <div id="journal-single-post-index">
    <Loading />

    <Header />
    <template v-if="program">
      <main id="main" class="site-main">


        <section id="page-content" class="spacer m-top-xl">
          <div class="wrapper">
            <div id="single">
              <div class="row gutter-width-lg">
                <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 position-static single-content">
                  <div class="img object-fit">
                    <div class="object-fit-cover">
                      <img
                          :src="$imageUrl(program.program_image, 'md', false)"
                          :alt="program.name"
                      />
                    </div>
                  </div>

                  <div class="bg-half-ring-left"></div>

                  <p class="date">
                    <span class="large">{{ fromIso(program.created_at).day }}</span> {{ fromIso(program.created_at).monthShort}}
                  </p>



                  <div class="description">{{program.description}}</div>
                </div>

                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">

                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </template>

    <Footer />
  </div>
</template>

<script>
import Loading from '~/components/Loading/Loading';
import Header from '~/components/blocks/header/Header';
import Footer from '~/components/blocks/footer/Footer';


import api from "@/mixins/api";
import time from "@/mixins/time";


export default {
  mixins: [api, time],
  middleware: ['maintenance'],
  components: {
    Loading,
    Header,
    PageTitle,
    Meta,
    Tags,
    Comments,
    Sidebar,
    Footer
  },
  mounted: function() {
    document.body.classList.add( 'single-post' );
    document.body.classList.add( 'bg-fixed' );
    document.body.classList.add( 'bg-line' );
  },
  beforeDestroy() {
    document.body.classList.remove( 'single-post' );
    document.body.classList.remove( 'bg-fixed' );
    document.body.classList.remove( 'bg-line' );
  },
  data(){
    return {
      program: null,
    }
  },
  created() {
    this.getProgram();
  },
  methods: {
    async getProgram(){
      let  program = await this.get(`public/get-program/${this.$getId(this.$route.params.program)}`)
      if(program){
        program.author.roles = program.author.roles.map((role)=>{
          return role.name;
        });
        this.program = program;
      }
    }
  },
  metaInfo: {
    title: 'Journal single post | Oxer - Minimal Portfolio Vue JS Template',
    titleTemplate: '%s'
  }
}
</script>
