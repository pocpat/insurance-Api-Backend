# create a new image from the base image
FROM node:18-alpine

# set working directory
WORKDIR /app


COPY . . 
RUN rm -rf /app/node_modules

# install dependencies
RUN npm install

# Render production build
RUN npm run build


# run the application
CMD ["npm", "run", "test"]
#CMD ["/bin/sh"]