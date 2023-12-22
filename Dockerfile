FROM node:20.10.0

# Create a directory and set it as WORKDIR
RUN mkdir -p /work
WORKDIR /work

# Install git
RUN apt-get update && \
    apt-get install -y git

# Clone the repository
RUN git clone https://github.com/exactlyprateek/exactlyprateek.github.io.git

# Change WORKDIR to the portfolio directory
WORKDIR /work/exactlyprateek.github.io/portfolio

# Clear npm cache, install dependencies, and build
RUN npm cache clean --force
RUN node -v
RUN npm install --force
RUN npx vite build

# Set the final WORKDIR
WORKDIR /work

CMD ["/bin/bash", "-c", "echo $(pwd)"]
