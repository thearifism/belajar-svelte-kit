import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
  const response = await fetch(`/api/products/${params.id}.json`);

  if (response.status !== 200) {
    error(404, {
      message: "Product not found",
    })
  }

  return response.json();
}