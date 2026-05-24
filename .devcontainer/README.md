Short note about the devcontainer `node_modules` volume

This devcontainer uses a Docker named volume for `node_modules` to avoid sharing
the host `node_modules` directory with the container. That prevents platform
and permission issues and keeps container-installed packages from writing to
your host filesystem.

Key points
- The volume name is `devcontainer_node_modules` and is mounted at
  the container workspace `node_modules` path.
- The container runs `npm ci` on first create (`postCreateCommand`) to populate
  the volume with project dependencies.
