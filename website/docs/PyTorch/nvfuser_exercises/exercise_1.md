# Exercise 1
In this exercise we will:
- Read a TorchScript IR using `torch::jit::parseIR`.
- Lower TorchScript IR to nvFuser Fusion IR using `torch::jit::fuser::cuda::parseJitIR`.
- Print the Fusion IR, understand `parseJitIR` and nvFuser basics.

# Walkthrough
