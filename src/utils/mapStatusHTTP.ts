// src/utils/mapStatusHTTP.ts

export default function mapStatusHTTP(status: string): number {
  switch (status) {
    case 'SUCCESSFUL': return 200;
    case 'INVALID_DATA': return 400;
    case 'NOT_FOUND': return 404;
    case 'CONFLICT': return 409;
    case 'UNAUTHORIZED': return 401;
    case 'CREATED': return 201;
    case 'UNPROCESSABLE_CONTENT': return 422;
    case 'OK': return 200;
    default: return 500;
  }
}
