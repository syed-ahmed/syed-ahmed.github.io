# Docker Cheatsheet
- Pull an image:
    ```bash
    docker pull pytorch/pytorch # no cuda toolkit
    # or
    docker pull pytorch/pytorch:1.11.0-cuda11.3-cudnn8-devel # with cuda toolkit
    # or
    docker pull nvcr.io/nvidia/pytorch:22.03-py3 # nvidia optimized, has nsight
    ```
- Run docker image:
    ```
    docker run --gpus all -it --rm --ipc=host --security-opt seccomp=unconfined --network=host -v <mount_host_folder>:<mount_folder_inside_container> nvcr.io/nvidia/pytorch:22.03-py3
    ```