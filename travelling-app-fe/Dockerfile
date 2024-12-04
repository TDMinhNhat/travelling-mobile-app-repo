# Build stage
FROM node:latest as builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn

# Runtime stage
FROM node:alpine
WORKDIR /app
COPY --from=builder /app/node_modules /app
COPY package.json yarn.lock /app
EXPOSE 8081
CMD ["yarn", "start"]