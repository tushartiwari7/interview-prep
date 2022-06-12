# CSS Positioning

we can manipulate the data with css positioning.

### Accepted Values:

- `static` (default)
- `relative`
- `absolute`
- `fixed`
- `sticky`

## position: `static`

It is the default value for `position` property. The element's position will be normal to its document flow. Also `inset(left/right/top/bottom)` will not work.

## position: `relative`

The element's position will be relative to it's normal document flow. Properties like `inset(left/right/top/bottom)`will try to position element from its normall flow.

## position: `absolute`

The element will be removed from the normal document flow and will be moved to the document flow of its nearest parent with `position: absolute/relative`.Properties like `inset(left/right/top/bottom)`will try to position element from its parent's document flow.

> If the parent's position is not `relative/absolute` then it will go one more level up and try to find position `relative/absolute` and will keep. repeating this until it finds a parent with position `relative/absolute`. <br> If none of the parents have position `relative/absolute` then it will relative to the body of the page.

## position: `fixed`

Similar to position absolute, it will just be relative to the document/body of the webpage everytime.

And will stay there even on scrolling.

## position: `sticky`

Tradeoff between position: "relative" and "fixed". The element will behave as relative to its normal flow until it reaches to the scroll position mentioned in `inset(left/right/top/bottom)`.
