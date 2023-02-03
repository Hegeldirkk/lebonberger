FROM node:13.12.0-alpine
# Sets Working directory:
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH:
ENV PATH /app/node_modules/.bin:$PATH
# install app dependencies:
COPY package.json ./
COPY package-lock.json ./
RUN npm install -silent
RUN npm install react-scripts@3.41 -g —-silent

# Bundle app source inside Docker image:
COPY . ./

#Start app (npm start script from package.json):
CMD [“npm”, “start”]