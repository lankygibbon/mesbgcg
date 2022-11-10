<script lang=ts>
    import type {Card} from "../types/card.type";
    export let card: Card;
</script>

<div id="card" class="aspect-mtg">
<span>{card.name}</span>
<span>{card.keywords}</span>
<span>{card.faction}</span>
<div></div>
Mv<span>{card.mv}</span>
F<span>{card.f}/{card.fs}+</span>
S<span>{card.s}</span>
D<span>{card.d}</span>
A<span>{card.a}</span>
W<span>{card.w}</span>
C<span>{card.c}</span>

</div>