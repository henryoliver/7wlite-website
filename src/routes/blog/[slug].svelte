<script context="module">
    import Footer from '../../components/Footer.svelte';

    export async function preload({ params, query }) {
        // the `slug` parameter is available because
        // this file is called [slug].svelte
        const res = await this.fetch(`blog/${params.slug}.json`);
        const data = await res.json();

        if (res.status === 200) {
            return { post: data };
        } else {
            this.error(res.status, data.message);
        }
    }
</script>

<script>
    export let post;
</script>

<svelte:head>
    <title>{post.title}</title>
    <meta name="description" content={post.description}>
</svelte:head>

<article class="post">
    <div class="box box--small">
        <header class="post__header">
            <a href="blog" class="post__link">All posts</a>
            <h2>{post.title}</h2>
        </header>

        {@html post.html}

        <footer class="post__footer">
            <a href="blog" class="post__link">All posts</a>
        </footer>
    </div>
</article>

<Footer />
