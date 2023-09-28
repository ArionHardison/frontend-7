<template>
  <div id="news-single-post-index">
    <Loading />

    <Header logoColor='dark'/>

    <main id="main" class="site-main">
      <template v-if="program">
        <PageTitle :title="program.name"/>
        <div id="page-content" class="spacer p-top-xl">
          <div class="wrapper">
            <div class="content">
              <div id="single">
                <div class="row gutter-width-md">
                  <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 single-content">
                    <div class="img object-fit">
                      <div class="object-fit-cover">
                        <img :src="$imageUrl(program.program_image, 'md', false)" :alt="program.name">
                      </div>
                    </div>

                    <div class="title">
                      <h2>{{program.name}}</h2>
                    </div>

                    <Meta :program="program"/>

                    <Description :program="program"/>
                  </div>

                  <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 ">
                    <Sidebar :program="program"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </main>

    <Footer />
  </div>
</template>

<script>
import Loading from '~/components/Loading/Loading';
import Header from '~/components/blocks/header/Header';
import Footer from '~/components/blocks/footer/Footer';

import PageTitle from '~/components/blocks/news-single-post/PageTitle';
import Sidebar from '~/components/blocks/news/Sidebar';
import Meta from '~/components/blocks/news-single-post/Meta';
import Description from '~/components/blocks/news-single-post/Description';
import Tags from '~/components/blocks/news-single-post/Tags';
import Comments from '~/components/blocks/news-single-post/Comments';
import api from "~/mixins/api";

export default {
  mixins: [api],
  components: {
    Loading,
    Header,
    PageTitle,
    Sidebar,
    Meta,
    Description,
    Tags,
    Comments,
    Footer
  },
  mounted: function() {
    document.body.classList.add( 'single-post' );
    document.body.classList.add( 'bg-fixed' );
    document.body.classList.add( 'bg-stripes' );
  },
  created() {
    this.getProgram();
  },
  data(){
    return {
      program: null
    }
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
  beforeDestroy() {
    document.body.classList.remove( 'single-post' );
    document.body.classList.add( 'bg-fixed' );
    document.body.classList.add( 'bg-stripes' );
  },
  metaInfo: {
    title: 'News single post | Forch - Factory & Industrial Business Vue JS Template',
    titleTemplate: '%s'
  }
}
</script>
