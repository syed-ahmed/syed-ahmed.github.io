# Exercise 1
In this exercise we will:
- Read a TorchScript IR using `torch::jit::parseIR`.
- Lower TorchScript IR to nvFuser Fusion IR using `torch::jit::fuser::cuda::parseJitIR`.
- Print the Fusion IR, understand `parseJitIR` and nvFuser basics.

# Solution
## Reading TorchScript IR
In these set of exercises, it doesn't really matter why we are using TorchScript as the input.
We want to focus on nvFuser Fusion IR and we can get to Fusion IR from TorchScript IR quickly.
- Create a C++ source file and start adding the
necessary headers:
    ```cpp
    #include <torch/csrc/jit/ir/ir.h>
    #include <torch/csrc/jit/ir/irparser.h>

    #include <iostream>
    ```
- Create a graph object:
    ```cpp
    auto g = torch::jit::Graph();
    ```
- Parse a TorchScript IR into the graph object:
    ```cpp
    const auto graph_str = R"IR(
        graph(%0 : Float(8, 256, 56, 56, strides=[802816, 3136, 56, 1], requires_grad=0, device=cuda:0),
            %1 : Float(256, strides=[1], requires_grad=0, device=cuda:0),
            %2 : Float(256, strides=[1], requires_grad=0, device=cuda:0),
            %3 : Float(256, strides=[1], requires_grad=0, device=cuda:0),
            %4 : Float(256, strides=[1], requires_grad=0, device=cuda:0),
            %5 : Float(8, 256, 56, 56, strides=[802816, 3136, 56, 1], requires_grad=0, device=cuda:0),
            %6 : Float(256, strides=[1], requires_grad=0, device=cuda:0),
            %7 : Float(256, strides=[1], requires_grad=0, device=cuda:0),
            %8 : Float(256, strides=[1], requires_grad=0, device=cuda:0),
            %9 : Float(256, strides=[1], requires_grad=0, device=cuda:0),
            %10 : int):
        %11 : float = prim::Constant[value=1.0000000000000001e-05]()
        %12 : float = prim::Constant[value=0.10000000000000001]()
        %13 : bool = prim::Constant[value=0]()
        %14 : Float(8, 256, 56, 56, strides=[802816, 3136, 56, 1], requires_grad=0, device=cuda:0), %15 : Tensor, %16 : Tensor = aten::native_batch_norm(%5, %6, %7, %8, %9, %13, %12, %11)
        %17 : Float(8, 256, 56, 56, strides=[802816, 3136, 56, 1], requires_grad=0, device=cuda:0), %18 : Tensor, %19 : Tensor = aten::native_batch_norm(%0, %1, %2, %3, %4, %13, %12, %11)
        %20 : Float(8, 256, 56, 56, strides=[802816, 3136, 56, 1], requires_grad=0, device=cuda:0) = aten::add(%17, %14, %10)
        %21 : Float(8, 256, 56, 56, strides=[802816, 3136, 56, 1], requires_grad=0, device=cuda:0) = aten::relu(%20)
        return (%21))IR";
    torch::jit::parseIR(graph_str, &g);
    ```
- Print the graph to convince yourself that the parser did its job:
    ```cpp
    std::cout << g << std::endl;
    ```

## Lower to Fusion IR
- First, add the necessary header to use `parseJitIR` and `FusionGuard`:
    ```cpp
    #include <torch/csrc/jit/codegen/cuda/executor.h>
    #include <torch/csrc/jit/codegen/cuda/parser.h>
    ```
- We'll need to make some changes to how we created the graph object. `parseJitIR` expects a `shared_ptr` object. So we'll change our graph creation accordingly:
    ```cpp
    auto g = std::make_shared<torch::jit::Graph>();
    ```
- Now we can lower TorchScript IR to Fusion IR and print:
    ```cpp
    auto fusion = torch::jit::fuser::cuda::parseJitIR(g);
    torch::jit::fuser::cuda::FusionGuard fg(fusion.get());
    fusion.get()->print();
    ```

## nvFuser Basics
TODO