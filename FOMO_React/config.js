const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export default {
  mongodbUri: 'mongodb+srv://fomo:FOMO%40usc2021@fomo-bhjbi.mongodb.net/FOMO_REACT?retryWrites=true',
  port: env.PORT || 8080,
  host: env.HOST || '0.0.0.0',
  apiKey: "AIzaSyCSxhrd7CNdamoVZNGi3ympB-DwyJyp8Ic",
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  }
};
