### Why is docker needed? 
- Developing application stack requires different services, which need to be compatible with the OS 
- Services' compatibility with libraries / versions 
- Need guarantee that application being built needs to be run the same on different developer's machines 
- Need a way to modify/change components 
- **Docker allows ability to run each component with own container with own libraries and dependencies, all on the same virtual machine** 

### Containers 
- completely isolated environment with own: 
	- processes
	- network 
	- mounts 
- All containers share the same OS Kernel ![[Screenshot 2025-07-20 at 12.29.37 PM.png]]

### Operating System 
- contain OS kernel (eg: linux) -- responsible for interacting with underlying hardware 
- contain set of software -- software makes each system different, user interface, drivers, compilers, file managers, developer tools 

Docker can run any flavor of OS as long as the software is all based on the same OS kernel 

Main purpose of Docker is to package and containerize applications to be run 


### Containers vs VM's 
- Each VM has its' own OS within it, own libraries, dependencies, application 
- VM consume higher disk space and utilization since it needs to boot up the entire OS for each VM 
- Docker containers use less disk space and utilization since each container shares the OS resource ![[Screenshot 2025-07-20 at 12.36.29 PM.png]]

### Containers vs Images 
- Image is a package or template with instructions on how to run a piece of software
	- including the code, runtime, libraries, env variables, config files 
		- used to create 1 or more containers 
- Containers are running instances of images that have their own environments and sets of processes 
- **Docker Image = The Cake Recipe:** The recipe (Docker image) contains all the ingredients (code, libraries, dependencies) and precise instructions (Dockerfile) on how to combine them and bake the cake. It's a static blueprint.
- **Docker Container = The Baked Cake:** When you follow the recipe and bake the cake, you get an actual, edible cake (Docker container). You can make multiple cakes from the same recipe, and each cake will be an independent instance.

