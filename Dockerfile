FROM node:20.10.0

RUN mkdir work

RUN cd /work

RUN apt-get update

RUN apt-get install -y git

RUN apt install git

RUN git clone https://github.com/exactlyprateek/exactlyprateek.github.io.git


WORKDIR /work/exactlyprateek.github.io/portfolio

RUN npm cache clean --force

RUN node -v

RUN npm install

RUN npx vite build

WORKDIR /work

CMD ["/bin/bash", "-c", "echo $(pwd)"]
