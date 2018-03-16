---
layout: post
title:  "How to install TensorFlow on the NVIDIA Jetson TX2?"
category: tech
---
### Introduction

The Jetson platform is specialized for doing inferences for deep learning projects. For instance, if you want to use a trained Google Inception model to recognize objects from your flying drone, putting the Jetson TX2 on that drone is a great idea. TensorFlow is becoming a standard library for writing these deep learning models. Hence, to live up to these standards, we would want TensorFlow to be running on this platform. However, the installation process is kinda difficult since, there is a lot of architecture specific definitions that are missing in the TensorFlow repository, as well as from the dependencies of TensorFlow such as Bazel, Protobuf etc. These issues are tracked in [Issue \# 851](https://github.com/tensorflow/tensorflow/issues/851), in [stackoverflow](http://stackoverflow.com/questions/39783919/tensorflow-on-nvidia-tx1/) and in [Jetson Hacks](https://github.com/jetsonhacks/installTensorFlowTX1). I applied the knowledge from those three links in the Jetson TX2 and following is a step by step procedure of that.

### Pre-requisites

* Make sure you have gone through the Jetson TX2 setup process. If not, here is the [user guide](http://developer.download.nvidia.com/embedded/L4T/r27_Release_v1.0/Docs/Jetson_X2_Developer_Kit_User_Guide.pdf?autho=1490220307_7f6e498fde290aee44c5e648b5cfc8fd&file=Jetson_X2_Developer_Kit_User_Guide.pdf). I recommend flashing the system after you have unboxed it.
* Log in to the Jetson TX2 directly or via ssh.

### Steps

#### Step 1: Install Java

{% highlight bash %}
sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update
sudo apt-get install oracle-java8-installer
{% endhighlight %}

#### Step 2: Install More Stuff \(I am using Python 2.7\)

{% highlight bash %}
sudo apt-get install zip unzip autoconf automake libtool curl zlib1g-dev maven -y
sudo apt-get install python-numpy swig python-dev python-pip python-wheel -y
{% endhighlight %}

#### Step 3: Install Bazel

1. Download [**bazel-0.4.5-dist.zip**](https://github.com/bazelbuild/bazel/releases/download/0.4.5/bazel-0.4.5-dist.zip).
2. Unzip the package.
3. `cd bazel-0.4.5-dist`
4. Open the file `src/main/java/com/google/devtools/build/lib/util/CPU.java` using an editor.
5. Modify Line 28, which says `ARM("arm", ImmutableSet.of("arm","armv7l")),` to `ARM("arm", ImmutableSet.of("aarch64", "arm","armv7l")),` . This change is currently in the process of getting merged with the bazel repository. Hence, in the future you might not need to do this step.
6. Start the compilation process by issuing
    `./compile.sh`
7. Copy the build to your system bin folder
   `sudo cp output/bazel /usr/local/bin`

#### Step 4: Create a Swap File

Since TensorFlow needs about 8GB memory to compile, we are going to create a swap file.

1. Create an 8GB swapfile
   {% highlight bash %}
   fallocate -l 8G swapfile
   {% endhighlight %}
2. Change permission of the swapfile
   {% highlight bash %}
   chmod 600 swapfile
   {% endhighlight %}
3. Create swap area
   {% highlight bash %}
   mkswap swapfile
   {% endhighlight %}
4. Activate the swap area
   {% highlight bash %}
   swapon swapfile
   {% endhighlight %}
5. Confirm swap area being used
   {% highlight bash %}
   swapon -s
   {% endhighlight %}

#### Step 5: Install TensorFlow

1. Clone the repo in your desired directory: `git clone https://github.com/tensorflow/tensorflow.git`
2. Check out the latest release: 
   {% highlight bash%}
   cd tensorflow
   git checkout v1.0.1
   {% endhighlight %}
3. Open the file `tensorflow/stream_executor/cuda/cuda_gpu_executor.cc` in an editor. In the function `static intTryToReadNumaNode(conststring &pci_bus_id,intdevice_ordinal)` add the following lines at the start of the function. This hardcodes the function to return 0, since, there is no NUMA node in the ARM and because we know that we are installing this stuff in an ARM system:
   {% highlight cpp %}
   LOG(INFO) << "ARM has no NUMA node, hardcoding to return zero";
   return 0;
   {% endhighlight %}
4. For some reason, my Jetson installation didn't put cudnn.h in the directory TensorFlow was looking into. Hence I had to manually copy the installed cudnn.h into the desired folder as follows:
   {% highlight bash%}
   sudo cp /usr/include/cudnn.h /usr/lib/aarch64-linux-gnu/include/cudnn.h
   {% endhighlight %}
5. Configure the TensorFlow installation by issuing:
   {% highlight bash%}
   ./configure
   {% endhighlight %}
6. Following are my selections. I chose to keep XLA, since it's a cool feature and I wanted to experiment with it:

   {% highlight bash %}
   ubuntu@tegra-ubuntu:~/tensorflow$ ./configure 
   Please specify the location of python. [Default is /usr/bin/python]: /usr/bin/python2.7
   Please specify optimization flags to use during compilation [Default is -march=native]: 
   Do you wish to use jemalloc as the malloc implementation? (Linux only) [Y/n] y
   jemalloc enabled on Linux
   Do you wish to build TensorFlow with Google Cloud Platform support? [y/N] n
   No Google Cloud Platform support will be enabled for TensorFlow
   Do you wish to build TensorFlow with Hadoop File System support? [y/N] n
   No Hadoop File System support will be enabled for TensorFlow
   Do you wish to build TensorFlow with the XLA just-in-time compiler (experimental)? [y/N] y
   XLA JIT support will be enabled for TensorFlow
   Found possible Python library paths:
     /usr/local/lib/python2.7/dist-packages
     /usr/lib/python2.7/dist-packages
   Please input the desired Python library path to use.  Default is [/usr/local/lib/python2.7/dist-packages]

   Using python library path: /usr/local/lib/python2.7/dist-packages
   Do you wish to build TensorFlow with OpenCL support? [y/N] n
   No OpenCL support will be enabled for TensorFlow
   Do you wish to build TensorFlow with CUDA support? [y/N] y
   CUDA support will be enabled for TensorFlow
   Please specify which gcc should be used by nvcc as the host compiler. [Default is /usr/bin/gcc]: 
   Please specify the CUDA SDK version you want to use, e.g. 7.0. [Leave empty to use system default]: 
   Please specify the location where CUDA  toolkit is installed. Refer to README.md for more details. [Default is /usr/local/cuda]: 
   Please specify the Cudnn version you want to use. [Leave empty to use system default]: 
   Please specify the location where cuDNN  library is installed. Refer to README.md for more details. [Default is /usr/local/cuda]: 
   Please specify a list of comma-separated Cuda compute capabilities you want to build with.
   You can find the compute capability of your device at: https://developer.nvidia.com/cuda-gpus.
   Please note that each additional compute capability significantly increases your build time and binary size.
   Extracting Bazel installation...
   .......................
   INFO: Starting clean (this may take a while). Consider using --expunge_async if the clean takes more than several minutes.
   .......................
   INFO: All external dependencies fetched successfully.
   Configuration finished
   {% endhighlight %}

7. Once your configuration is done, start the compilation by issuing the command:

   {% highlight bash%}
   bazel build -c opt --local_resources 3072,4.0,1.0 --verbose_failures --config=cuda //tensorflow/tools/pip_package:build_pip_package
   {% endhighlight %}

8. Once Tensorflow is compiled, build the pip package:

   {% highlight bash%}
   bazel-bin/tensorflow/tools/pip_package/build_pip_package /tmp/tensorflow_pkg
   {% endhighlight %}

9. Move the pip wheel from the tmp directory if you want to save it:

   {% highlight bash%}
   mv /tmp/tensorflow_pkg/tensorflow-1.0.1-cp27-cp27mu-linux_aarch64.whl $HOME/
   {% endhighlight %}

10. Install the pip wheel:

    {% highlight bash%}
    sudo pip install $HOME/tensorflow-1.0.1-cp27-cp27mu-linux_aarch64.whl
    {% endhighlight %}

11. Reboot the system:`sudo reboot`

12. Test your Installation by issuing the following commands:

    {% highlight bash %}
    ubuntu@tegra-ubuntu:~$ python
    Python 2.7.12 (default, Nov 19 2016, 06:48:10) 
    [GCC 5.4.0 20160609] on linux2
    Type "help", "copyright", "credits" or "license" for more information.
    >>> import tensorflow as tf
    I tensorflow/stream_executor/dso_loader.cc:135] successfully opened CUDA library libcublas.so.8.0 locally
    I tensorflow/stream_executor/dso_loader.cc:135] successfully opened CUDA library libcudnn.so.5 locally
    I tensorflow/stream_executor/dso_loader.cc:135] successfully opened CUDA library libcufft.so.8.0 locally
    I tensorflow/stream_executor/dso_loader.cc:135] successfully opened CUDA library libcuda.so.1 locally
    I tensorflow/stream_executor/dso_loader.cc:135] successfully opened CUDA library libcurand.so.8.0 locally
    >>> x = tf.constant(1.0)
    >>> y = tf.constant(2.0)
    >>> z = x + y
    >>> with tf.Session() as sess:
    ...     print z.eval()
    ... 
    I tensorflow/stream_executor/cuda/cuda_gpu_executor.cc:874] ARM has no NUMA node, hardcoding to return zero
    I tensorflow/core/common_runtime/gpu/gpu_device.cc:885] Found device 0 with properties: 
    name: GP10B
    major: 6 minor: 2 memoryClockRate (GHz) 1.3005
    pciBusID 0000:00:00.0
    Total memory: 7.67GiB
    Free memory: 6.79GiB
    I tensorflow/core/common_runtime/gpu/gpu_device.cc:906] DMA: 0 
    I tensorflow/core/common_runtime/gpu/gpu_device.cc:916] 0:   Y 
    I tensorflow/core/common_runtime/gpu/gpu_device.cc:975] Creating TensorFlow device (/gpu:0) -> (device: 0, name: GP10B, pci bus id: 0000:00:00.0)
    E tensorflow/stream_executor/cuda/cuda_driver.cc:1002] failed to allocate 6.45G (6929413888 bytes) from device: CUDA_ERROR_OUT_OF_MEMORY
    E tensorflow/stream_executor/cuda/cuda_driver.cc:1002] failed to allocate 5.81G (6236472320 bytes) from device: CUDA_ERROR_OUT_OF_MEMORY
    E tensorflow/stream_executor/cuda/cuda_driver.cc:1002] failed to allocate 5.23G (5612825088 bytes) from device: CUDA_ERROR_OUT_OF_MEMORY
    E tensorflow/stream_executor/cuda/cuda_driver.cc:1002] failed to allocate 4.70G (5051542528 bytes) from device: CUDA_ERROR_OUT_OF_MEMORY
    E tensorflow/stream_executor/cuda/cuda_driver.cc:1002] failed to allocate 4.23G (4546387968 bytes) from device: CUDA_ERROR_OUT_OF_MEMORY
    E tensorflow/stream_executor/cuda/cuda_driver.cc:1002] failed to allocate 3.81G (4091749120 bytes) from device: CUDA_ERROR_OUT_OF_MEMORY
    I tensorflow/compiler/xla/service/platform_util.cc:58] platform CUDA present with 1 visible devices
    I tensorflow/compiler/xla/service/platform_util.cc:58] platform Host present with 4 visible devices
    I tensorflow/compiler/xla/service/service.cc:180] XLA service executing computations on platform Host. Devices:
    I tensorflow/compiler/xla/service/service.cc:187]   StreamExecutor device (0): <undefined>, <undefined>
    I tensorflow/compiler/xla/service/platform_util.cc:58] platform CUDA present with 1 visible devices
    I tensorflow/compiler/xla/service/platform_util.cc:58] platform Host present with 4 visible devices
    I tensorflow/compiler/xla/service/service.cc:180] XLA service executing computations on platform CUDA. Devices:
    I tensorflow/compiler/xla/service/service.cc:187]   StreamExecutor device (0): GP10B, Compute Capability 6.2
    3.0

    {% endhighlight %}

#### Step 6: Do a Celebratory Dance.

That's it. You are now ready to use tensorflow.

### Known Issues

1. Issue:

   {% highlight bash%}
   E tensorflow/stream_executor/cuda/cuda_driver.cc:1002] failed to allocate 6.45G (6929413888 bytes) from device: CUDA_ERROR_OUT_OF_MEMORY
   {% endhighlight %}

   Explanation: [http://stackoverflow.com/questions/34514324/error-using-tensorflow-with-gpu](http://stackoverflow.com/questions/34514324/error-using-tensorflow-with-gpu)

2. Issue:

   {% highlight bash%}
   W: Invalid 'Date' entry in Release file /var/lib/apt/lists/_var_nv-gie-repo-ga-cuda8.0-gie1.0-20170116_Release
   W: Invalid 'Date' entry in Release file /var/lib/apt/lists/partial/_var_libopencv4tegra-repo_Release
   {% endhighlight %}

   Explanation: [https://bugs.launchpad.net/ubuntu/+source/apt/+bug/1649086](https://bugs.launchpad.net/ubuntu/+source/apt/+bug/1649086)



