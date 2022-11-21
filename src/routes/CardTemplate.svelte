<script lang="ts">
  import type { Card } from "../types/card.type";
  export let card: Card;
</script>

<div class="aspect-mtg bg-white p-1">
  <div class="bg-slate-500 p-3 rounded">
    <div class="text-lg">{card.name}</div>
    <div class="text-md">{card.keywords}</div>
  </div>
  <div class="py-1">
    <table class="table-auto w-full text-center">
      <thead class="bg-slate-500">
        <tr>
          <th>Mv</th>
          <th>F</th>
          <th>S</th>
          <th>D</th>
          <th>A</th>
          <th>W</th>
          <th>C</th>
          <th>Mi</th>
          <th>Wi</th>
          <th>Ft</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{card.mv}"</td>
          <td>{card.f}/{card.fs}+</td>
          <td>{card.s}</td>
          <td>{card.d}</td>
          <td>{card.a}</td>
          <td>{card.w}</td>
          <td>{card.c}</td>
          <td>{card.might}</td>
          <td>{card.will}</td>
          <td>{card.fate}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
