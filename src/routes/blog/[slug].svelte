<script context="module">
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
    <title>The Four Forces That Make People Adopt or Leave a Product | 7wlite Blog</title>
    <meta name="description" content="If people hate the product they use now, they'll consider switching. That's a push force. If they see something in your product that will make them perform...">
</svelte:head>

<article class="post">
    <div class="box box--small">
        <header class="post__header">
            <a href="/blog" class="post__link">All posts</a>
            <h2>The four forces that make people adopt or leave a product</h2>
        </header>

        <p>If people hate the product they use now, they'll consider switching. That's a push force.</p>
        <p>If they see something in your product that will make them perform better (without pissing them off), they'll consider adopting it. Call it a pull force.</p>
        <p>Both of the above are positive forces that could act in your favor. Reinforce them, especially when onboarding new users to your product. Make it clear that:</p>
        <p>a) You don't have the annoying stuff your competitors have</p>
        <p>b) You are the one that helps them get more value, faster than anyone else</p>
        <p>When talking about the different things your product does, let people know how it works. If you don't explain it, they'll get anxious, and the switch won't happen. That's the third force: anxiety.</p>
        <p>When considering going to a different solution, customers will also want to know how to handle the switch. Let them know that your product and/or your team will take care of this for them. RReassure them of how your product assists them importing data, customer support, and compatibility, so they stop fearing the change. And this is the last force: habit.</p>
        <p>You convert a customer from your competitors when push and pull forces are bigger than anxiety and habit forces. You lose customers when the same happens, only in favor of your competition.</p>
        <footer class="post__footer">
            <a href="/blog" class="post__link">All posts</a>
        </footer>
    </div>
</article>

<h1>{post.title}</h1>

<div>
    {@html post.html}
</div>
