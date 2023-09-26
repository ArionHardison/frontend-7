<template>
  <div id="journal-index">
    <Loading />

    <Header />

    <main id="main" class="site-main">


      <section id="page-content" class="spacer p-top-xl">
        <div id="blog">
          <div class="wrapper">
            <div class="row gutter-width-lg">
              <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12">


                <LoadMore />
              </div>

              <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script>
import Loading from '~/components/Loading/Loading';
import Header from '~/components/blocks/header/Header';
import Footer from '~/components/blocks/footer/Footer';


import LoadMore from '~/components/Loadmore/Loadmore';

export default {
  components: {
    Loading,
    Header,
    LoadMore,
    Footer
  },
  mounted: function() {
    document.body.classList.add( 'blog' );
    document.body.classList.add( 'bg-fixed' );
    document.body.classList.add( 'bg-line' );
  },
  beforeDestroy() {
    document.body.classList.remove( 'blog' );
    document.body.classList.remove( 'bg-fixed' );
    document.body.classList.remove( 'bg-line' );
  },
  metaInfo: {
    title: 'Journal | Oxer - Minimal Portfoli Vue JS Template',
    titleTemplate: '%s'
  }
}
</script>
