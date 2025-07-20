# Use an official base image
# Use a stable Node.js Alpine base image
FROM node:22-alpine

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json /app

RUN npm install

# Copy application source code
COPY . /app


# Start the application
CMD ["npm","start"]