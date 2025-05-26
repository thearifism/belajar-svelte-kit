<script>
  import { page } from "$app/state";
</script>

<h1>Unexpected Error : {page.status}</h1>

<p>Message : {page.error.message}</p>
