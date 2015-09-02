### Sweet Currying!

Implicit currying with λ functions!

### Syntax

```js
let add = λ a b | a + b
var uncurried = add(10, 20); // 30;
var curried = add(10)(20); // 30;
var curriedFn = add(10); // function(y) { return $(UPPERSCOPE_X) + y; };
```
