# Use an official Node.js runtime as a parent image
FROM node:20
 
# Set the working directory in the container
WORKDIR /app
 
# Install nano, vim, and libaio1
RUN apt-get update && apt-get install -y --no-install-recommends nano vim
 
# Copy package.json and package-lock.json to the container
COPY package*.json ./
 
# Install dependencies
RUN npm install
 
# Copy the rest of the application code to the container
COPY . .
 
# Command to run the application
CMD ["npm", "run", "dev"]