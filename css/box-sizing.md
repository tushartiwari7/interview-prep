# Box Sizing

In CSS, the box sizing property can have 2 possible values.

- `content-box` (default)
- `border-box`

## Content-Box

With this, the properties like width, height, min-width etc. will apply to the `Content-area`.

> padding comes under the content-area: It just stretches the content area by the `value` provided in padding.

## Border-Box

With this, the properties like width, height, min-width etc. will apply to the whole area including the `Border`, `padding` and `Content`.

> Margin area will be excluded in both the cases.

<hr/>
 Bonus: Read about Margin Collapsing and Block Formatting Context.
