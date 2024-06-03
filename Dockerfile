# Use an official Node.js runtime as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Create a directory called "admin" inside the container
RUN mkdir /app/admin

# Copy the package.json and package-lock.json files from the local directory to the "admin" directory inside the container
COPY ./admin/package*.json ./app/admin/

# Create a directory called "admin" inside the container
RUN mkdir /app/client

# Copy the package.json and package-lock.json files from the local directory to the "admin" directory inside the container
COPY ./client/package*.json ./app/client/

# Install the dependencies
RUN npm install

# Expose the port that the application will be running on
EXPOSE 5175
EXPOSE 5176
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"]