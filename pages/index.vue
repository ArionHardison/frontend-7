<template>
  <div id="home-index">
    <Loading />
    <Header logoColor='dark' />
    <main id="main" class="site-main">
      <div class="content">
        <div class="clearfix">
          <template v-if="homePage">
            <template v-if="homePage.home.headerSection">
              <PageTitle :content="homePage.home.headerSection"/>
            </template>
            <template v-if="homePage.home.imageSection">
              <div id="img" class="block spacer p-top-xl">
                <div class="img-size-1">
                  <div class="img object-fit">
                    <div class="object-fit-cover">
                      <img :src="$imageUrl(homePage.home.imageSection.isImage, 'md')" alt="Tools">
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <template v-if="homePage.home.aboutSection">
              <AboutUs :about="homePage.home.aboutSection"/>
            </template>
            <template v-if="homePage.home.partnersList">
              <Partners :partners="homePage.home.partnersList"/>
            </template>
            <section id="services" class="block spacer p-top-xl">
              <div class="bg-secondary text-tertiary spacer p-top-xl p-bottom-xl">
                <div class="wrapper">
                  <div class="row gutter-width-md with-pb-lg">
                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                      <div class="title">
                        <h2>Services</h2>
                      </div>
                      <div class="description">
                        <p>Mic offers high quality services in various fields.</p>
                      </div>
                    </div>
                    <template v-if="homePage.home.servicesLest">
                      <Services :services="homePage.home.servicesLest"/>
                    </template>
                  </div>
                </div>
              </div>
            </section>
            <Projects />
            <template v-if="stats">
              <Facts :stats="stats"/>
            </template>
            <template v-if="homePage.contacts">
              <section>
                <div id="contacts" class="block spacer p-top-xl">
                  <div class="wrapper">
                    <div class="title">
                      <h2>{{homePage.contacts.csContatctsTitle}}</h2>
                    </div>
                    <Contacts :contacts="homePage.contacts.contactsSection"/>
                  </div>
                </div>
              </section>
            </template>
            <News />
          </template>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>
<script>
import Loading from '~/components/Loading/Loading';
import Header from '~/components/blocks/header/Header';
import Footer from '~/components/blocks/footer/Footer';

import PageTitle from '~/components/blocks/index/PageTitle';
import AboutUs from '~/components/blocks/index/About-us';
import Services from '~/components/blocks/index/Services';
import Projects from '~/components/blocks/index/Projects';
import Facts from '~/components/blocks/index/Facts';
import Partners from '~/components/blocks/index/Partners';
import Contacts from '~/components/blocks/index/Contacts';
import News from '~/components/blocks/index/News';
import fcms from "../mixins/fcms";
export default {
  middleware: ['maintenance'],
  mixins: [fcms],
  components: {
    Loading,
    Header,
    PageTitle,
    AboutUs,
    Services,
    Projects,
    Facts,
    Partners,
    Contacts,
    News,
    Footer
  },
  data(){
    return {
      homePage: null,
      stats: null
    }
  },
  async created(){
    const homePage = await this.getEntities("home|contacts");
    if(homePage){
      this.homePage = homePage;
    }
    this.stats = await this.get("public/stats");
  },
  mounted: function() {
    document.body.classList.add( 'home' );
    document.body.classList.add( 'bg-fixed' );
    document.body.classList.add( 'bg-stripes' );
  },
  beforeDestroy() {
    document.body.classList.remove( 'home' );
    document.body.classList.remove( 'bg-fixed' );
    document.body.classList.remove( 'bg-stripes' );
  },
  metaInfo: {
    title: 'Home ',
    titleTemplate: '%s'
  }
}
</script>
