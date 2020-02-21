export const getEnv = () => {
  const environment = process.env.NODE_ENV === "production" ? "prod" : "dev";
  return environment;
};

export const baseUrl = () => {
  return process.env.NODE_ENV === "production"
    ? "prod"
    : "http://localhost:8082";
};
