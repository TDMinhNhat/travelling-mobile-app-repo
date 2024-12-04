# Build stage
FROM node:latest as builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

# Runtime stage
FROM node:alpine
WORKDIR /app
COPY --from=builder /app/build /app
EXPOSE 8081
CMD ["yarn", "start"]