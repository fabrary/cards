# Coding standards

Conventions for code in this repo that tooling does not enforce. Reviews cite
these by heading.

## Tautological tests are considered harmful

A test that restates its subject proves nothing: it passes when the code is
wrong in the same way the test is. Mocking the unit under test, asserting a
value against the expression that produced it, or copying the implementation's
logic into the expected value all fall under this. A test pins behavior from
the outside: given inputs, expected outputs, chosen so that a plausible bug
would fail it.

## Keep comments short

Delete any claim from a comment that is derivable from the code. A comment
earns its place by saying what the code cannot: an invariant, an external
constraint, or the reason behind a non-obvious choice. If the what needs
explaining, rename or restructure instead of describing it.
