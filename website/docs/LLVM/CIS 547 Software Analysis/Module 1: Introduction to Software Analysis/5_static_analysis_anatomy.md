# Anatomy of a Static Analysis

## Example Static Analysis Problem
- Problem: find variables that have a constant value at a given program point.
- Example code:
    ```cpp
    void main() {
        z = 3;
        while (true) {
            if(x == 1)
                y = 7;
            else
                y = z + 4;
            assert(y == 7);
        }
    }
    ```
- Formulate question as static analysis problem.
- Static analysis can discover y = 7, at the end of each iteration of the loop.

## Terminology
### Control-flow graph
- Static analysis operates on a intermediate representation.
- CFG is a representation of the program.
    - A DAG summarizes the flow of control in all possible runs of the program.
    - Each node refers to a unique statement in the program.
    - Each edge from a node is a successor of that node.

### Abstract vs. concrete states
- Abstract state: static analysis tracking the variables at each program point.
- Concrete state: actual values of the variables in a run.
- Static analysis does not run the program -> so does not operate over concrete states. Operates over abstract states.
- Abstract state -> set of concrete states -> known as abstract semantics -> vs concrete semantics.
- Static analysis may fail to find variable value in abstract state -> represent it by `?`.

### Termination
- Abstract semantics ensures termination of static analysis.
- Can miss value of variable that are constant.

### Completeness
- Static analysis sacrifices completeness because it can miss values.

### Soundness
- When analysis concludes the value of a variable, this is 
correct for all runs -> therefore static analysis is sound.

## Example Abstract Domain
- Designing static analysis is an art.
- No best choice of abstract semantics. Concrete semantics dictated by program.
- Different abstract semantic choice lead different results.
- Right choice depends on the consumer of the analysis.
- Designing an abstract semantic
    - Step 1: Design an abstract domain.
        - shows possible abstract values each `int` variable can take.
        - also include two special values.
        - top -> ? -> unknown to the analysis.
        - bottom -> \_|\_ -> underfined to the analysis.
        - arranged in a lattice structure -> showing possible order in which how values might changed as it goes through the analysis.
        - Example:
            - Iterative Approximation:
                - Initial state:    
                    - abstract value top at the entry of the progam.
                    - abstract value bottom at all other program points.
                    - Implying nothing is visited except entry point, and that variables uninitialized at entry -> take arbitrary values.
                    - Program point can be before, after or during for the node.
                    - Assume program point as the edge for now.
                    - Analysis updates the values at each program point.
                    - Update is done based on the predecessor of the program point.
                    - E.g. after `z = 3`, analysis updates z's abstract value to 3. True branch is always taken. False branch is infeasible -> program will never take that path. Should analysis interpret conditional? If not interpret conditional, assume false state is feasible.
                    Checking value of `x==1`. `x!=1` cannot be represented by our domain. x is some value other than 1. represent as unknown in the false branch and 1 in the true branch.
                    `y=7`, analysis knows `y=7`. Analysis concludes `x=1, y=7, z=3 `. For `y = z + 4`,
                    analysis has seen `z=3` befor this path, so
                    it include `y=7`, and concludes assertion is valid.
                    - Iterative approximation -> analysis can visit same program point multiple times -> due to presence of loops -> to update facts.
        - Another Example:
            - Iterative Approximation:
                - abstract value top at the entry and bottom everywhere else.
                - Program points: loop header, entry of loop body, exit of loop body.
                - Take looping into consideration.
                - `b=1` at the entry, at the exit it's 2.
                - Analysis revisits loop again to show soundness.
                - At the next entry, b can be 1 or 2, b updated to unknown.
                - At the exit, updated to unknown as well.
                - Analyse loop again, concludes b has saturated at entry and exit. Correct value of b is unknown.
                - Combining multiple abstract state is called merging.
                - Combination operator -> form of conjuction ->
                for `b=1`, it must be `=1` in all paths. When merge states from 1st and 2nd iteration, `b` is unknown. If trying to prove, `b` may be `= 1`, define combination op
                as a disjunction. If `b=1` on atleast 1 program path, it should `=1` in abstract state.
                - This choice made by analysis designer based on consumer and tradeoffs.

## Recap: Parts of a Static Analysis
- Specify program representation precisely: CFG, AST, bytecode.
- Specify abstract domain -> how to approximate program values.
- Specify transfer functions -> how to calculate abstract state given program statement -> also specific how to combine information at control point -> assignments, conditionals, merge points.
- Specify fixed-point computation algorithm -> invokes transfer functions of program statements -> fixed point means abstract states are no longer changing, so analysis should terminate.
- At each step, many choices -> choice dependent on the application and tradeoff -> there is no one-size-fits-all static analysis.
