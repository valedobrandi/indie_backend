import readSecret from "./utils/readSecret"

const quiz_token = readSecret('/run/secrets/quiz_token_secret', 'token');

export const http = {
    quizapi: `https://quizapi.io/api/v1/questions?apiKey=${quiz_token}&limit=20`
}