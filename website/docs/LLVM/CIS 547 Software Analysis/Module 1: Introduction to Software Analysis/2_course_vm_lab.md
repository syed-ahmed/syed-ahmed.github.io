# Course VM and Lab Instructions
- Labs in https://github.com/syed-ahmed/cis547vm
- Also available in a docker container:
	```bash
	docker pull cis547/cis547vm
	```
- Run docker container:
	```bash
	docker run -it --name cis547 cis547/cis547vm
	# enable gdb in linux with the following command
	docker run -it --cap-add=SYS_PTRACE --security-opt seccomp=unconfined --privileged --name cis547 cis547/cis547vm
	```
- Type `exit` to exit the container. Changes will persist inside the container.
- Use `start` and `attach` to continue work:
	```bash
	docker start cis547
	docker attach cis547
	```
- Use docker volume to mount local code:
	```bash
	docker run -it -v <my_local_repo_directory>:<a directory inside docker continer> cis547/cis547vm
	```
- Use docker copy to copy files from continer to host:
	```bash
	docker cp cis547:[CONTAINER PATH] [HOST PATH]
	```
