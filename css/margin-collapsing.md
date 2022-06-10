# Margin Collapsing

Sometimes margins of some element doesn't applies as we expected it to.
In other words, margin of element gets collapsed with previous element and it doesn't takes the space expelicitly, instead it feels marginss are overlapping over other elements.

How to solve this:
By creating an Block Formatting Context.

# Block Formatting Context

Block Formatting Context suppresses margin collapsing and have someeffects on float containers ( haven't explored).

### How to create a Block Formatting Context?

There are many ways to do this:

1. `display: flex/grid`
2. `display: flow-root`
3. `display: inline-block`
4. `position: absolute/fixed`
5. overflow: anything except `visible/clip`

> out of this `display: flex` has worked best for me most of the times.
