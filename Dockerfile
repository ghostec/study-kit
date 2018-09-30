FROM node:8.10.0-alpine

EXPOSE 8080

RUN mkdir -p /var/apps/hub
WORKDIR /var/apps/study-kit
COPY . /var/apps/study-kit
RUN npm install

ENV NODE_ENV development
ENV PORT 8080

CMD ["sh", "docker_start.sh"]
