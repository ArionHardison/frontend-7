<template>
    <div id="news-single-post-index">
        <Loading />

        <Header />
        
        <main id="main" class="site-main">
            <PageTitle />

            <div id="page-content" class="spacer p-top-xl">
                <div class="wrapper">
                    <div class="content">
                        <div id="single">
                            <div class="row gutter-width-sm">
                                <div class="col-xl-8 col-lg-8 col-md-12 single-content">
                                    <div class="img object-fit">
                                        <div class="object-fit-cover">
                                            <img src="assets/img/placeholder/1054x620.jpg" alt="5 Benefits of Going to a Barber">
                                        </div>
                                    </div>

                                    <Meta />

                                    <div class="title">
                                        <h2 class="text-uppercase">5 Benefits of Going to a Barber</h2>
                                    </div>

                                    <div class="description clearfix">
                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>

                                        <blockquote>
                                            <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                                        </blockquote>

                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                    </div>

                                    <Tags />

                                    <Comments />
                                </div>

                                <div class="col-xl-4 col-lg-4 col-md-12">
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
    import Loading from '../../components/Loading/Loading';
    import Header from '../../blocks/header/Header';
    import Footer from '../../blocks/footer/Footer';

    import PageTitle from '../../blocks/news/PageTitle';
    import Sidebar from '../../blocks/news/Sidebar';
    import Meta from '../../blocks/news-single-post/Meta';
    import Tags from '../../blocks/news-single-post/Tags';
    import Comments from '../../blocks/news-single-post/Comments';

    export default {
        components: {
            Loading,
            Header,
            PageTitle,
            Sidebar,
            Meta,
            Tags,
            Comments,
            Footer
        },
        mounted: function() {
            document.body.classList.add( 'single-post' );
        },
        beforeDestroy() {
            document.body.classList.remove( 'single-post' );
        },
        metaInfo: {
            title: 'News single post | Chop - Barber Shop Vue JS Template',
            titleTemplate: '%s'
        }
    }
</script>
