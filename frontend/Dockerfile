FROM node:18 as install
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# RUN npm run type-check

FROM install as development-stage
CMD ["npm", "run", "dev"]