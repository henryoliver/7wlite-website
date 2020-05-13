<script>
    import { stores } from '@sapper/app'
    import Nav from '../components/Nav.svelte';
    import GoogleAnalytics from 'sapper-google-analytics/GoogleAnalytics.svelte'

    let analyticsId = 'UA-143056927-1'

    export let segment;
</script>

<Nav {segment}/>

<main>
    <slot></slot>
</main>

<GoogleAnalytics {stores} id={analyticsId} />
