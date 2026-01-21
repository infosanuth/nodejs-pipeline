# Use a lightweight Node.js image 
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy only package.json and package-lock.json to the container
# Allows Docker to cache the npm install layer for faster rebuilds
COPY nodeapp/package*.json ./

# Install dependencies listed in package.json
RUN npm install

# Copy all application source files into the container
COPY nodeapp/ .

# Expose port 5000 to allow network connections to the application
EXPOSE 5000

# Specify the command to start the Node.js application
CMD ["npm", "start"]
