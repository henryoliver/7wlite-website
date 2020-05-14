<script context="module">
    import Footer from '../../components/Footer.svelte';

    export function preload({ params, query }) {
        return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
            const latestPost = posts[0];

            return { posts, latestPost };
        });
    }
</script>

<script>
    export let posts;
    export let latestPost;
</script>

<svelte:head>
    <title>Thoughts on Product Design, Product-Market Fit, and Growth | 7wlite</title>
    <meta name="description" content="Best practices for companies looking for accelerate Product-Market Fit, increase customer value, and lower customer cost acquisition.">
</svelte:head>

<article class="box box--small blog-hero">
    <h2 class="post__title"><a href="blog/{latestPost.slug}">{latestPost.title}</a></h2>
    {@html latestPost.snippet}
    <footer class="blog-hero__footer">
        <a href="blog/{latestPost.slug}" class="button">Read more</a>
    </footer>
</article>

<aside class="blog-posts">
    <ul class="box box--small">
        {#each posts as post}
            <!-- we're using the non-standard `rel=prefetch` attribute to tell Sapper to load the data for the page as soon as the user hovers over the link or taps it, instead of waiting for the 'click' event -->
            <li class="blog-posts__post"><a rel="prefetch" href="blog/{post.slug}" class="blog-posts__title">{post.title}</a></li>
        {/each}
    </ul>
    <!-- <footer class="box box--small blog-posts__footer">
        <a href="#" class="blog-posts__link">Older posts</a>
    </footer> -->
</aside>

<Footer />
