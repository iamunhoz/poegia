function isLocalHost(): boolean {
  // Check if the window object is available (for browser environments)
  if (typeof window !== "undefined") {
    // Check if the hostname includes 'localhost' or '127.0.0.1'
    return (
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1"
    );
  }

  // If not in a browser environment, you may need to implement a different check based on your environment
  // For example, in Node.js, you could check process.env.NODE_ENV or process.env.HOST
  // Modify this part according to your specific use case

  // Default to false if the environment is unknown or doesn't match localhost
  return false;
}

export {
    isLocalHost
}