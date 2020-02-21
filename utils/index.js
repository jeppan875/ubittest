export const getEnv = () => {
  const environment = process.env.NODE_ENV === "production" ? "prod" : "dev";
  return environment;
};

export const baseUrl = () => {
  return process.env.NODE_ENV === "production"
    ? "https://ubittest.jeppan875.now.sh"
    : "http://localhost:8082";
};
