# Step 1: Use a Node.js base image
FROM node:18-alpine AS build

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application
COPY . .

# Step 6: Run the Expo export command to generate static files
RUN npx expo export --output-dir dist

# Step 7: Use a lightweight image to serve the static files
FROM node:18-alpine AS serve

# Step 8: Install a static file server (e.g., `serve`)
RUN npm install -g serve

# Step 9: Copy the exported files from the build stage
COPY --from=build /app/dist /app/dist

# Step 10: Expose the default port for `serve`
EXPOSE 9022

# Step 11: Run the static file server to serve the app
CMD ["serve", "/app/dist", "-l", "9022"]
