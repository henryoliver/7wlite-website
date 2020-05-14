<script>
    export let segment;
</script>

<header class="box flex between middle-sm header">
    <figure class="flex header__logo">
        <a href="." aria-current="{segment === undefined ? 'page' : undefined}">
            <img class="header__logo-image" src="images/logo.png"  srcset="images/logo@2x.png 2x" alt="7wlite" />
        </a>
    </figure>

    <input id="nav-trigger" class="hidden" name="nav-trigger" type="checkbox">
    <label class="header__nav-trigger" for="nav-trigger"></label>
    <nav class="flex middle top-md column-sm between header__nav">
        <a href="blog" class="header__link" rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}">Blog</a>
        <a href="#services" class="header__link js-scroll">Services</a>
        <a href="#cases" class="header__link js-scroll">Cases</a>
        <a href="#contact" class="header__link js-scroll">Contact</a>
    </nav>
</header>

