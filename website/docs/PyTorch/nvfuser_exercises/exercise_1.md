# Exercise 1
In this exercise we will:
- Read a TorchScript IR using `torch::jit::parseIR`.
- Lower TorchScript IR to nvFuser Fusion IR using `torch::jit::fuser::cuda::parseJitIR`.
- Print the Fusion IR, understand `parseJitIR` and nvFuser basics.

## Reading TorchScript IR
In these set of exercises, it doesn't really matter why we are using TorchScript as the input. We want to focus on nvFuser Fusion IR and we can get to Fusion IR from TorchScript IR quickly.

- Create a C++ source file and start adding the necessary headers:

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
```llvm

%kernel {
T22_l[ bS52{1}, iS53{i7}, bS54{1}, bS55{1} ]
   = broadcast( T3_g[ iS6{i7} ] )
T23_l[ iS56{i0}, iS57{i2}, iS58{i3}, iS59{i4} ]
   = T0_g[ iS0{i0}, iS1{i2}, iS2{i3}, iS3{i4} ]
   - T22_l[ bS52{1}, iS53{i7}, bS54{1}, bS55{1} ];
T24_l[ iS60{i8} ]
   = T4_g[ iS7{i8} ]
   + double(9.9999997473787516e-06);
T25_l[ iS61{i8} ]
   = rsqrtf(T24_l[ iS60{i8} ]);
T26_l[ bS62{1}, iS63{i8}, bS64{1}, bS65{1} ]
   = broadcast( T25_l[ iS61{i8} ] )
T29_l[ iS68{i0}, iS69{i2}, iS70{i3}, iS71{i4} ]
   = T23_l[ iS56{i0}, iS57{i2}, iS58{i3}, iS59{i4} ]
   * T26_l[ bS62{1}, iS63{i8}, bS64{1}, bS65{1} ];
T30_l[ bS72{1}, iS73{i5}, bS74{1}, bS75{1} ]
   = broadcast( T1_g[ iS4{i5} ] )
T31_l[ iS76{i0}, iS77{i2}, iS78{i3}, iS79{i4} ]
   = T29_l[ iS68{i0}, iS69{i2}, iS70{i3}, iS71{i4} ]
   * T30_l[ bS72{1}, iS73{i5}, bS74{1}, bS75{1} ];
T32_l[ bS80{1}, iS81{i6}, bS82{1}, bS83{1} ]
   = broadcast( T2_g[ iS5{i6} ] )
T33_l[ iS84{i0}, iS85{i2}, iS86{i3}, iS87{i4} ]
   = T31_l[ iS76{i0}, iS77{i2}, iS78{i3}, iS79{i4} ]
   + T32_l[ bS80{1}, iS81{i6}, bS82{1}, bS83{1} ];
T10_l[ bS16{1}, iS17{i15}, bS18{1}, bS19{1} ]
   = broadcast( T8_g[ iS14{i15} ] )
T11_l[ iS20{i9}, iS21{i10}, iS22{i11}, iS23{i12} ]
   = T5_g[ iS8{i9}, iS9{i10}, iS10{i11}, iS11{i12} ]
   - T10_l[ bS16{1}, iS17{i15}, bS18{1}, bS19{1} ];
T12_l[ iS24{i16} ]
   = T9_g[ iS15{i16} ]
   + double(9.9999997473787516e-06);
T13_l[ iS25{i16} ]
   = rsqrtf(T12_l[ iS24{i16} ]);
T14_l[ bS26{1}, iS27{i16}, bS28{1}, bS29{1} ]
   = broadcast( T13_l[ iS25{i16} ] )
T17_l[ iS32{i9}, iS33{i10}, iS34{i11}, iS35{i12} ]
   = T11_l[ iS20{i9}, iS21{i10}, iS22{i11}, iS23{i12} ]
   * T14_l[ bS26{1}, iS27{i16}, bS28{1}, bS29{1} ];
T18_l[ bS36{1}, iS37{i13}, bS38{1}, bS39{1} ]
   = broadcast( T6_g[ iS12{i13} ] )
T19_l[ iS40{i9}, iS41{i10}, iS42{i11}, iS43{i12} ]
   = T17_l[ iS32{i9}, iS33{i10}, iS34{i11}, iS35{i12} ]
   * T18_l[ bS36{1}, iS37{i13}, bS38{1}, bS39{1} ];
T20_l[ bS44{1}, iS45{i14}, bS46{1}, bS47{1} ]
   = broadcast( T7_g[ iS13{i14} ] )
T21_l[ iS48{i9}, iS49{i10}, iS50{i11}, iS51{i12} ]
   = T19_l[ iS40{i9}, iS41{i10}, iS42{i11}, iS43{i12} ]
   + T20_l[ bS44{1}, iS45{i14}, bS46{1}, bS47{1} ];
d116 = (double)(i17);
T34_l[ iS88{i9}, iS89{i10}, iS90{i11}, iS91{i12} ]
   = T21_l[ iS48{i9}, iS49{i10}, iS50{i11}, iS51{i12} ]
   * d116;
T35_l[ iS92{i0}, iS93{i2}, iS94{i3}, iS95{i4} ]
   = T33_l[ iS84{i0}, iS85{i2}, iS86{i3}, iS87{i4} ]
   + T34_l[ iS88{i9}, iS89{i10}, iS90{i11}, iS91{i12} ];
T36_g[ iS96{i0}, iS97{i2}, iS98{i3}, iS99{i4} ]
   = relu(T35_l[ iS92{i0}, iS93{i2}, iS94{i3}, iS95{i4} ]);

TransformPrinter : 
T0_g[ iS0{i0}, iS1{i2}, iS2{i3}, iS3{i4} ]
 root domain : (iS0{i0},iS1{i2},iS2{i3},iS3{i4})
T3_g[ iS6{i7} ]
 root domain : (iS6{i7})
T22_l[ bS52{1}, iS53{i7}, bS54{1}, bS55{1} ]
 root domain : (bS52{1},iS53{i7},bS54{1},bS55{1})
T23_l[ iS56{i0}, iS57{i2}, iS58{i3}, iS59{i4} ]
 root domain : (iS56{i0},iS57{i2},iS58{i3},iS59{i4})
T4_g[ iS7{i8} ]
 root domain : (iS7{i8})
T24_l[ iS60{i8} ]
 root domain : (iS60{i8})
T25_l[ iS61{i8} ]
 root domain : (iS61{i8})
T26_l[ bS62{1}, iS63{i8}, bS64{1}, bS65{1} ]
 root domain : (bS62{1},iS63{i8},bS64{1},bS65{1})
T29_l[ iS68{i0}, iS69{i2}, iS70{i3}, iS71{i4} ]
 root domain : (iS68{i0},iS69{i2},iS70{i3},iS71{i4})
T1_g[ iS4{i5} ]
 root domain : (iS4{i5})
T30_l[ bS72{1}, iS73{i5}, bS74{1}, bS75{1} ]
 root domain : (bS72{1},iS73{i5},bS74{1},bS75{1})
T31_l[ iS76{i0}, iS77{i2}, iS78{i3}, iS79{i4} ]
 root domain : (iS76{i0},iS77{i2},iS78{i3},iS79{i4})
T2_g[ iS5{i6} ]
 root domain : (iS5{i6})
T32_l[ bS80{1}, iS81{i6}, bS82{1}, bS83{1} ]
 root domain : (bS80{1},iS81{i6},bS82{1},bS83{1})
T33_l[ iS84{i0}, iS85{i2}, iS86{i3}, iS87{i4} ]
 root domain : (iS84{i0},iS85{i2},iS86{i3},iS87{i4})
T5_g[ iS8{i9}, iS9{i10}, iS10{i11}, iS11{i12} ]
 root domain : (iS8{i9},iS9{i10},iS10{i11},iS11{i12})
T8_g[ iS14{i15} ]
 root domain : (iS14{i15})
T10_l[ bS16{1}, iS17{i15}, bS18{1}, bS19{1} ]
 root domain : (bS16{1},iS17{i15},bS18{1},bS19{1})
T11_l[ iS20{i9}, iS21{i10}, iS22{i11}, iS23{i12} ]
 root domain : (iS20{i9},iS21{i10},iS22{i11},iS23{i12})
T9_g[ iS15{i16} ]
 root domain : (iS15{i16})
T12_l[ iS24{i16} ]
 root domain : (iS24{i16})
T13_l[ iS25{i16} ]
 root domain : (iS25{i16})
T14_l[ bS26{1}, iS27{i16}, bS28{1}, bS29{1} ]
 root domain : (bS26{1},iS27{i16},bS28{1},bS29{1})
T17_l[ iS32{i9}, iS33{i10}, iS34{i11}, iS35{i12} ]
 root domain : (iS32{i9},iS33{i10},iS34{i11},iS35{i12})
T6_g[ iS12{i13} ]
 root domain : (iS12{i13})
T18_l[ bS36{1}, iS37{i13}, bS38{1}, bS39{1} ]
 root domain : (bS36{1},iS37{i13},bS38{1},bS39{1})
T19_l[ iS40{i9}, iS41{i10}, iS42{i11}, iS43{i12} ]
 root domain : (iS40{i9},iS41{i10},iS42{i11},iS43{i12})
T7_g[ iS13{i14} ]
 root domain : (iS13{i14})
T20_l[ bS44{1}, iS45{i14}, bS46{1}, bS47{1} ]
 root domain : (bS44{1},iS45{i14},bS46{1},bS47{1})
T21_l[ iS48{i9}, iS49{i10}, iS50{i11}, iS51{i12} ]
 root domain : (iS48{i9},iS49{i10},iS50{i11},iS51{i12})
T34_l[ iS88{i9}, iS89{i10}, iS90{i11}, iS91{i12} ]
 root domain : (iS88{i9},iS89{i10},iS90{i11},iS91{i12})
T35_l[ iS92{i0}, iS93{i2}, iS94{i3}, iS95{i4} ]
 root domain : (iS92{i0},iS93{i2},iS94{i3},iS95{i4})
T36_g[ iS96{i0}, iS97{i2}, iS98{i3}, iS99{i4} ]
 root domain : (iS96{i0},iS97{i2},iS98{i3},iS99{i4})
}

```
