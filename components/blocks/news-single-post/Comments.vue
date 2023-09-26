<template>
    <div id="comments" class="comments-area spacer m-top-xl">
        <div class="comment-title">
            <h2>Comments (1)</h2>
        </div>

        <ul class="comment-list list-unstyled style-default">
            <li class="comment">
                <div class="comment-wrapper">
                    <div class="comment-details">
                        <div class="comment-content">
                            <div class="comment-content-left">
                                <div class="comment-img">
                                    <img src="assets/img/placeholder/18_img.jpg" alt="Rosie Ford">
                                </div>
                            </div>

                            <div class="comment-content-right">
                                <h5 class="comment-author after">
                                    <router-link title="Rosie Ford" to="/news-single-post">Rosie Ford</router-link>
                                </h5>

                                <div class="comment-description">
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                                </div>

                                <div class="comment-reply no-space">
                                    <a @click="scrollToSection('#reply-title')" title="Reply" class="btn btn-lg btn-link link-color-2 p-0 border-0 min-w-auto link-no-space scroll-to-id" href="#reply-title">
                                        <i class="fas fa-reply"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>

        <div class="block spacer m-top-xl">
            <div id="respond" class="comment-respond">
                <h2 id="reply-title" class="comment-reply-title">Leave a reply <router-link rel="nofollow" id="cancel-comment-reply-link" class="btn btn-link link-color-2 border-0 p-0 min-w-auto link-no-space" to="/news-single-post" style="display:none;">Cancel reply</router-link></h2>

                <CommentForm />
            </div>
        </div>
    </div>
</template>

<script>
    import CommentForm from '~/components/Forms/CommentForm';

    export default {
        name: 'Comments',
        components: {
            CommentForm
        }
    }
</script>
