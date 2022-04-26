# Conda commands
- Create new conda environment:
    ```bash
    conda create -n myenv python=3.9
    ```
- Create environment from yaml:
    ```bash
    conda env create -f environment.yml
    ```
- Export environment.yml:
    ```
    conda env export > environment.yml
    ```