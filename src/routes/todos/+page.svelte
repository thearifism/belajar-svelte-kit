<script>
  const { data, form } = $props();
</script>

<form action="?/add" method="post">
  {#if form?.error}
    <label for="todo" style="color: red;"> Todo : ({form?.message})</label>
  {:else}
    <label for="todo"> Todo :</label>
  {/if}
  <input type="text" name="todo" id="todo" />
  <button type="submit">Add</button>
</form>

<ul>
  {#each data.todos as todo}
    <li>
      {todo.id} - {todo.name}
      <form action="?/delete" method="post" style="display: inline-block;">
        <input type="hidden" name="id" value={todo.id} />
        <button type="submit">Delete</button>
      </form>
    </li>
  {/each}
</ul>
