<template>
    <div id="icons" class="spacer m-top-xl">
        <h3>Icons</h3>
        <p>More than 1,550 beautifully crafted icons with some helper classes.</p>

        <div id="fontawesome">
            <h4>FontAwesome</h4>
            <p>Font Awesome gives you scalable vector icons that can instantly be customized — size, color, drop shadow, and anything that can be done with the power of CSS.</p>

            <div class="bd-example">
                <i class="fa fa-home"></i>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;i class=&quot;fa fa-home&quot;&gt;&lt;/i&gt;</code></pre>
            </figure>
        </div>

        <div class="bd-callout bd-callout-warning">
            <h5>More examples</h5>

            <p> You can see the list of
                <a href="https://fontawesome.com/cheatsheet?from=io" target="_blank">available icons</a> online.
            </p>
        </div>

        <div id="custom-icons">
            <h4>Custom icons</h4>

            <div class="bd-example">
                <p><i class="forch-icon-arrow-right"></i> - forch-icon-arrow-right</p>
                <p><i class="forch-icon-arrow-left"></i> - forch-icon-arrow-left</p>
                <p><i class="forch-icon-arrow-top"></i> - forch-icon-arrow-top</p>
                <p><i class="forch-icon-arrow-bottom"></i> - forch-icon-arrow-bottom</p>
                <p><i class="forch-icon-menu"></i> - forch-icon-menu</p>
                <p><i class="forch-icon-close"></i> - forch-icon-close</p>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;i class=&quot;forch-icon-arrow-right&quot;&gt;&lt;/i&gt;
&lt;i class=&quot;forch-icon-arrow-left&quot;&gt;&lt;/i&gt;
&lt;i class=&quot;forch-icon-arrow-top&quot;&gt;&lt;/i&gt;
&lt;i class=&quot;forch-icon-arrow-bottom&quot;&gt;&lt;/i&gt;
&lt;i class=&quot;forch-icon-menu&quot;&gt;&lt;/i&gt;
&lt;i class=&quot;forch-icon-close&quot;&gt;&lt;/i&gt;</code></pre>
                                            </figure>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Icons'
    }
</script>
