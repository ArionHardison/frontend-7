<template>
    <section id="newsletter" class="block spacer p-top-xl">
        <div class="bg-white spacer p-top-xl p-bottom-xl footer-no-border">
            <div class="wrapper">
                <div class="newsletter">
                    <div class="newsletter-title">
                        <h2>Subscribe our Newsletter</h2>
                    </div>

                    <div class="newsletter-description">
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots.</p>
                    </div>

                    <div class="newsletter-shortcode">
                        <NewsletterForm />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import NewsletterForm from '../../components/Forms/NewsLetterForm';

    export default {
        name: 'NewsLetter',
        components: {
            NewsletterForm
        }
    }
</script>
