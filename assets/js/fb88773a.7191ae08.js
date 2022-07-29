"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9756],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(o),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return o?n.createElement(h,i(i({ref:t},d),{},{components:o})):n.createElement(h,i({ref:t},d))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},6283:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=o(7462),a=(o(7294),o(3905));const r={slug:"docker-workflow",title:"Software Development Workflow with Docker",authors:"syed",tags:["docker","software development"]},i=void 0,s={permalink:"/blog/docker-workflow",editUrl:"https://github.com/syed-ahmed/syed-ahmed.github.io/blob/main/website/blog/2017-06-24-software-development-workflow-with-docker/index.md?plain=1",source:"@site/blog/2017-06-24-software-development-workflow-with-docker/index.md",title:"Software Development Workflow with Docker",description:"To best describe the motivation for writing this post let me describe the perspectives from two different people:",date:"2017-06-24T00:00:00.000Z",formattedDate:"June 24, 2017",tags:[{label:"docker",permalink:"/blog/tags/docker"},{label:"software development",permalink:"/blog/tags/software-development"}],readingTime:9.165,truncated:!1,authors:[{name:"Syed Tousif Ahmed",title:"Software Engineer",url:"https://syed.sh",imageURL:"https://github.com/syed-ahmed/syed-ahmed.github.io/raw/main/website/static/img/profile-pic1.jpg",key:"syed"}],frontMatter:{slug:"docker-workflow",title:"Software Development Workflow with Docker",authors:"syed",tags:["docker","software development"]},prevItem:{title:"Use All Tunable Vivado Internal Params",permalink:"/blog/vivado-internal-params"}},l={authorsImageUrls:[void 0]},c=[],d={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To best describe the motivation for writing this post let me describe the perspectives from two different people:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The Scientist's Perspective:")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"I am a scientist working on my next deep learning algorithm that's gonna make everyone go like whaaa? Sometimes, I write my algorithm in TensorFlow, sometimes in Torch and sometimes in Caffe. I am also poorly funded and can't afford multiple machines for different setups. My problem is that, all these machine learning frameworks are not in sync and some uses different CUDA versions, drivers, modules etc. than the other. Although I can probably make them work in the same machine by being disciplined and having good practices on putting library paths and symlinks and stuff, I will probably screw things up when it comes to update my system/framework. Also, I don't wanna write installation instructions of all my packages when I release my code to the conference I'm submitting my paper to. I want the scientific community to reproduce my experiment exactly as I did it in my machine. Is there something that can streamline this process?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The Software Developer's Perspective:")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"I am a software developer who's sick and tired of installing stuff and just want to run this freaking code and get on with it. Is there something that can streamline this process?")),(0,a.kt)("p",null,"The answer to their question is, yes. There is a thing called Docker which can streamline this process. Docker is kinda like a virtual machine but it doesn't include the OS, only the settings and minimal stuff that is required to reproduce your setup in another machine. For more on what it is, just read about it in this link: ",(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com/what-docker"},"https://www.docker.com/what-docker"),". Following is my migration process to docker:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(7426).Z,width:"921",height:"555"}),"Above is my previous workflow. I have a computer with all the packages locally installed. I have a text editor where I write and edit my source code. And I have a terminal to compile and run the source code. The problem comes when I have conflicting packages for different kinds of source code I'm working on. For instance, in my work, some source codes are dependent on specific versions of CUDA. Our CS Java class at RIT one semester was in java version 1.7 and the next semester in java 1.8. Some people have moved to python 3 and some are still using python 2. Hence, in the above workflow, avoiding such conflicts is messy. Following is my current workflow:",(0,a.kt)("img",{src:o(1152).Z,width:"1404",height:"710"}),"In this workflow, I have a computer with only Docker Engine and universal drivers such as the display driver, installed. The only difference now is that I don't have all the packages such as python 2/python 3 locally installed, but installed in Docker Containers. I have different docker containers for different development projects. For instance, the Docker container for TensorFlow has python 2 by default, CUDA 8 and other TensorFlow specific packages installed, whereas the Docker container for Caffe has it's own specification. Hence, after I write my code in the text editor locally, I run that code in it's specific docker container."),(0,a.kt)("p",null,"Following is a step by step process of how I write code in TensorFlow. You can adopt the same process for whatever project you are working on:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1: Edit the code")),(0,a.kt)("p",null,"So for instance, here is a code for a model that I'm writing in Visual Studio Code. You might be writing some code for finding the solutions of some differential equations with Runge-Kutta solver in C. Write that code first in an editor. I am still not settled on a single editor. People use Vim, Emacs, Spacemacs, Visual Studio Code, Atom, Sublime, etc... the list goes on.",(0,a.kt)("img",{src:o(9121).Z,width:"2560",height:"1600"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2: Get the Docker Container")),(0,a.kt)("p",null,"Assuming you have installed docker engine in your machine ","(",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/installation/"},"https://docs.docker.com/engine/installation/"),")",", now you have to get a docker container. A docker container is an image. You can either build this image from the scratch ","(","which I'll describe in a different post. You can even use multiple images and stack them up and make a single image to your requirements",")"," or you can get this image from a repository ","(",(0,a.kt)("a",{parentName:"p",href:"https://store.docker.com/search?q=&source=verified&type=image"},"https://store.docker.com/search?q=&source=verified&type=image"),")",". For now, I'll get the TensorFlow image with the following command in a terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it gcr.io/tensorflow/tensorflow:latest-devel bash\n")),(0,a.kt)("p",null,"or ","(","this command will just pull it, but not run it",")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull gcr.io/tensorflow/tensorflow:latest-devel\n")),(0,a.kt)("p",null,"The command pulls the image from the repository and puts it locally in your machine and runs a bash shell in it as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Syeds-MBP:ptb luna$ docker run -it gcr.io/tensorflow/tensorflow:latest-devel bash\nUnable to find image 'gcr.io/tensorflow/tensorflow:latest-devel' locally\nlatest-devel: Pulling from tensorflow/tensorflow\n892cc5bfc051: Already exists \nf3eda43ea55a: Already exists \n646005d97ff4: Already exists \n44d770c1f7bd: Already exists \n1ce0c4bfe746: Already exists \nb98b28b649a2: Pull complete \ndbcb14adf008: Pull complete \n18aa19fe8596: Pull complete \n7882fa001225: Pull complete \ncde898c339f7: Pull complete \n05db1985de18: Pull complete \n3ede8b995134: Pull complete \n7e09e41c9d96: Pull complete \nc3c542fce062: Pull complete \n2c4b672418c8: Pull complete \nDigest: sha256:2b3ab8cbcdd08fb93fc3b4e821ea366c2155a5af9441acfc03f927071b202a19\nStatus: Downloaded newer image for gcr.io/tensorflow/tensorflow:latest-devel\nroot@2bef7283910f:~# python\n")),(0,a.kt)("p",null,"If you now open and type python or give some other commands, you can see what is installed in this container For instance, in the following, you can see the TensorFlow container start python 2 by default, has TensorFlow version 1.2.0, has bazel 0.4.5 installed, java 1.8 and g++ 5.4.0 compiler. ",(0,a.kt)("strong",{parentName:"p"},"And you had to copy-paste only one command to get all of those! "),"That sure solved some of the installation problems our two subjects were having :",")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'root@2bef7283910f:~# python\nPython 2.7.12 (default, Nov 19 2016, 06:48:10) \n[GCC 5.4.0 20160609] on linux2\nType "help", "copyright", "credits" or "license" for more information.\n>>> import tensorflow as tf\n>>> tf.__version__\n\'1.2.0\'\n>>> exit()\nroot@2bef7283910f:~# bazel version\nBuild label: 0.4.5\nBuild target: bazel-out/local-fastbuild/bin/src/main/java/com/google/devtools/build/lib/bazel/BazelServer_deploy.jar\nBuild time: Thu Mar 16 12:19:38 2017 (1489666778)\nBuild timestamp: 1489666778\nBuild timestamp as int: 1489666778\nroot@2bef7283910f:~# javac -version\njavac 1.8.0_131\nroot@2bef7283910f:~# g++ -v\nUsing built-in specs.\nCOLLECT_GCC=g++\nCOLLECT_LTO_WRAPPER=/usr/lib/gcc/x86_64-linux-gnu/5/lto-wrapper\nTarget: x86_64-linux-gnu\nConfigured with: ../src/configure -v --with-pkgversion=\'Ubuntu 5.4.0-6ubuntu1~16.04.4\' --with-bugurl=file:///usr/share/doc/gcc-5/README.Bugs --enable-languages=c,ada,c++,java,go,d,fortran,objc,obj-c++ --prefix=/usr --program-suffix=-5 --enable-shared --enable-linker-build-id --libexecdir=/usr/lib --without-included-gettext --enable-threads=posix --libdir=/usr/lib --enable-nls --with-sysroot=/ --enable-clocale=gnu --enable-libstdcxx-debug --enable-libstdcxx-time=yes --with-default-libstdcxx-abi=new --enable-gnu-unique-object --disable-vtable-verify --enable-libmpx --enable-plugin --with-system-zlib --disable-browser-plugin --enable-java-awt=gtk --enable-gtk-cairo --with-java-home=/usr/lib/jvm/java-1.5.0-gcj-5-amd64/jre --enable-java-home --with-jvm-root-dir=/usr/lib/jvm/java-1.5.0-gcj-5-amd64 --with-jvm-jar-dir=/usr/lib/jvm-exports/java-1.5.0-gcj-5-amd64 --with-arch-directory=amd64 --with-ecj-jar=/usr/share/java/eclipse-ecj.jar --enable-objc-gc --enable-multiarch --disable-werror --with-arch-32=i686 --with-abi=m64 --with-multilib-list=m32,m64,mx32 --enable-multilib --with-tune=generic --enable-checking=release --build=x86_64-linux-gnu --host=x86_64-linux-gnu --target=x86_64-linux-gnu\nThread model: posix\ngcc version 5.4.0 20160609 (Ubuntu 5.4.0-6ubuntu1~16.04.4)\n')),(0,a.kt)("p",null,"But now you might be saying, I don't see my code in here. How do I get my code in this container? So the answer lies in how we issued the docker run command. Since this is a container and is a closed system, we need to ",(0,a.kt)("strong",{parentName:"p"},"mount")," our local folder into this container. Similarly, if we want to do some networking stuff, we would have to open the port in the local machine to this container  with the docker run command. You can learn all the options that can be passed to docker run command in here: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/run/"},"https://docs.docker.com/engine/reference/run/"),". For now type ",(0,a.kt)("strong",{parentName:"p"},"exit")," and go to step 3."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3: Running Docker")),(0,a.kt)("p",null,"To run a docker container, you need to identify which docker container to run. You can find out about available docker containers in your machine using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Syeds-MBP:ptb luna$ docker images\nREPOSITORY                     TAG                 IMAGE ID            CREATED             SIZE\ngcr.io/tensorflow/tensorflow   latest-devel        61c8843c7545        9 days ago          1.78 GB\n")),(0,a.kt)("p",null,"You can see that our docker container has a repository name, tag, image ID. You can run this container as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it gcr.io/tensorflow/tensorflow:latest-devel bash\n")),(0,a.kt)("p",null,"or with directly with the image id."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it 61c8843c7545 bash\n")),(0,a.kt)("p",null,"But our run command is not complete yet. We need to expose port 6006. So let's do that by adding ",(0,a.kt)("inlineCode",{parentName:"p"},"-p HostPort:ContainerPort")," argument as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it -p 6006:6006 61c8843c7545 bash\n")),(0,a.kt)("p",null,"Now we need to mount our source code directory with a ",(0,a.kt)("inlineCode",{parentName:"p"},"-v SourceDirectory:ContainerDirectory")," argument. Hence, our final run command is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Syeds-MBP:ptb luna$ docker run -it -p 6006:6006 -v /Users/luna/workspace/models/:/root/workspace 61c8843c7545 bash\nroot@89ce92fb9880:~# ls\nworkspace\nroot@89ce92fb9880:~# cd workspace/\nroot@89ce92fb9880:~/workspace# ls\nAUTHORS            WORKSPACE           cognitive_mapping_and_planning  inception                         neural_gpu             resnet         swivel       tutorials\nCONTRIBUTING.md    adversarial_crypto  compression                     learning_to_remember_rare_events  neural_programmer      setup.py       syntaxnet    video_prediction\nISSUE_TEMPLATE.md  adversarial_text    differential_privacy            lfads                             next_frame_prediction  skip_thoughts  tags\nLICENSE            attention_ocr       domain_adaptation               lm_1b                             object_detection       slim           textsum\nREADME.md          autoencoder         im2txt                          namignizer                        real_nvp               street         transformer\nroot@89ce92fb9880:~/workspace#\n")),(0,a.kt)("p",null,"Now you can see that your local source folder is mounted in a folder inside the container. Since, the local folder is mounted, any change you make in the local folder is going to reflect inside the container and any change you make inside the container is going to reflect in the local folder. Just beware of changing permission and doing git push/pull inside the container as this might screw things up in your workflow. Just keep things clean and edit the source code locally, do git commit/pull/push locally and only run and compile code in this development workflow ","(","the next post will talk about building docker images and how you can build on top of this image and add features to this image",")","."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 4: Run the source code in the docker container")),(0,a.kt)("p",null,"Assuming you have edited the source code, let's run the code in the docker container as follows. I'm going to run the ptb word model as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"root@89ce92fb9880:~/workspace/tutorials/rnn/ptb\xa3 python ptb_word_lm.py --data_path=simple-examples/data/ --model=small --save_path=./  \n2017-06-24 09:53:40.418532: W tensorflow/core/platform/cpu_feature_guard.cc:45] The TensorFlow library wasn't compiled to use SSE4.1 instructions, but these are available on your machine and could speed up CPU computations.\n2017-06-24 09:53:40.418576: W tensorflow/core/platform/cpu_feature_guard.cc:45] The TensorFlow library wasn't compiled to use SSE4.2 instructions, but these are available on your machine and could speed up CPU computations.\n2017-06-24 09:53:40.418586: W tensorflow/core/platform/cpu_feature_guard.cc:45] The TensorFlow library wasn't compiled to use AVX instructions, but these are available on your machine and could speed up CPU computations.\n2017-06-24 09:53:40.419125: W tensorflow/core/platform/cpu_feature_guard.cc:45] The TensorFlow library wasn't compiled to use AVX2 instructions, but these are available on your machine and could speed up CPU computations.\n2017-06-24 09:53:40.419173: W tensorflow/core/platform/cpu_feature_guard.cc:45] The TensorFlow library wasn't compiled to use FMA instructions, but these are available on your machine and could speed up CPU computations.\nEpoch: 1 Learning rate: 1.000\n0.004 perplexity: 7284.361 speed: 913 wps\n0.104 perplexity: 856.644 speed: 1090 wps\n")),(0,a.kt)("p",null,"Now let's make use of that exposed port using the following command and browsing to ",(0,a.kt)("a",{parentName:"p",href:"https://localhost:6006"},"https://localhost:6006")," in our local browser:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"root@89ce92fb9880:~/workspace/tutorials/rnn/ptb\xa3 tensorboard --logdir=./\nStarting TensorBoard 54 at https://89ce92fb9880:6006\n(Press CTRL+C to quit)\n")),(0,a.kt)("p",null,"As you can see, you got tensorboard opened up through port 6006:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{src:o(9843).Z,width:"1416",height:"868"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Conclusion")),(0,a.kt)("p",null,"So that's it. Edit the code locally, build and run in the container, and save experiment results from the container to the host. I have specifically used a development workflow from deep learning, but you can adopt this workflow for any kind of development. For instance, if you are doing web development with React or Angular, you can pull a container which has the required dependency like node, babel etc. and write you source code locally and run it in the container. Same goes for scientists who are writing high performance computing code. You can create a container with all the required packages and do the same. In the next post, I'll talk about how you can build your custom container. For now, this is it."))}u.isMDXComponent=!0},1152:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/current-workflow-3481f1dd1c9fe4543492aa01e0ae072d.png"},7426:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/previous-workflow-8e36dff65dfb071450eb51503b7d2ba8.png"},9121:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/screenshot1-ae02339eb0b0cd68b8700294644a0f02.png"},9843:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/screenshot2-8f8b6647293131ef79abbea791395639.png"}}]);