import vault from 'node-vault';
import dotenv from 'dotenv';

dotenv.config();

const vaultClient = vault({
    endpoint: process.env.VAULT_ADDR!,
});

export async function getCredentials(): Promise<{user: string; password: string}> {
    try {
        const secret = await vaultClient.read(process.env.VAULT_SECRET_PATH!);
        return {
            user: secret.data.user,
            password: secret.data.password,
        };
    } catch (error) {
        console.error('Error reading secret from Vault:', error);
        throw new Error('Error reading secret from Vault');
    }
}