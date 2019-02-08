FROM mhart/alpine-node:11

EXPOSE 8080
COPY ["./package.json", "./package-lock.json", "./app/"]
COPY ["./src", "./app/src"]

WORKDIR /app

RUN npm i --quiet
CMD npm run start


