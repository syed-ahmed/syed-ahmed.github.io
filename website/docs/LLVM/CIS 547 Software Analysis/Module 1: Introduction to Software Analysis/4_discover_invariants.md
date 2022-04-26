# Discovering Invariants by Dynamic and Static Analysis

## Program Invariants
- Consider the following:
	```cpp
	int p(int x) { return x * x; }

	void main() {
		int z;
		if (getc() == 'a')
			z = p(6) + 6;
		else
			z = p(-7) - 7;
	}
	```
- `z=`?
- Invariant is a program fact that is true in every run of the program.
- An invariant in the above program:
	- `z == c` for constant `c`
- `c = 42`
- Need to reason about only two cases over all runs.
- In true branch, `z = 6*6+6 = 42`.
- In false branch, `z = (-7*-7)-7 = 42`.
- Therefore `z = 42` is an invariant at the program exit.
- Now add the following at the end of the program:
	```cpp
	...
	if (z != 42)
		disaster();
	...
	```
- Above demonstrates, the program invariant can be used as a guard against a potentially unsafe function.

## Discovering Invariants By Dynamic Analysis
- The above has two paths, but programs have arbitrary paths: loops, cases, recursion etc.
- Dynamic analysis: 
	- runs the program _n_ times and discovers information.
	- discovering information over an arbitrary amount of paths is not feasible with dynamic analysis.
	- At best can detect likely invariants (`Daikon`).
	- `Daikon` can at best concluded `z = 42` is a _likely_ invariant. Cannot prove `z == 42`.
	- Not entirely useless. `z` _might_ be `42` is a useful fact.
	- `Daikon` can rule out classes of invariant with a single run. It can concluded `z == c` is not an invariant for any `c` other than `42`, i.e. `z==30` is not an invariant.
	- To prove `z == 42`, need static analysis.

## Discovering Invariants By Static Analysis
- Inspect the source code of the program.
- Concludes `c = 42` and this proves the invariant.
