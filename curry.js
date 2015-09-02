/**
 * MIT License
 * Implicit currying with Sweet.js
 * @author Marcelo Camargo <marcelocamargo@linuxmail.org>
 */

function curry$(f, bound){
  var context,
  _curry = function(args) {
    return f.length > 1 ? function(){
      var params = args ? args.concat() : [];
      context = bound ? context || this : this;
      return params.push.apply(params, arguments) <
          f.length && arguments.length ?
        _curry.call(context, params) : f.apply(context, params);
    } : f;
  };
  return _curry();
}

// Unary lambda function
macro (λ) {
  // Curried function
  rule { $param:ident ... $[|] $body:expr } => {
    curry$(function($param (,) ...) {
        return $body;
    });
  }
}
