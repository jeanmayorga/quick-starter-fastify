import * as envalid from 'envalid';
import path from 'path';

const { str } = envalid;

export const config = envalid.cleanEnv(
  process.env,
  {
    X_CREDENTIAL: str() ?? '',
  },
  { strict: true, dotEnvPath: path.resolve(__dirname, '../.env') },
);
