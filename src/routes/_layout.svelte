<script>
    import { stores } from '@sapper/app'
    import Nav from '../components/Nav.svelte';
    import GoogleAnalytics from 'sapper-google-analytics/GoogleAnalytics.svelte'

    let analyticsId = process.env.GOOGLE_ANALYTICS;

    export let segment;
</script>

<Nav {segment}/>

<main>
    <slot></slot>
</main>

<GoogleAnalytics {stores} id={analyticsId} />
