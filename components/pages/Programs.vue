<template>
  <div id="news-index">
    <Loading />

    <Header logoColor='dark'/>

    <main id="main" class="site-main">
      <PageTitle />

      <div id="page-content" class="spacer p-top-xl">
        <div class="wrapper">
          <div class="content">
            <div id="blog">
              <div class="row gutter-width-md">
                <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                  <NewsBlog />

                  <LoadMore />
                </div>

                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <Sidebar />
                </div>
              </div>
            </div>
          </div>
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

import PageTitle from '~/components/blocks/news/PageTitle';
import Sidebar from '~/components/blocks/news/Sidebar';
import NewsBlog from '~/components/blocks/news/Blog';
import LoadMore from '~/components/Loadmore/Loadmore';

export default {
  components: {
    Loading,
    Header,
    PageTitle,
    Sidebar,
    NewsBlog,
    LoadMore,
    Footer
  },
  mounted: function() {
    document.body.classList.add( 'blog' );
    document.body.classList.add( 'bg-fixed' );
    document.body.classList.add( 'bg-stripes' );
  },
  beforeDestroy() {
    document.body.classList.remove( 'blog' );
    document.body.classList.remove( 'bg-fixed' );
    document.body.classList.remove( 'bg-stripes' );
  },
  metaInfo: {
    title: 'News | Forch - Factory & Industrial Business Vue JS Template',
    titleTemplate: '%s'
  }
}
</script>
