<script context="module">
    export function preload({ params, query }) {
        return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
            return { posts };
        });
    }
</script>

<script>
    export let posts;
</script>

<svelte:head>
    <title>Thoughts on Product Design, Product-Market Fit, and Growth | 7wlite</title>
    <meta name="description" content="Best practices for companies looking for accelerate Product-Market Fit, increase customer value, and lower customer cost acquisition.">
</svelte:head>

<article class="box box--small blog-hero">
    <h2 class="post__title"><a href="posts/when-to-leave-user-stories-behind.html">When to Leave User Stories Behind</a></h2>
    <p>The best way to kick off and grow a startup is to guide the product's roadmap towards the user's problems and challenges. However, as <a href="posts/winning-by-leaving-what-brought-you-here.html">we talked about</a> a few days ago, once you're in a mature market full of competitors that offer a similar solution, things change. You need to go beyond the obvious answers, and that happens only when you change how your product is built, and that starts with user stories.</p>
    <footer class="blog-hero__footer">
        <a href="posts/when-to-leave-user-stories-behind.html" class="button">Read more</a>
    </footer>
</article>

<aside class="blog-posts">
    <ul>
        {#each posts as post}
            <!-- we're using the non-standard `rel=prefetch` attribute to
                tell Sapper to load the data for the page as soon as
                the user hovers over the link or taps it, instead of
                waiting for the 'click' event -->
                <li><a rel='prefetch' href='blog/{post.slug}'>{post.title}</a></li>
        {/each}
    </ul>
    <ul class="box box--small">
        <li class="blog-posts__post"><a href="posts/winning-by-leaving-what-brought-you-here.html" class="blog-posts__title">Winning by Leaving What Brought You Here</a></li>
        <li class="blog-posts__post"><a href="posts/the-problem-with-standards.html" class="blog-posts__title">The Problem with Standards</a></li>
        <li class="blog-posts__post"><a href="posts/three-things-onboarding-is-about.html" class="blog-posts__title">Three Things Onboarding is About</a></li>
        <li class="blog-posts__post"><a href="posts/the-most-valuable-space-in-between.html" class="blog-posts__title">The Most Valuable Space in Between</a></li>
        <li class="blog-posts__post"><a href="posts/the-struggle-to-add-zero-value.html" class="blog-posts__title">The Struggle to Add Zero Value</a></li>
        <li class="blog-posts__post"><a href="posts/four-forces-product-adoption-rejection.html" class="blog-posts__title">The four forces that make people adopt or leave a product</a></li>
        <li class="blog-posts__post"><a href="posts/quality-standards-hurt-product-quality.html" class="blog-posts__title">Your Quality Standards are Keeping your Product from Being Better</a></li>
        <li class="blog-posts__post"><a href="posts/going-high-level-goals-feature-delivery.html" class="blog-posts__title">Going from High Level Goals to Feature Delivery</a></li>
        <li class="blog-posts__post"><a href="posts/growth-besides-marketing-sales.html" class="blog-posts__title">When growth has nothing to do with marketing and sales - Part One</a></li>
        <li class="blog-posts__post"><a href="posts/product-market-fit-makes-people-sell.html" class="blog-posts__title">Product-Market Fit is When People Sell for You</a></li>
    </ul>
    <!-- <footer class="box box--small blog-posts__footer">
        <a href="#" class="blog-posts__link">Older posts</a>
    </footer> -->
</aside>

<footer class="footer footer--secondary">
    <address class="box box--small flex h-card footer__address">
        <span class="p-company">7wlite<i class="footer__address-bullet">•</i></span>
        <span class="p-locality">Orlando, FL, USA<i class="footer__address-bullet">•</i>Lisbon, Portugal</span>
    </address>
</footer>
