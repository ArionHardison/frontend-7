<template>
    <div id="comments" class="comments-area spacer m-top-xl">
        <div class="comment-title">
            <h4 class="text-uppercase">Comments (1)</h4>
        </div>

        <ul class="comment-list list-unstyled style-default">
            <li class="comment">
                <div class="comment-wrapper">
                    <div class="comment-details">
                        <div class="comment-content">
                            <div class="comment-content-left">
                                <div class="comment-img">
                                    <img src="assets/img/placeholder/97x97.jpg" alt="Tom Henders">
                                </div>
                            </div>

                            <div class="comment-content-right">
                                <h6 class="comment-author after">
                                    <router-link title="Tom Henders" to="/news-single-post">Tom Henders</router-link>
                                </h6>

                                <div class="comment-time">
                                    <p>29 February, {{ new Date().getFullYear() }} 3:23 pm</p>
                                </div>

                                <div class="comment-description">
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                                </div>

                                <div class="comment-reply no-space">
                                    <a @click="scrollToSection('#reply-title')" title="Reply" class="comment-reply-link btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto link-no-space text-uppercase scroll-to-id" href="#reply-title">Reply</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>

        <div class="block spacer m-top-xl">
            <div id="respond" class="comment-respond">
                <h4 id="reply-title" class="comment-reply-title text-uppercase">Leave a reply <router-link rel="nofollow" id="cancel-comment-reply-link" class="btn btn-link border-0 p-0 min-w-auto link-no-space" to="/blog-single-post" :style="{ display: 'none' }">Cancel reply</router-link></h4>

                <CommentForm />
            </div>
        </div>
    </div>
</template>

<script>
    import CommentForm from '../../components/Forms/CommentForm';

    export default {
        name: 'Comments',
        components: {
            CommentForm
        }
    }
</script>
