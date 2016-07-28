
FROM node:0.10

ADD build /app

WORKDIR /app/bundle

RUN cd programs/server && npm install

ENV ROOT_URL http://acatmore.com/
ENV PORT 80

CMD node main.js
