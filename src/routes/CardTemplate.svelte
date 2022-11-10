<script lang="ts">
    import type { Card } from "../types/card.type";
    export let card: Card;
</script>

<div class="aspect-mtg bg-white p-1">
    <div class="bg-slate-500 p-3 rounded">
        <div class="text-lg">{card.name}</div>
        <div class="text-md">{card.keywords}</div>
    </div>
    <span>{card.faction}</span>
    <div />
    Mv<span>{card.mv}</span>
    F<span>{card.f}/{card.fs}+</span>
    S<span>{card.s}</span>
    D<span>{card.d}</span>
    A<span>{card.a}</span>
    W<span>{card.w}</span>
    C<span>{card.c}</span>
</div>
